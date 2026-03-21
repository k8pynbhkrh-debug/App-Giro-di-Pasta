import re
import unicodedata
from pathlib import Path

root = Path('/Users/eric/GitHub/App Giro di Pasta')
assets = root / 'assets' / 'recipes'
text = (root / 'app.js').read_text(encoding='utf-8')
start = text.index('const recipesData = [')
end = text.index('];', start)
block = text[start:end]
recipe_names = re.findall(r'"name": "([^"]+)"', block)
id_match = re.search(r"const RECIPE_IMAGE_IDS_IN_ORDER = \[(.*?)\];", text, re.S)
image_ids = re.findall(r"'([^']+)'", id_match.group(1))

if len(recipe_names) != len(image_ids):
    raise RuntimeError(f'name/id count mismatch: {len(recipe_names)} vs {len(image_ids)}')


def normalize(value: str) -> str:
    value = unicodedata.normalize('NFD', value.lower())
    value = ''.join(ch for ch in value if unicodedata.category(ch) != 'Mn')
    value = re.sub(r'[^a-z0-9]+', '_', value)
    return value.strip('_')

name_to_id = {normalize(name): image_id for name, image_id in zip(recipe_names, image_ids)}
expected = {f'{image_id}.png' for image_id in image_ids}
renamed = []
unknown = []
conflicts = []

for path in sorted(assets.glob('*.png')):
    if path.name in expected:
        continue
    key = normalize(path.stem)
    target_id = name_to_id.get(key)
    if not target_id:
        unknown.append(path.name)
        continue
    target = assets / f'{target_id}.png'
    if target.exists():
        conflicts.append((path.name, target.name))
        continue
    path.rename(target)
    renamed.append((path.name, target.name))

print('RENAMED')
for src, dst in renamed:
    print(f'{src} -> {dst}')
print('UNKNOWN')
for name in unknown:
    print(name)
print('CONFLICTS')
for src, dst in conflicts:
    print(f'{src} -> {dst}')
print('summary', {'renamed': len(renamed), 'unknown': len(unknown), 'conflicts': len(conflicts)})
