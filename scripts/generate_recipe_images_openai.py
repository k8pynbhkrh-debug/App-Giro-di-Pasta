#!/usr/bin/env python3
"""Generate high-quality ingredient illustrations for recipe cards via OpenAI Images API.

Usage:
  OPENAI_API_KEY=... python scripts/generate_recipe_images_openai.py
  OPENAI_API_KEY=... python scripts/generate_recipe_images_openai.py --limit 3
  OPENAI_API_KEY=... python scripts/generate_recipe_images_openai.py --ids arrabbiata carbonara
"""

from __future__ import annotations

import argparse
import base64
import io
import json
import os
import sys
import time
from pathlib import Path
from typing import Any, Iterable
from urllib import error, request

from PIL import Image, ImageChops

API_URL = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-1"
TARGET_SIZE = (1600, 820)
GEN_SIZE = "1536x1024"

STYLE_BLOCK = (
    "editorial cookbook illustration, hand drawn graphite sketch, fine linework, "
    "light realistic shading, soft natural colors, high detail, material texture visible, "
    "no cartoon, no comic, no typography"
)

NEGATIVE_BLOCK = (
    "Do not show pasta, noodles, plates, bowls, pans, cutlery, table, kitchen, chef, hands, "
    "background scene, logos, labels, text, letters, numbers, watermark."
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate recipe ingredient illustrations")
    parser.add_argument("--recipes", default="recipes.json", help="Path to recipes.json")
    parser.add_argument("--out-dir", default="assets/recipes", help="Output directory")
    parser.add_argument("--ids", nargs="*", default=[], help="Only generate these recipe ids")
    parser.add_argument("--ids-file", default="", help="Path to newline-separated recipe ids")
    parser.add_argument("--limit", type=int, default=0, help="Generate only first N recipes")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing images")
    parser.add_argument("--sleep", type=float, default=0.35, help="Delay between API calls")
    parser.add_argument("--retries", type=int, default=3, help="Retries per image")
    return parser.parse_args()


def load_recipes(path: Path) -> list[dict[str, Any]]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise ValueError("recipes.json must contain a list")
    recipes: list[dict[str, Any]] = []
    for row in data:
        recipe_id = str(row["id"])
        ingredients = list(row["ingredients"])
        if len(ingredients) == 0:
            raise ValueError(f"Recipe {recipe_id} has no ingredients")
        if len(ingredients) > 3:
            raise ValueError(f"Recipe {recipe_id} has > 3 ingredients ({len(ingredients)})")
        recipes.append({"id": recipe_id, "ingredients": ingredients})
    return recipes


def build_prompt(recipe_id: str, ingredients: list[str]) -> str:
    listed = ", ".join(ingredients)
    ingredient_lines = "\n".join([f"- {ing}" for ing in ingredients])
    return (
        "Create one single ingredient illustration for a pasta cooking game card.\n"
        f"Style: {STYLE_BLOCK}.\n"
        "Composition: centered, organic dynamic arrangement, ingredients large and iconic, "
        "frame-filling with minimal empty margin.\n"
        "Background: fully transparent alpha background.\n"
        f"Show ONLY these ingredients (max 3): {listed}.\n"
        f"Ingredient checklist (must all be visible):\n{ingredient_lines}\n"
        f"Recipe id for file tracking: {recipe_id}.\n"
        f"{NEGATIVE_BLOCK}\n"
        "No extra objects. No additional ingredients."
    )


def call_image_api(api_key: str, prompt: str) -> bytes:
    payload = {
        "model": MODEL,
        "prompt": prompt,
        "size": GEN_SIZE,
        "quality": "high",
        "background": "transparent",
        "output_format": "png",
    }
    raw = json.dumps(payload).encode("utf-8")
    req = request.Request(
        API_URL,
        data=raw,
        method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
    )

    with request.urlopen(req, timeout=240) as resp:
        body = resp.read()

    parsed = json.loads(body.decode("utf-8"))
    data = parsed.get("data") or []
    if not data:
        raise RuntimeError(f"No image data in response: {parsed}")

    first = data[0]
    b64 = first.get("b64_json")
    if b64:
        return base64.b64decode(b64)

    url = first.get("url")
    if url:
        with request.urlopen(url, timeout=240) as img_resp:
            return img_resp.read()

    raise RuntimeError(f"Response did not contain b64_json or url: {first}")


def alpha_bbox(image: Image.Image, threshold: int = 38):
    alpha = image.getchannel("A")
    mask = alpha.point(lambda x: 255 if x >= threshold else 0)
    return mask.getbbox() or alpha.getbbox()


def fit_to_target(png_bytes: bytes) -> Image.Image:
    src = Image.open(io.BytesIO(png_bytes)).convert("RGBA")
    tw, th = TARGET_SIZE

    bbox = alpha_bbox(src, threshold=38)
    if bbox:
        src = src.crop(bbox)

    sw, sh = src.size
    if sw == 0 or sh == 0:
        raise RuntimeError("Generated image is empty")

    target_w = tw - 44
    target_h = th - 38
    scale = min(target_w / sw, target_h / sh)
    new_w = max(1, int(sw * scale))
    new_h = max(1, int(sh * scale))

    resized = src.resize((new_w, new_h), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", TARGET_SIZE, (0, 0, 0, 0))
    x = (tw - new_w) // 2
    y = (th - new_h) // 2
    canvas.alpha_composite(resized, (x, y))
    return canvas


def ensure_transparent_background(image: Image.Image, alpha_threshold: int = 28) -> Image.Image:
    rgba = image.convert("RGBA")
    alpha = rgba.getchannel("A")
    keep_mask = alpha.point(lambda x: 255 if x >= alpha_threshold else 0)
    cleaned_alpha = ImageChops.multiply(alpha, keep_mask)
    rgba.putalpha(cleaned_alpha)

    # Extra safety cleanup if model returns an opaque near-white backdrop.
    px = rgba.load()
    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = px[x, y]
            if a > 0 and r > 248 and g > 248 and b > 248:
                px[x, y] = (0, 0, 0, 0)
            elif a == 0:
                px[x, y] = (0, 0, 0, 0)

    return rgba


def filtered_recipes(recipes: list[dict[str, Any]], ids: Iterable[str], limit: int) -> list[dict[str, Any]]:
    ids_set = set(ids)
    if ids_set:
        recipes = [r for r in recipes if r["id"] in ids_set]
    if limit > 0:
        recipes = recipes[:limit]
    return recipes


def main() -> int:
    args = parse_args()

    api_key = os.environ.get("OPENAI_API_KEY", "").strip()
    if not api_key:
        print("ERROR: OPENAI_API_KEY is not set in this session.", file=sys.stderr)
        return 2

    recipes_path = Path(args.recipes)
    out_dir = Path(args.out_dir)

    if not recipes_path.exists():
        print(f"ERROR: Missing recipes file: {recipes_path}", file=sys.stderr)
        return 2

    recipes = load_recipes(recipes_path)

    selected_ids = list(args.ids)
    if args.ids_file:
        ids_path = Path(args.ids_file)
        if not ids_path.exists():
            print(f"ERROR: Missing ids file: {ids_path}", file=sys.stderr)
            return 2
        selected_ids.extend([line.strip() for line in ids_path.read_text(encoding="utf-8").splitlines() if line.strip()])

    recipes = filtered_recipes(recipes, selected_ids, args.limit)
    if not recipes:
        print("Nothing to generate after applying filters.")
        return 0

    out_dir.mkdir(parents=True, exist_ok=True)

    print(f"Generating {len(recipes)} images to {out_dir} ...")

    success = 0
    skipped = 0
    failed = 0

    for idx, recipe in enumerate(recipes, start=1):
        rid = recipe["id"]
        ingredients = recipe["ingredients"]
        out_path = out_dir / f"{rid}.png"

        if out_path.exists() and not args.overwrite:
            skipped += 1
            print(f"[{idx:02d}/{len(recipes):02d}] SKIP  {rid} (exists)")
            continue

        prompt = build_prompt(rid, ingredients)

        done = False
        for attempt in range(1, args.retries + 1):
            try:
                png = call_image_api(api_key, prompt)
                image = fit_to_target(png)
                image = ensure_transparent_background(image)
                image.save(out_path, format="PNG")
                success += 1
                print(f"[{idx:02d}/{len(recipes):02d}] OK    {rid}")
                done = True
                break
            except error.HTTPError as exc:
                body = exc.read().decode("utf-8", errors="replace")
                print(f"[{idx:02d}/{len(recipes):02d}] HTTP {rid} attempt {attempt}/{args.retries}: {exc.code}")
                print(body[:500])
                if "billing_hard_limit_reached" in body:
                    print("Billing hard limit reached, aborting batch.")
                    return 4
                if exc.code in (401, 403):
                    print("Auth error, aborting.")
                    return 3
                if attempt >= args.retries:
                    failed += 1
            except Exception as exc:  # noqa: BLE001
                print(f"[{idx:02d}/{len(recipes):02d}] ERR  {rid} attempt {attempt}/{args.retries}: {exc}")
                if attempt >= args.retries:
                    failed += 1

            time.sleep(max(0.8, args.sleep))

        if not done:
            print(f"[{idx:02d}/{len(recipes):02d}] FAIL  {rid}")

        time.sleep(max(0.0, args.sleep))

    print("Done.")
    print(f"  success: {success}")
    print(f"  skipped: {skipped}")
    print(f"  failed:  {failed}")

    return 0 if failed == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
