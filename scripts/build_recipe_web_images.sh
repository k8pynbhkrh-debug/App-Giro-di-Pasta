#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/assets/recipes"
TARGET_DIR="$ROOT_DIR/assets/recipes_optimized"
MAX_SIZE="${1:-960}"

mkdir -p "$TARGET_DIR"

for source in "$SOURCE_DIR"/*.png; do
  [ -e "$source" ] || continue
  target="$TARGET_DIR/$(basename "$source")"
  sips -Z "$MAX_SIZE" "$source" --out "$target" >/dev/null
done

echo "Optimized recipe images written to $TARGET_DIR (max ${MAX_SIZE}px)"
