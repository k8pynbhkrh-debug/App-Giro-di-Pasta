import re
import unicodedata
from pathlib import Path

root = Path('/Users/eric/GitHub/App Giro di Pasta')
assets = root / 'assets' / 'recipes'
text = (root / 'app.js').read_text(encoding='utf-8')
name_match = re.search(r"const pdfRecipeNames = \[(.*?)\];", text, re.S)
id_match = re.search(r"const RECIPE_IMAGE_IDS_IN_ORDER = \[(.*?)\];", text, re.S)
recipe_names = re.findall(r"'([^']+)'", name_match.group(1))
image_ids = re.findall(r"'([^']+)'", id_match.group(1))


def normalize(value: str) -> str:
    value = unicodedata.normalize('NFD', value.lower())
    value = ''.join(ch for ch in value if unicodedata.category(ch) != 'Mn')
    value = re.sub(r'[^a-z0-9]+', '_', value)
    return value.strip('_')

name_to_id = {normalize(name): image_id for name, image_id in zip(recipe_names, image_ids)}
expected = {f'{image_id}.png' for image_id in image_ids}
renames = []
unknown = []
for path in sorted(assets.glob('*.png')):
    if path.name in expected:
        continue
    key = normalize(path.stem)
    target_id = name_to_id.get(key)
    if not target_id:
        unknown.append((path.name, key))
        continue
    target = assets / f'{target_id}.png'
    renames.append((path.name, target.name, target.exists()))

print('TO_RENAME')
for src, dst, exists in renames:
    print(f'{src} -> {dst} (exists: {exists})')
print('UNKNOWN')
for name, key in unknown:
    print(f'{name} :: {key}')
print('rename_count', len(renames), 'unknown_count', len(unknown))
