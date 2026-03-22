#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/assets/recipes"
TARGET_DIR="$ROOT_DIR/assets/recipes_optimized"
MAX_SIZE="${1:-960}"
UPDATED_COUNT=0
REMOVED_COUNT=0

mkdir -p "$TARGET_DIR"

for source in "$SOURCE_DIR"/*.png; do
  [ -e "$source" ] || continue
  target="$TARGET_DIR/$(basename "$source")"
  if [ ! -f "$target" ] || [ "$source" -nt "$target" ]; then
    sips -Z "$MAX_SIZE" "$source" --out "$target" >/dev/null
    UPDATED_COUNT=$((UPDATED_COUNT + 1))
  fi
done

for optimized in "$TARGET_DIR"/*.png; do
  [ -e "$optimized" ] || continue
  source="$SOURCE_DIR/$(basename "$optimized")"
  if [ ! -f "$source" ]; then
    rm -f "$optimized"
    REMOVED_COUNT=$((REMOVED_COUNT + 1))
  fi
done

echo "Recipe web images synced to $TARGET_DIR (max ${MAX_SIZE}px, updated: ${UPDATED_COUNT}, removed: ${REMOVED_COUNT})"
