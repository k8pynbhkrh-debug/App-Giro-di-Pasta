#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "1/3 Baue lokalen QR-Bundle neu ..."
node scripts/build_local_qr_bundle.js

echo "2/3 Synchronisiere optimierte Rezeptbilder ..."
./scripts/build_recipe_web_images.sh

echo "3/3 Deploye auf Vercel ..."
npx vercel --prod --yes
