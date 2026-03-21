import os
import math
import zlib
import struct
import binascii
import random

from pathlib import Path

W, H = 1600, 820
# Write into the current repo's assets directory; skip files that already exist.
OUT_DIR = Path(__file__).resolve().parent / "assets" / "recipes"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Optional filter: if scripts/remaining_recipe_ids.txt exists, only render those ids.
REMAINING_IDS_PATH = Path(__file__).resolve().parent / "scripts" / "remaining_recipe_ids.txt"
TARGET_IDS = None
if REMAINING_IDS_PATH.exists():
    TARGET_IDS = {
        line.strip()
        for line in REMAINING_IDS_PATH.read_text(encoding="utf-8").splitlines()
        if line.strip()
    }

RECIPES = [
{"id":"aglio_olio_peperoncino","ingredients":["garlic","olive oil","chili"]},
{"id":"cacio_pepe","ingredients":["pecorino","black pepper"]},
{"id":"carbonara","ingredients":["guanciale","egg yolk","pecorino"]},
{"id":"gricia","ingredients":["guanciale","pecorino","black pepper"]},
{"id":"amatriciana","ingredients":["guanciale","tomato","pecorino"]},
{"id":"puttanesca","ingredients":["olive","capers","anchovy"]},
{"id":"aglio_olio_acciughe","ingredients":["garlic","olive oil","anchovy"]},
{"id":"sardellen_pangrattato","ingredients":["anchovy","breadcrumbs","olive oil"]},
{"id":"sardellen_limone","ingredients":["anchovy","lemon"]},
{"id":"pomodoro_basilico","ingredients":["tomato","basil"]},
{"id":"arrabbiata","ingredients":["tomato","chili","garlic"]},
{"id":"marinara","ingredients":["tomato","garlic","oregano"]},
{"id":"ricotta_pomodoro_peperoncino","ingredients":["ricotta","tomato","chili"]},
{"id":"burro_salvia","ingredients":["butter","sage"]},
{"id":"funghi_burro","ingredients":["mushroom","butter"]},
{"id":"ricotta_limone","ingredients":["ricotta","lemon"]},
{"id":"ricotta_gorgonzola","ingredients":["ricotta","gorgonzola"]},
{"id":"gorgonzola_noci","ingredients":["gorgonzola","walnut"]},
{"id":"parmigiano_burro","ingredients":["parmesan","butter"]},
{"id":"pasta_assassina","ingredients":["tomato","chili","garlic"]},
{"id":"salsiccia_finocchio","ingredients":["sausage","fennel"]},
{"id":"speck_cipolla","ingredients":["speck","onion"]},
{"id":"pollo_panna","ingredients":["chicken","cream"]},
{"id":"pollo_funghi","ingredients":["chicken","mushroom"]},
{"id":"tonno_pomodoro","ingredients":["tuna","tomato"]},
{"id":"tonno_capperi","ingredients":["tuna","capers"]},
{"id":"salmone_panna","ingredients":["salmon","cream"]},
{"id":"salmone_limone","ingredients":["salmon","lemon"]},
{"id":"gamberi_aglio","ingredients":["shrimp","garlic"]},
{"id":"gamberi_zucchine","ingredients":["shrimp","zucchini"]},
{"id":"vongole_bianco","ingredients":["clams","garlic","parsley"]},
{"id":"vongole_pomodoro","ingredients":["clams","tomato"]},
{"id":"frutti_di_mare","ingredients":["shrimp","clams","mussels"]},
{"id":"bottarga_limone","ingredients":["bottarga","lemon"]},
{"id":"melanzane_pomodoro","ingredients":["eggplant","tomato"]},
{"id":"zucchine_menta","ingredients":["zucchini","mint"]},
{"id":"spinaci_ricotta","ingredients":["spinach","ricotta"]},
{"id":"crema_zucca","ingredients":["pumpkin","cream"]},
{"id":"taleggio_pepe","ingredients":["taleggio","black pepper"]},
{"id":"stracchino_noci","ingredients":["stracchino","walnut"]},
{"id":"joker","ingredients":["olive oil","basil","chili"]},
]

COL = {
    "graphite": (72, 72, 72, 220),
    "shadow": (80, 80, 80, 38),
    "garlic": (241, 234, 214, 230),
    "olive oil": (197, 180, 79, 220),
    "chili": (182, 53, 47, 220),
    "cheese": (236, 225, 165, 220),
    "pepper": (58, 58, 58, 220),
    "meat": (165, 98, 88, 220),
    "tomato": (202, 69, 58, 220),
    "olive": (86, 100, 54, 220),
    "green": (95, 138, 92, 220),
    "anchovy": (136, 143, 154, 220),
    "butter": (244, 226, 147, 220),
    "mushroom": (173, 156, 138, 220),
    "lemon": (236, 216, 108, 220),
    "nut": (159, 118, 79, 220),
    "fish": (226, 140, 119, 220),
    "shell": (179, 173, 168, 220),
    "veg": (126, 152, 96, 220),
    "wine": (236, 226, 188, 210),
    "sugar": (244, 244, 244, 215),
    "cream": (246, 241, 225, 220),
}

def blend(px, i, rgba):
    sr, sg, sb, sa = rgba
    if sa <= 0:
        return
    dr, dg, db, da = px[i:i+4]
    a = sa / 255.0
    ia = 1.0 - a
    px[i:i+4] = bytes((int(sr*a + dr*ia), int(sg*a + dg*ia), int(sb*a + db*ia), int(min(255, sa + da*ia))))

def put(px, x, y, rgba):
    if 0 <= x < W and 0 <= y < H:
        blend(px, (y * W + x) * 4, rgba)

def circle(px, cx, cy, r, rgba):
    x0, x1 = max(0, int(cx-r-1)), min(W-1, int(cx+r+1))
    y0, y1 = max(0, int(cy-r-1)), min(H-1, int(cy+r+1))
    rr = r*r
    for y in range(y0, y1+1):
        dy = y-cy
        for x in range(x0, x1+1):
            dx = x-cx
            if dx*dx + dy*dy <= rr:
                put(px, x, y, rgba)

def ellipse(px, cx, cy, rx, ry, rgba):
    x0, x1 = max(0, int(cx-rx-1)), min(W-1, int(cx+rx+1))
    y0, y1 = max(0, int(cy-ry-1)), min(H-1, int(cy+ry+1))
    irx, iry = 1.0/(rx*rx), 1.0/(ry*ry)
    for y in range(y0, y1+1):
        dy = y-cy
        for x in range(x0, x1+1):
            dx = x-cx
            if dx*dx*irx + dy*dy*iry <= 1.0:
                put(px, x, y, rgba)

def line(px, x0, y0, x1, y1, t, rgba):
    dx, dy = x1-x0, y1-y0
    steps = int(max(abs(dx), abs(dy))) + 1
    for s in range(steps+1):
        p = s/max(1, steps)
        circle(px, int(x0+dx*p), int(y0+dy*p), t, rgba)

def sketch_outline_ellipse(px, cx, cy, rx, ry, jitter, col, rnd):
    for _ in range(2):
        jx, jy = rnd.uniform(-jitter, jitter), rnd.uniform(-jitter, jitter)
        last = None
        for a in range(0, 361, 6):
            rad = math.radians(a)
            x = int(cx + jx + math.cos(rad)*rx)
            y = int(cy + jy + math.sin(rad)*ry)
            if last:
                line(px, last[0], last[1], x, y, 1, col)
            last = (x, y)

def draw_icon(px, ingredient, cx, cy, s, rnd):
    graphite = COL["graphite"]
    shadow = COL["shadow"]
    def sh(rx, ry): ellipse(px, cx+s*0.08, cy+s*0.08, s*rx, s*ry, shadow)

    ing = ingredient
    if ing in {"garlic", "onion"}:
        sh(0.33,0.27); ellipse(px,cx,cy,s*0.30,s*0.24,COL["garlic"])
        for o in (-0.16,0,0.16): ellipse(px,cx+s*o,cy,s*0.12,s*0.20,(255,255,255,70))
        sketch_outline_ellipse(px,cx,cy,s*0.30,s*0.24,2,graphite,rnd)
    elif ing in {"tomato","sun dried tomato"}:
        sh(0.30,0.28); ellipse(px,cx,cy,s*0.29,s*0.27,COL["tomato"])
        line(px,cx,cy-s*0.26,cx,cy-s*0.34,2,graphite)
        sketch_outline_ellipse(px,cx,cy,s*0.29,s*0.27,2,graphite,rnd)
    elif ing == "lemon":
        sh(0.31,0.21); ellipse(px,cx,cy,s*0.31,s*0.21,COL["lemon"])
        sketch_outline_ellipse(px,cx,cy,s*0.31,s*0.21,2,graphite,rnd)
    elif ing in {"olive","capers","black pepper","pine nuts","pistachio","walnut","sugar","breadcrumbs"}:
        c = COL["pepper"] if ing in {"black pepper","capers"} else COL["nut"]
        if ing == "olive": c = COL["olive"]
        if ing == "sugar": c = COL["sugar"]
        for _ in range(8):
            ox, oy = rnd.uniform(-0.25,0.25)*s, rnd.uniform(-0.22,0.22)*s
            rr = rnd.uniform(0.06,0.11)*s
            circle(px,int(cx+ox),int(cy+oy),rr,c)
            sketch_outline_ellipse(px,int(cx+ox),int(cy+oy),rr,rr*0.9,1.5,graphite,rnd)
    elif ing in {"olive oil","white wine","milk","cream"}:
        c = COL["olive oil"] if ing=="olive oil" else COL["wine"] if ing=="white wine" else COL["cream"]
        ellipse(px,cx,cy+s*0.08,s*0.18,s*0.28,c); ellipse(px,cx,cy-s*0.24,s*0.08,s*0.08,c)
        line(px,cx,cy-s*0.32,cx,cy-s*0.43,2,graphite)
        sketch_outline_ellipse(px,cx,cy+s*0.08,s*0.18,s*0.28,2,graphite,rnd)
    elif ing == "chili":
        line(px,cx-s*0.25,cy+s*0.10,cx+s*0.22,cy-s*0.12,int(s*0.08),COL["chili"])
        line(px,cx-s*0.30,cy+s*0.12,cx-s*0.35,cy+s*0.04,2,COL["green"])
        line(px,cx-s*0.25,cy+s*0.10,cx+s*0.22,cy-s*0.12,1,graphite)
    elif ing in {"anchovy","tuna","salmon","bottarga"}:
        c = COL["anchovy"] if ing in {"anchovy","tuna"} else COL["fish"]
        ellipse(px,cx,cy,s*0.34,s*0.16,c)
        line(px,cx+s*0.30,cy,cx+s*0.42,cy-s*0.08,2,c); line(px,cx+s*0.30,cy,cx+s*0.42,cy+s*0.08,2,c)
        circle(px,int(cx-s*0.22),int(cy-s*0.02),int(s*0.018),graphite)
        sketch_outline_ellipse(px,cx,cy,s*0.34,s*0.16,2,graphite,rnd)
    elif ing == "shrimp":
        for k in range(5): ellipse(px,cx-s*0.16+k*s*0.08,cy+abs(2-k)*s*0.03,s*0.09,s*0.07,COL["fish"])
        line(px,cx+s*0.25,cy-s*0.02,cx+s*0.34,cy-s*0.10,1,graphite)
    elif ing in {"clams","mussels"}:
        c = COL["shell"] if ing=="clams" else (84,92,116,220)
        ellipse(px,cx-s*0.11,cy,s*0.13,s*0.18,c); ellipse(px,cx+s*0.11,cy,s*0.13,s*0.18,c)
        sketch_outline_ellipse(px,cx-s*0.11,cy,s*0.13,s*0.18,2,graphite,rnd); sketch_outline_ellipse(px,cx+s*0.11,cy,s*0.13,s*0.18,2,graphite,rnd)
    elif ing in {"pecorino","parmesan","gorgonzola","mozzarella","stracchino","taleggio","ricotta"}:
        c = COL["cheese"] if ing in {"pecorino","parmesan","mozzarella"} else (227,219,182,220)
        for yy in range(int(cy-s*0.24), int(cy+s*0.22)):
            t = (yy-(cy-s*0.24))/(s*0.46)
            lx, rx = int(cx-s*0.28+t*s*0.14), int(cx+s*0.28)
            for xx in range(lx, rx): put(px,xx,yy,c)
        line(px,cx-s*0.28,cy-s*0.24,cx+s*0.28,cy-s*0.24,1,graphite)
        line(px,cx+s*0.28,cy-s*0.24,cx+s*0.28,cy+s*0.22,1,graphite)
        line(px,cx-s*0.14,cy+s*0.22,cx+s*0.28,cy+s*0.22,1,graphite)
    elif ing in {"beef","chicken","sausage","speck","guanciale"}:
        c = COL["meat"]; ellipse(px,cx,cy,s*0.30,s*0.22,c)
        if ing=="sausage": line(px,cx-s*0.26,cy,cx+s*0.25,cy+s*0.03,int(s*0.06),c)
        sketch_outline_ellipse(px,cx,cy,s*0.30,s*0.22,2,graphite,rnd)
    elif ing in {"basil","parsley","mint","oregano","sage","spinach","fennel"}:
        for k in (-0.14,0,0.14):
            ellipse(px,cx+s*k,cy,s*0.14,s*0.24,COL["green"])
            sketch_outline_ellipse(px,cx+s*k,cy,s*0.14,s*0.24,2,graphite,rnd)
            line(px,cx+s*k,cy+s*0.22,cx+s*k,cy-s*0.20,1,graphite)
    elif ing in {"zucchini","eggplant","pumpkin","carrot","mushroom","butter"}:
        if ing=="mushroom":
            ellipse(px,cx,cy-s*0.04,s*0.24,s*0.16,COL["mushroom"]); ellipse(px,cx,cy+s*0.15,s*0.10,s*0.12,(226,214,196,220))
            sketch_outline_ellipse(px,cx,cy-s*0.04,s*0.24,s*0.16,2,graphite,rnd)
        elif ing=="carrot":
            line(px,cx-s*0.30,cy+s*0.16,cx+s*0.28,cy-s*0.14,int(s*0.09),(208,126,67,220))
            line(px,cx-s*0.34,cy+s*0.18,cx-s*0.39,cy+s*0.08,2,COL["green"])
            line(px,cx-s*0.29,cy+s*0.16,cx+s*0.28,cy-s*0.14,1,graphite)
        elif ing=="butter":
            for yy in range(int(cy-s*0.18), int(cy+s*0.14)):
                for xx in range(int(cx-s*0.26), int(cx+s*0.26)): put(px,xx,yy,COL["butter"])
            line(px,cx-s*0.26,cy-s*0.18,cx+s*0.26,cy-s*0.18,1,graphite); line(px,cx-s*0.26,cy+s*0.14,cx+s*0.26,cy+s*0.14,1,graphite)
        else:
            c = COL["veg"] if ing=="zucchini" else (129,94,129,220) if ing=="eggplant" else (222,138,74,220) if ing=="pumpkin" else COL["veg"]
            ellipse(px,cx,cy,s*0.30,s*0.20,c); sketch_outline_ellipse(px,cx,cy,s*0.30,s*0.20,2,graphite,rnd)
    elif ing == "egg yolk":
        circle(px,cx,cy,s*0.17,(245,194,86,230)); sketch_outline_ellipse(px,cx,cy,s*0.17,s*0.17,2,graphite,rnd)
    else:
        ellipse(px,cx,cy,s*0.24,s*0.20,(196,188,172,220)); sketch_outline_ellipse(px,cx,cy,s*0.24,s*0.20,2,graphite,rnd)

def png_chunk(t, d):
    return struct.pack("!I", len(d)) + t + d + struct.pack("!I", binascii.crc32(t + d) & 0xffffffff)

def save_png(path, w, h, pixels):
    raw = bytearray(); stride = w*4
    for y in range(h):
        raw.append(0); raw.extend(pixels[y*stride:(y+1)*stride])
    comp = zlib.compress(bytes(raw), 9)
    with open(path, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n")
        f.write(png_chunk(b"IHDR", struct.pack("!IIBBBBB", w, h, 8, 6, 0, 0, 0)))
        f.write(png_chunk(b"IDAT", comp))
        f.write(png_chunk(b"IEND", b""))

def draw_recipe(recipe):
    rid = recipe["id"]; ing = recipe["ingredients"][:3]
    rnd = random.Random(rid)
    px = bytearray(W * H * 4)
    if len(ing)==1: slots=[(W*0.50,H*0.52,310)]
    elif len(ing)==2: slots=[(W*0.36,H*0.52,275),(W*0.64,H*0.46,275)]
    else: slots=[(W*0.32,H*0.55,250),(W*0.52,H*0.40,250),(W*0.72,H*0.55,250)]
    for i,name in enumerate(ing):
        cx,cy,s = slots[i]
        draw_icon(px,name,int(cx+rnd.uniform(-20,20)),int(cy+rnd.uniform(-18,18)),s,rnd)
    for _ in range(2600): put(px, rnd.randint(140,W-140), rnd.randint(80,H-80), (90,90,90,rnd.randint(8,22)))
    save_png(os.path.join(OUT_DIR, f"{rid}.png"), W, H, px)

rendered = 0
skipped = 0
for r in RECIPES:
    rid = r["id"]
    if TARGET_IDS is not None and rid not in TARGET_IDS:
        continue
    out_path = OUT_DIR / f"{rid}.png"
    if out_path.exists():
        skipped += 1
        continue
    draw_recipe(r)
    rendered += 1

print(f"generated {rendered} images in {OUT_DIR}")
if skipped:
    print(f"skipped {skipped} (already exist)")
