// Daten: Rezepte mit Zutaten und Mengen pro Mini-Portion (25 g Pasta + 25 g Sauce) pro Person
// Diese Daten werden aus der Excel‑Datei "Mengenmodell Portionsbasis.xlsx" generiert.
const recipesData = [
  {
    "name": "Aglio e olio e peperoncino",
    "ingredients": {
      "Chili/Peperoncino (g)": 0.25,
      "Knoblauch (Zehen)": 0.25,
      "Olivenöl (ml)": 5.0,
      "Petersilie (g)": 0.5
    }
  },
  {
    "name": "Cacio e pepe",
    "ingredients": {
      "Pecorino (g)": 7.5,
      "Schwarzer Pfeffer (g)": 0.5
    }
  },
  {
    "name": "Carbonara",
    "ingredients": {
      "Eier (Stk)": 0.25,
      "Guanciale/Pancetta (g)": 7.5,
      "Pecorino (g)": 7.5,
      "Schwarzer Pfeffer (g)": 0.25
    }
  },
  {
    "name": "Gricia",
    "ingredients": {
      "Guanciale/Pancetta (g)": 8.75,
      "Pecorino (g)": 7.5,
      "Schwarzer Pfeffer (g)": 0.375
    }
  },
  {
    "name": "Amatriciana",
    "ingredients": {
      "Chili/Peperoncino (g)": 0.25,
      "Guanciale/Pancetta (g)": 8.75,
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 1.25,
      "Pecorino (g)": 5.0,
      "Tomaten (g)": 30.0
    }
  },
  {
    "name": "Puttanesca",
    "ingredients": {
      "Kapern (g)": 1.25,
      "Knoblauch (Zehen)": 0.125,
      "Oliven (g)": 2.5,
      "Olivenöl (ml)": 1.25,
      "Oregano (g)": 0.125,
      "Sardellen (g)": 1.25,
      "Tomaten (g)": 30.0
    }
  },
  {
    "name": "Aglio, olio e acciughe",
    "ingredients": {
      "Knoblauch (Zehen)": 0.25,
      "Olivenöl (ml)": 5.0,
      "Petersilie (g)": 0.5,
      "Sardellen (g)": 1.25
    }
  },
  {
    "name": "Sardellen e pangrattato",
    "ingredients": {
      "Knoblauch (Zehen)": 0.25,
      "Olivenöl (ml)": 3.75,
      "Pangrattato (g)": 2.5,
      "Sardellen (g)": 1.25
    }
  },
  {
    "name": "Sardellen e limone",
    "ingredients": {
      "Knoblauch (Zehen)": 0.25,
      "Olivenöl (ml)": 5.0,
      "Petersilie (g)": 0.5,
      "Sardellen (g)": 1.25,
      "Zitrone (Saft) (ml)": 3.75
    }
  },
  {
    "name": "Pomodoro e basilico",
    "ingredients": {
      "Basilikum (g)": 0.5,
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 1.25,
      "Tomaten (g)": 30.0
    }
  },
  {
    "name": "Arrabbiata",
    "ingredients": {
      "Chili/Peperoncino (g)": 0.25,
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 1.25,
      "Tomaten (g)": 30.0
    }
  },
  {
    "name": "Marinara",
    "ingredients": {
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 1.25,
      "Oregano (g)": 0.125,
      "Tomaten (g)": 30.0
    }
  },
  {
    "name": "Ricotta e pomodoro al peperoncino",
    "ingredients": {
      "Chili/Peperoncino (g)": 0.25,
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 1.25,
      "Ricotta (g)": 12.5,
      "Tomaten (g)": 30.0
    }
  },
  {
    "name": "Burro e salvia",
    "ingredients": {
      "Butter (g)": 6.25,
      "Salbei (g)": 0.5
    }
  },
  {
    "name": "Funghi e burro",
    "ingredients": {
      "Butter (g)": 6.25,
      "Champignons (g)": 20.0,
      "Knoblauch (Zehen)": 0.0625,
      "Petersilie (g)": 0.5
    }
  },
  {
    "name": "Ricotta al limone",
    "ingredients": {
      "Olivenöl (ml)": 1.25,
      "Parmigiano (g)": 2.5,
      "Ricotta (g)": 17.5,
      "Schwarzer Pfeffer (g)": 0.125,
      "Zitrone (Saft) (ml)": 3.75
    }
  },
  {
    "name": "Ricotta e gorgonzola",
    "ingredients": {
      "Gorgonzola (g)": 7.5,
      "Milch (ml)": 5.0,
      "Olivenöl (ml)": 1.25,
      "Ricotta (g)": 12.5,
      "Schwarzer Pfeffer (g)": 0.125
    }
  },
  {
    "name": "Gorgonzola e noci",
    "ingredients": {
      "Gorgonzola (g)": 8.75,
      "Milch (ml)": 5.0,
      "Olivenöl (ml)": 1.25,
      "Walnüsse (g)": 5.0
    }
  },
  {
    "name": "Parmigiano e burro",
    "ingredients": {
      "Butter (g)": 6.25,
      "Parmigiano (g)": 6.25,
      "Schwarzer Pfeffer (g)": 0.125
    }
  },
  {
    "name": "Pasta all’Assassina",
    "ingredients": {
      "Chili/Peperoncino (g)": 0.25,
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 2.5,
      "Tomaten (g)": 37.5
    }
  },
  {
    "name": "Salsiccia e finocchio",
    "ingredients": {
      "Fenchel (g)": 12.5,
      "Knoblauch (Zehen)": 0.0625,
      "Olivenöl (ml)": 1.25,
      "Salsiccia (g)": 20.0,
      "Zwiebeln (g)": 5.0
    }
  },
  {
    "name": "Speck e cipolla",
    "ingredients": {
      "Olivenöl (ml)": 1.25,
      "Schwarzer Pfeffer (g)": 0.125,
      "Speck (g)": 15.0,
      "Zwiebeln (g)": 10.0
    }
  },
  {
    "name": "Pollo e panna",
    "ingredients": {
      "Hähnchen (g)": 20.0,
      "Olivenöl (ml)": 1.25,
      "Parmigiano (g)": 2.5,
      "Sahne (ml)": 15.0,
      "Schwarzer Pfeffer (g)": 0.125,
      "Zwiebeln (g)": 5.0
    }
  },
  {
    "name": "Pollo e funghi",
    "ingredients": {
      "Champignons (g)": 17.5,
      "Hähnchen (g)": 17.5,
      "Olivenöl (ml)": 1.25,
      "Sahne (ml)": 10.0,
      "Zwiebeln (g)": 5.0
    }
  },
  {
    "name": "Tonno e pomodoro",
    "ingredients": {
      "Knoblauch (Zehen)": 0.0625,
      "Olivenöl (ml)": 1.25,
      "Petersilie (g)": 0.5,
      "Thunfisch (g)": 15.0,
      "Tomaten (g)": 30.0
    }
  },
  {
    "name": "Tonno e capperi",
    "ingredients": {
      "Kapern (g)": 2.5,
      "Knoblauch (Zehen)": 0.0625,
      "Olivenöl (ml)": 2.5,
      "Thunfisch (g)": 15.0,
      "Tomaten (g)": 20.0,
      "Zitrone (Saft) (ml)": 2.5
    }
  },
  {
    "name": "Salmone e panna",
    "ingredients": {
      "Lachs (g)": 17.5,
      "Sahne (ml)": 15.0,
      "Schwarzer Pfeffer (g)": 0.125,
      "Zitrone (Saft) (ml)": 2.5
    }
  },
  {
    "name": "Salmone e limone",
    "ingredients": {
      "Butter (g)": 2.5,
      "Lachs (g)": 17.5,
      "Petersilie (g)": 0.5,
      "Schwarzer Pfeffer (g)": 0.125,
      "Zitrone (Saft) (ml)": 3.75
    }
  },
  {
    "name": "Gamberi e aglio",
    "ingredients": {
      "Chili/Peperoncino (g)": 0.125,
      "Garnelen (g)": 17.5,
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 2.5,
      "Petersilie (g)": 0.5,
      "Zitrone (Saft) (ml)": 2.5
    }
  },
  {
    "name": "Gamberi e zucchine",
    "ingredients": {
      "Garnelen (g)": 15.0,
      "Knoblauch (Zehen)": 0.0625,
      "Olivenöl (ml)": 1.25,
      "Petersilie (g)": 0.5,
      "Zucchini (g)": 20.0
    }
  },
  {
    "name": "Vongole in bianco",
    "ingredients": {
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 2.5,
      "Petersilie (g)": 0.5,
      "Vongole (g)": 30.0,
      "Weißwein (ml)": 7.5
    }
  },
  {
    "name": "Vongole e pomodoro",
    "ingredients": {
      "Knoblauch (Zehen)": 0.125,
      "Olivenöl (ml)": 1.25,
      "Petersilie (g)": 0.5,
      "Tomaten (g)": 20.0,
      "Vongole (g)": 25.0
    }
  },
  {
    "name": "Frutti di mare",
    "ingredients": {
      "Knoblauch (Zehen)": 0.125,
      "Meeresfrüchte-Mix (g)": 30.0,
      "Olivenöl (ml)": 1.25,
      "Petersilie (g)": 0.5,
      "Tomaten (g)": 20.0
    }
  },
  {
    "name": "Bottarga e limone",
    "ingredients": {
      "Bottarga (g)": 3.75,
      "Olivenöl (ml)": 2.5,
      "Petersilie (g)": 0.5,
      "Zitrone (Saft) (ml)": 3.75
    }
  },
  {
    "name": "Melanzane e pomodoro",
    "ingredients": {
      "Aubergine (g)": 25.0,
      "Basilikum (g)": 0.5,
      "Knoblauch (Zehen)": 0.0625,
      "Olivenöl (ml)": 2.5,
      "Tomaten (g)": 20.0
    }
  },
  {
    "name": "Zucchine e menta",
    "ingredients": {
      "Knoblauch (Zehen)": 0.0625,
      "Minze (g)": 0.5,
      "Olivenöl (ml)": 2.5,
      "Zitrone (Saft) (ml)": 2.5,
      "Zucchini (g)": 30.0
    }
  },
  {
    "name": "Spinaci e ricotta",
    "ingredients": {
      "Knoblauch (Zehen)": 0.0625,
      "Olivenöl (ml)": 1.25,
      "Parmigiano (g)": 2.5,
      "Ricotta (g)": 15.0,
      "Spinat (g)": 30.0
    }
  },
  {
    "name": "Taleggio e pepe",
    "ingredients": {
      "Milch (ml)": 5.0,
      "Olivenöl (ml)": 1.25,
      "Schwarzer Pfeffer (g)": 0.5,
      "Taleggio (g)": 10.0
    }
  },
  {
    "name": "Stracchino e noci",
    "ingredients": {
      "Milch (ml)": 5.0,
      "Olivenöl (ml)": 1.25,
      "Stracchino (g)": 10.0,
      "Walnüsse (g)": 5.0
    }
  }
];

// Hilfsfunktion: mischt ein Array (Fisher-Yates)
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function containsAny(text, terms) {
  const normalized = text.toLowerCase();
  return terms.some(term => normalized.includes(term));
}

function classifyRecipe(recipe) {
  const ingredientNames = Object.keys(recipe.ingredients);
  const fullText = [recipe.name, ...ingredientNames].join(' ').toLowerCase();

  const isFish = containsAny(fullText, [
    'sardellen', 'thunfisch', 'lachs', 'garnelen', 'vongole', 'meeresfruechte', 'meeresfrüchte', 'bottarga', 'frutti di mare'
  ]);

  const isMeat = containsAny(fullText, [
    'guanciale', 'pancetta', 'rinderhack', 'salsiccia', 'speck', 'haehnchen', 'hähnchen', 'pollo', 'ragu', 'ragù', 'ragù'
  ]);

  const isAnimalProduct = containsAny(fullText, [
    'pecorino', 'parmigiano', 'ricotta', 'gorgonzola', 'stracchino', 'taleggio', 'sahne', 'butter', 'milch', 'eier'
  ]);

  const isSpicy = containsAny(fullText, ['chili', 'peperoncino', 'arrabbiata', 'assassina']);

  let sauceFamily = 'sonstiges';
  if (containsAny(fullText, ['zucker', 'dolce'])) sauceFamily = 'suess';
  else if (containsAny(fullText, ['pesto'])) sauceFamily = 'pesto';
  else if (containsAny(fullText, ['tomaten', 'pomodoro', 'arrabbiata', 'marinara'])) sauceFamily = 'tomate';
  else if (isFish) sauceFamily = 'meer';
  else if (isMeat) sauceFamily = 'fleisch';
  else if (containsAny(fullText, ['ricotta', 'sahne', 'milch', 'butter', 'gorgonzola', 'pecorino', 'parmigiano', 'formaggi'])) sauceFamily = 'cremig';
  else if (containsAny(fullText, ['zucchini', 'aubergine', 'spinat', 'kürbis', 'kuerbis', 'funghi'])) sauceFamily = 'gemuese';
  else if (containsAny(fullText, ['aglio', 'olio'])) sauceFamily = 'olio';

  return { isFish, isMeat, isAnimalProduct, isSpicy, sauceFamily };
}

function filterRecipes(recipes, settings) {
  return recipes.filter(recipe => {
    const tags = classifyRecipe(recipe);

    if (!settings.meatAllowed && tags.isMeat) return false;
    if (!settings.fishAllowed && tags.isFish) return false;
    if (!settings.animalAllowed && tags.isAnimalProduct) return false;
    if (!settings.spicyAllowed && tags.isSpicy) return false;

    return true;
  });
}

function selectDiverseRecipes(recipes, count) {
  const buckets = new Map();

  recipes.forEach(recipe => {
    const family = classifyRecipe(recipe).sauceFamily;
    if (!buckets.has(family)) buckets.set(family, []);
    buckets.get(family).push(recipe);
  });

  const families = shuffle(Array.from(buckets.keys()));
  families.forEach(family => {
    buckets.set(family, shuffle(buckets.get(family)));
  });

  const selected = [];
  let cursor = 0;

  while (selected.length < count) {
    let pickedInPass = false;

    for (let i = 0; i < families.length && selected.length < count; i++) {
      const family = families[(cursor + i) % families.length];
      const bucket = buckets.get(family);
      if (bucket && bucket.length > 0) {
        selected.push(bucket.shift());
        pickedInPass = true;
      }
    }

    if (!pickedInPass) break;
    cursor = (cursor + 1) % Math.max(1, families.length);
  }

  return selected;
}

function getUnit(ingredientName) {
  const match = ingredientName.match(/\(([^)]+)\)$/);
  return match ? match[1] : '';
}

function getIngredientLabel(ingredientName) {
  return ingredientName.replace(/\s*\([^)]+\)\s*$/, '').trim();
}

function prettyAmount(value) {
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(1).replace(/\.0$/, '');
}

const PASTA_PER_PERSON_PER_ROUND_G = 25;
const SHOPPING_RECOMMENDATION = Object.freeze({
  isRecommendation: true,
  label: 'Empfehlung',
  text: 'Küchenpapier / Küchenrolle für Wok oder Tischpfanne zwischen den Runden mitnehmen'
});

function roundUpAmount(value, unit) {
  const normalizedUnit = (unit || '').toLowerCase();

  if (normalizedUnit.includes('g') || normalizedUnit.includes('ml')) {
    return Math.ceil(value);
  }

  if (normalizedUnit.includes('stk') || normalizedUnit.includes('zehen')) {
    return Math.ceil(value);
  }

  return Math.ceil(value * 2) / 2;
}

function buildShoppingList(recipes, players) {
  const aggregated = {
    'Pasta (g)': Math.max(0, recipes.length) * players * PASTA_PER_PERSON_PER_ROUND_G
  };

  recipes.filter(recipe => !recipe.isJoker).forEach(recipe => {
    Object.entries(recipe.ingredients).forEach(([ingredient, amount]) => {
      if (!aggregated[ingredient]) aggregated[ingredient] = 0;
      aggregated[ingredient] += amount * players;
    });
  });

  return Object.entries(aggregated)
    .sort((a, b) => {
      if (a[0] === 'Pasta (g)') return -1;
      if (b[0] === 'Pasta (g)') return 1;
      return a[0].localeCompare(b[0], 'de');
    })
    .map(([ingredient, amount]) => {
      const unit = getUnit(ingredient);
      return {
        ingredient,
        label: getIngredientLabel(ingredient),
        amount: roundUpAmount(amount, unit),
        unit
      };
    });
}

function buildReminderExport(entries) {
  return [...entries, SHOPPING_RECOMMENDATION]
    .map(formatShoppingEntry)
    .join('\n');
}

function formatShoppingEntry(entry) {
  if (entry?.isRecommendation) {
    return `${entry.label}: ${entry.text}`.trim();
  }
  return `${entry.label}: ${prettyAmount(entry.amount)} ${entry.unit}`.trim();
}

function getShoppingDisplayEntries(game = getCurrentGame()) {
  const baseEntries = Array.isArray(game?.shoppingList) ? game.shoppingList : [];
  return [...baseEntries, SHOPPING_RECOMMENDATION];
}

function getPreparationRule(ingredientName) {
  const label = getIngredientLabel(ingredientName);
  const key = normalizeForId(label);
  return PREPARATION_RULES[key] || DEFAULT_PREPARATION_RULE;
}

function buildPreparationPlan(game) {
  const uniqueEntries = new Map();
  const shoppingEntries = game?.shoppingList || [];

  shoppingEntries.forEach(entry => {
    const label = entry?.label || getIngredientLabel(entry?.ingredient || '');
    const key = normalizeForId(label);
    if (!key || uniqueEntries.has(key)) return;

    const rule = getPreparationRule(entry?.ingredient || label);
    uniqueEntries.set(key, {
      label,
      amount: entry?.amount ?? 0,
      unit: entry?.unit || getUnit(entry?.ingredient || ''),
      category: rule.category,
      instruction: rule.instruction
    });
  });

  const prepare = [];
  const ready = [];

  Array.from(uniqueEntries.values())
    .sort((a, b) => {
      if (a.label === 'Pasta') return -1;
      if (b.label === 'Pasta') return 1;
      return a.label.localeCompare(b.label, 'de-DE');
    })
    .forEach(entry => {
      if (entry.category === PREPARATION_CATEGORY_PREPARE) prepare.push(entry);
      else ready.push(entry);
    });

  return { prepare, ready };
}

function insertJokers(realRecipes, jokerCount) {
  const totalRounds = realRecipes.length + jokerCount;
  const jokerPositions = new Set();

  while (jokerPositions.size < jokerCount) {
    jokerPositions.add(Math.floor(Math.random() * totalRounds));
  }

  const rounds = [];
  let recipeIndex = 0;
  let jokerNumber = 1;

  for (let slot = 0; slot < totalRounds; slot++) {
    if (jokerPositions.has(slot)) {
      rounds.push({
        name: `Joker-Runde ${jokerNumber}`,
        ingredients: {},
        isJoker: true
      });
      jokerNumber += 1;
    } else if (recipeIndex < realRecipes.length) {
      rounds.push({ ...realRecipes[recipeIndex], isJoker: false });
      recipeIndex += 1;
    }
  }

  return rounds;
}

function normalizeForId(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

const PREPARATION_CATEGORY_PREPARE = 'prepare';
const PREPARATION_CATEGORY_READY = 'ready';

const DEFAULT_PREPARATION_RULE = Object.freeze({
  category: PREPARATION_CATEGORY_READY,
  instruction: 'bereitstellen'
});

const PREPARATION_RULES = Object.freeze({
  [normalizeForId('Pasta')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'vor dem Spiel al dente kochen und warm bereitstellen'
  }),
  [normalizeForId('Parmigiano')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein reiben'
  }),
  [normalizeForId('Pecorino')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein reiben'
  }),
  [normalizeForId('Walnüsse')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'grob hacken'
  }),
  [normalizeForId('Zwiebeln')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein würfeln'
  }),
  [normalizeForId('Zucchini')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein würfeln'
  }),
  [normalizeForId('Champignons')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'in Scheiben schneiden'
  }),
  [normalizeForId('Knoblauch')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein hacken'
  }),
  [normalizeForId('Petersilie')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein hacken'
  }),
  [normalizeForId('Basilikum')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'grob zupfen'
  }),
  [normalizeForId('Minze')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'grob zupfen'
  }),
  [normalizeForId('Salbei')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'grob zupfen'
  }),
  [normalizeForId('Fenchel')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein würfeln'
  }),
  [normalizeForId('Aubergine')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein würfeln'
  }),
  [normalizeForId('Chili/Peperoncino')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'fein hacken'
  }),
  [normalizeForId('Spinat')]: Object.freeze({
    category: PREPARATION_CATEGORY_PREPARE,
    instruction: 'waschen und grob hacken'
  }),
  [normalizeForId('Milch')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Ricotta')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Salz')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Schwarzer Pfeffer')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Olivenöl')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Sahne')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Butter')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Eier')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Tomaten')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Oliven')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Kapern')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Oregano')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Pangrattato')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Gorgonzola')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Taleggio')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Stracchino')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Guanciale/Pancetta')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Speck')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Salsiccia')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Hähnchen')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Thunfisch')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Lachs')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Garnelen')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Vongole')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Meeresfrüchte-Mix')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Bottarga')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Weißwein')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  }),
  [normalizeForId('Zitrone')]: Object.freeze({
    category: PREPARATION_CATEGORY_READY,
    instruction: 'bereitstellen'
  })
});

const INACTIVE_RECIPE_IDS = new Set();

function isRecipeActive(recipe) {
  const key = normalizeForId(recipe?.id || recipe?.name || '');
  return !INACTIVE_RECIPE_IDS.has(key);
}

const DEFAULT_RECIPE_GUIDE = {
  difficulty: 'mittel',
  steps: [
    'Basis in der Pfanne vorbereiten und sanft erhitzen',
    'Hauptzutaten nach und nach zugeben',
    'Mit etwas Nudelwasser die Sauce aufbauen',
    'Pasta in der Pfanne schwenken und emulgieren',
    'Zum Schluss abschmecken und direkt servieren'
  ],
  tip: 'Hitze kontrollieren und Sauce mit Nudelwasser cremig ziehen.'
};

const JOKER_RECIPE_GUIDES = Object.freeze({
  guessing: Object.freeze({
    difficulty: 'leicht',
    steps: [
      'Frei verfügbare Zutaten vom Tisch wählen',
      'Daraus ein eigenes Pastagericht festlegen',
      'Zubereitung planen',
      'Gericht kochen und abschmecken',
      'Joker ganz normal erraten'
    ],
    tip: 'Improvisation ist auch ein Rezept.'
  }),
  open: Object.freeze({
    difficulty: 'leicht',
    steps: [
      'Frei verfügbare Zutaten vom Tisch wählen',
      'Daraus ein eigenes Pastagericht festlegen',
      'Zubereitung planen',
      'Gericht kochen und abschmecken',
      'Gericht servieren'
    ],
    tip: 'Improvisation ist auch ein Rezept.'
  })
});

const JOKER_TIPS = Object.freeze([
  'Heute wird nicht nur die Pasta al dente.',
  'Joker-Runde: Jetzt wird es nudelig kreativ.',
  'Wenn nichts klappt, einfach überzeugend umrühren.',
  'Pasta kann alles. Heute ihr auch.',
  'Improvisation ist auch ein Rezept.',
  'Manchmal ist der beste Plan ein guter Pastateller.'
]);

function pickJokerTip(seed = '') {
  const safeSeed = String(seed || 'joker');
  let hash = 0;
  for (let i = 0; i < safeSeed.length; i++) {
    hash = ((hash * 31) + safeSeed.charCodeAt(i)) >>> 0;
  }
  return JOKER_TIPS[hash % JOKER_TIPS.length];
}

function getJokerRecipeGuide(recipe, game = getCurrentGame()) {
  const mode = isGuessingMode(game) ? 'guessing' : 'open';
  return {
    ...JOKER_RECIPE_GUIDES[mode],
    tip: pickJokerTip(recipe?.name || 'joker')
  };
}

const supplementalRecipes = [];

const pdfRecipeNames = [
  'Aglio e olio e peperoncino',
  'Aglio, olio e acciughe',
  'Sardellen e limone',
  'Sardellen e pangrattato',
  'Pomodoro e basilico',
  'Arrabbiata',
  'Marinara',
  'Ricotta e pomodoro al peperoncino',
  'Cacio e pepe',
  'Carbonara',
  'Gricia',
  'Amatriciana',
  'Burro e salvia',
  'Parmigiano e burro',
  'Funghi e burro',
  'Ricotta al limone',
  'Ricotta e gorgonzola',
  'Gorgonzola e noci',
  'Taleggio e pepe',
  'Stracchino e noci',
  'Pasta all’Assassina',
  'Puttanesca',
  'Salsiccia e finocchio',
  'Speck e cipolla',
  'Pollo e panna',
  'Pollo e funghi',
  'Tonno e pomodoro',
  'Tonno e capperi',
  'Salmone e panna',
  'Salmone e limone',
  'Gamberi e aglio',
  'Gamberi e zucchine',
  'Vongole in bianco',
  'Vongole e pomodoro',
  'Frutti di mare',
  'Bottarga e limone',
  'Melanzane e pomodoro',
  'Zucchine e menta',
  'Spinaci e ricotta',
];

const recipeGuidesById = {
  "aglio_e_olio_e_peperoncino": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Knoblauch in Öl ansetzen",
      "Chili kurz mitziehen lassen",
      "Pasta und Nudelwasser zugeben",
      "[MITTEL] Kurz emulgierend schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Knoblauch nicht bräunen lassen"
  },
  "cacio_e_pepe": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Frisch gemahlenen schwarzen Pfeffer trocken rösten",
      "Nudelwasser zugeben und Basis rühren",
      "Pasta kurz in der Pfanne schwenken",
      "[AUS] Pecorino kräftig einarbeiten",
      "Mit wenig Wasser cremig ziehen"
    ],
    "tip": "Käse immer off heat einarbeiten"
  },
  "carbonara": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Guanciale oder Pancetta knusprig auslassen und kurz herausnehmen",
      "[AUS] Eigelb, Pecorino und frisch gemahlenen schwarzen Pfeffer glattrühren",
      "Pasta mit wenig Nudelwasser zugeben",
      "[AUS] Eimasse zügig unterheben",
      "Guanciale oder Pancetta wieder zugeben und cremig servieren"
    ],
    "tip": "Ziel ist Emulsion, nicht Rührei"
  },
  "gricia": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Guanciale oder Pancetta knusprig auslassen und kurz herausnehmen",
      "Frisch gemahlenen schwarzen Pfeffer kurz im Fett rösten",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Pecorino cremig einrühren",
      "Mit Guanciale oder Pancetta als Crunch servieren"
    ],
    "tip": "Käse nicht auf voller Hitze einrühren"
  },
  "amatriciana": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Guanciale auslassen",
      "Optional mit Weißwein kurz ablöschen",
      "[HOCH] Tomaten sanft köcheln",
      "Pasta in der Sauce schwenken",
      "Pecorino beim Servieren zugeben"
    ],
    "tip": "Tomate nicht zu dick einkochen"
  },
  "puttanesca": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch anrösten",
      "Sardellen im Öl auflösen",
      "Kapern und Oliven zugeben",
      "[HOCH] Tomaten köcheln lassen",
      "Pasta kurz emulgierend schwenken"
    ],
    "tip": "Erst probieren, dann salzen"
  },
  "aglio_olio_e_acciughe": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Knoblauch sanft in Öl erwärmen",
      "Sardellen einrühren bis sie zerfallen",
      "Pasta und Nudelwasser zugeben",
      "[MITTEL] Kurz emulgierend schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Nicht zu heiß, sonst wird es streng"
  },
  "sardellen_e_pangrattato": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Pangrattato goldbraun rösten",
      "Brösel herausnehmen, Sardellen schmelzen",
      "Pasta und Nudelwasser zugeben",
      "Kurz emulgierend schwenken",
      "Mit Bröseln toppen"
    ],
    "tip": "Brösel separat knusprig halten"
  },
  "sardellen_e_limone": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Knoblauch sanft in Öl erwärmen",
      "Sardellen einrühren bis sie zerfallen",
      "Pasta und Nudelwasser zugeben",
      "Kurz emulgierend schwenken",
      "Zitronenabrieb und wenig Zitronensaft zugeben"
    ],
    "tip": "Saft sparsam dosieren"
  },
  "pomodoro_e_basilico": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch sanft anschwitzen",
      "[HOCH] Tomaten zugeben und salzen",
      "3–4 Min köcheln lassen",
      "Pasta mit Nudelwasser binden",
      "[AUS] Frisches Basilikum unterheben"
    ],
    "tip": "Basilikum nie mitkochen"
  },
  "arrabbiata": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch anrösten",
      "Chili kurz im Öl ziehen lassen",
      "[HOCH] Tomaten 3–4 Min köcheln",
      "Pasta mit Nudelwasser binden",
      "Frische Petersilie oder Pecorino zugeben"
    ],
    "tip": "Schärfe lieber am Ende anpassen"
  },
  "marinara": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch sanft anrösten",
      "[HOCH] Tomaten zugeben und köcheln",
      "Oregano einrühren",
      "Pasta in der Sauce schwenken",
      "Kräuter-Finish zugeben"
    ],
    "tip": "Tomate und Oregano klar halten"
  },
  "ricotta_e_pomodoro_al_peperoncino": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Tomatensauce mit Chili erwärmen",
      "[AUS] Ricotta mit Nudelwasser glattrühren",
      "Pasta in Tomate schwenken",
      "Ricotta-Creme unterziehen",
      "Kurz abschmecken und servieren"
    ],
    "tip": "Ricotta nicht kochen"
  },
  "burro_e_salvia": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Butter schmelzen",
      "Salbei kurz knusprig ziehen lassen",
      "Pasta und Nudelwasser zugeben",
      "[MITTEL] Emulgierend schwenken",
      "Optional Käse zugeben"
    ],
    "tip": "Butter nur leicht bräunen"
  },
  "funghi_e_burro": {
    "difficulty": "mittel",
    "steps": [
      "[HOCH] Pilze heiß anbraten",
      "[NIEDRIG] Butter zugeben",
      "Pasta und Nudelwasser zugeben",
      "[MITTEL] Emulgierend schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Pilze erst bräunen, dann salzen"
  },
  "ricotta_al_limone": {
    "difficulty": "leicht",
    "steps": [
      "[AUS] Ricotta mit Zitronenabrieb und Olivenöl glattrühren",
      "Nudelwasser einarbeiten",
      "Pasta zugeben",
      "Cremig emulgieren",
      "Mit wenig Zitronensaft abschmecken"
    ],
    "tip": "Abrieb ist wichtiger als Saft"
  },
  "ricotta_e_gorgonzola": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Gorgonzola sanft mit Milch schmelzen",
      "Ricotta glattrühren",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren",
      "Mit frisch gemahlenem schwarzen Pfeffer servieren"
    ],
    "tip": "Niedrige Hitze hält die Sauce stabil"
  },
  "gorgonzola_e_noci": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Walnüsse trocken rösten und beiseitelegen",
      "[NIEDRIG] Gorgonzola in Milch schmelzen",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren",
      "Geröstete Walnüsse als Finish zugeben"
    ],
    "tip": "Nüsse zuletzt für Crunch"
  },
  "parmigiano_e_burro": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Butter schmelzen",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Parmigiano einrühren",
      "Cremig ziehen",
      "Optional frisch gemahlenen schwarzen Pfeffer zugeben"
    ],
    "tip": "Emulsion über Restwärme aufbauen"
  },
  "pasta_all_assassina": {
    "difficulty": "mittel",
    "steps": [
      "Passierte Tomaten und Wasser zu Brühe mischen",
      "[HOCH] Knoblauch und Chili anrösten",
      "Trockene Pasta in der Pfanne rösten",
      "Brühe etappenweise zugeben",
      "Röstaroma kontrollieren und servieren"
    ],
    "tip": "Fast anbrennen ist gewollt"
  },
  "salsiccia_e_finocchio": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Salsiccia krümelig braten",
      "Zwiebel weich werden lassen",
      "Optional Tomate oder Wein zugeben",
      "Pasta mit Nudelwasser binden",
      "Kurz servierfertig schwenken"
    ],
    "tip": "Salsiccia gut zerkrümeln"
  },
  "speck_e_cipolla": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Zwiebel langsam glasig ziehen",
      "[MITTEL] Speck rösten",
      "Optional Tomate kurz zugeben",
      "Pasta in der Pfanne schwenken",
      "Mit frisch gemahlenem schwarzen Pfeffer servieren"
    ],
    "tip": "Speck bringt schon viel Salz mit"
  },
  "pollo_e_panna": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Hähnchen kräftig anbraten",
      "Zwiebel anschwitzen",
      "Sahne zugeben und kurz einkochen",
      "Pasta und Parmigiano binden",
      "Cremig servieren"
    ],
    "tip": "Hähnchen lieber klein schneiden"
  },
  "pollo_e_funghi": {
    "difficulty": "mittel",
    "steps": [
      "[HOCH] Pilze heiß anbraten",
      "Hähnchen zugeben und garen",
      "Optional Sahne kurz einkochen",
      "Pasta in der Pfanne schwenken",
      "Kräuter-Finish zugeben"
    ],
    "tip": "Pilze erst Farbe nehmen lassen"
  },
  "tonno_e_pomodoro": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch anschwitzen",
      "[HOCH] Tomaten kurz simmern",
      "Thunfisch kurz einrühren",
      "Pasta in der Sauce schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Thunfisch nicht lange kochen"
  },
  "tonno_e_capperi": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch und Kapern anschwitzen",
      "Tomate kurz simmern lassen",
      "Thunfisch zugeben",
      "Pasta in der Sauce schwenken",
      "Kurz abschmecken und servieren"
    ],
    "tip": "Kapern vorher abspülen"
  },
  "salmone_e_panna": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Lachs kurz anrösten",
      "Sahne 2–3 Min köcheln lassen",
      "Pasta und Nudelwasser zugeben",
      "Cremig emulgieren",
      "Kräuter-Finish zugeben"
    ],
    "tip": "Lachs nur kurz garen"
  },
  "salmone_e_limone": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Lachs kurz garen",
      "Pasta und Nudelwasser zugeben",
      "Frischen Zitronenabrieb einrühren",
      "[AUS] Mit wenig Saft abschmecken",
      "Kräuter zugeben und servieren"
    ],
    "tip": "Säure immer erst am Ende"
  },
  "gamberi_e_aglio": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Knoblauch anschwitzen",
      "Garnelen kurz braten",
      "Pasta und Nudelwasser zugeben",
      "Kurz emulgierend schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Garnelen nicht übergaren"
  },
  "gamberi_e_zucchine": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Zucchini bissfest anbraten",
      "Garnelen kurz garen",
      "Pasta und Nudelwasser zugeben",
      "Emulgierend schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Zucchini erst am Ende salzen"
  },
  "vongole_in_bianco": {
    "difficulty": "schwer",
    "steps": [
      "Vorbereitete Muscheln bereithalten",
      "[MITTEL] Muscheln öffnen und Saft auffangen",
      "Gefilterten Muschelsud zugeben",
      "Pasta emulgierend schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Ohne Vorbereitung zu riskant"
  },
  "vongole_e_pomodoro": {
    "difficulty": "schwer",
    "steps": [
      "Vorbereitete Muscheln bereithalten",
      "[MITTEL] Tomaten kurz köcheln",
      "Muscheln und Muschelsud einarbeiten",
      "Pasta in der Sauce schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Tomate nur leicht halten"
  },
  "frutti_di_mare": {
    "difficulty": "schwer",
    "steps": [
      "Vorgegarte Meeresfrüchte bereithalten",
      "Garzeiten kurz staffeln und erwärmen",
      "Tomate oder Sud kurz simmern",
      "Pasta in der Sauce schwenken",
      "Frische Petersilie zugeben"
    ],
    "tip": "Ohne Prep nicht spielgeeignet"
  },
  "bottarga_e_limone": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Öl sanft aromatisieren",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Geriebenen Fischrogen einrühren",
      "Frischen Zitronenabrieb zugeben",
      "Direkt servieren"
    ],
    "tip": "Fischrogen erst am Ende zugeben"
  },
  "melanzane_e_pomodoro": {
    "difficulty": "mittel",
    "steps": [
      "Vorgegarte Auberginen bereithalten",
      "[MITTEL] Tomatensauce erwärmen",
      "Pasta in der Sauce schwenken",
      "Auberginen unterheben",
      "Basilikum oder Ricotta salata zugeben"
    ],
    "tip": "Auberginen besser vorbereitet nutzen"
  },
  "zucchine_e_menta": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Zucchini fein in Öl garen",
      "Pasta und Nudelwasser zugeben",
      "Frische Minze einrühren",
      "[AUS] Käse cremig binden",
      "Kurz servieren"
    ],
    "tip": "Minze immer erst ganz am Ende"
  },
  "spinaci_e_ricotta": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Spinat kurz zusammenfallen lassen",
      "[AUS] Ricotta mit Nudelwasser glattrühren",
      "Pasta zugeben",
      "Cremig emulgieren und würzen",
      "Frisch geriebenen Parmigiano zugeben"
    ],
    "tip": "Ricotta nicht kochen"
  },
  "taleggio_e_pepe": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Taleggio mit Milch sanft schmelzen",
      "Frisch gemahlenen schwarzen Pfeffer einrühren",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren",
      "Nach Bedarf extra frisch gemahlenen schwarzen Pfeffer zugeben"
    ],
    "tip": "Nicht kochen, sonst trennt es"
  },
  "stracchino_e_noci": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Walnüsse rösten, grob hacken und beiseitelegen",
      "[NIEDRIG] Stracchino mit Milch cremig rühren",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren",
      "Walnüsse als Finish zugeben"
    ],
    "tip": "Niedrige Hitze und Nüsse zuletzt"
  }
};

const FALLBACK_IMAGE = 'assets/fallback.png';
const APP_ICON_PATH = 'assets/app-icon.png';
const SPECTATOR_ICON_PATH = 'assets/spectator-icon.svg';

const RECIPE_IMAGE_IDS_IN_ORDER = [
  'aglio_olio_peperoncino',
  'cacio_pepe',
  'carbonara',
  'gricia',
  'amatriciana',
  'puttanesca',
  'aglio_olio_acciughe',
  'sardellen_pangrattato',
  'sardellen_limone',
  'pomodoro_basilico',
  'arrabbiata',
  'marinara',
  'ricotta_pomodoro_peperoncino',
  'burro_salvia',
  'funghi_burro',
  'ricotta_limone',
  'ricotta_gorgonzola',
  'gorgonzola_noci',
  'parmigiano_burro',
  'pasta_assassina',
  'salsiccia_finocchio',
  'speck_cipolla',
  'pollo_panna',
  'pollo_funghi',
  'tonno_pomodoro',
  'tonno_capperi',
  'salmone_panna',
  'salmone_limone',
  'gamberi_aglio',
  'gamberi_zucchine',
  'vongole_bianco',
  'vongole_pomodoro',
  'frutti_di_mare',
  'bottarga_limone',
  'melanzane_pomodoro',
  'zucchine_menta',
  'spinaci_ricotta',
  'taleggio_pepe',
  'stracchino_noci',
];

const recipeImageIdByName = (() => {
  const map = Object.create(null);
  const baseCount = Math.min(recipesData.length, RECIPE_IMAGE_IDS_IN_ORDER.length);

  for (let i = 0; i < baseCount; i++) {
    map[normalizeForId(recipesData[i].name)] = RECIPE_IMAGE_IDS_IN_ORDER[i];
  }

  // Zusätzliche Alias-Schreibweisen für Legacy-Namen.
  map.ricotta_e_pomodoro_al_peperoncino = 'ricotta_pomodoro_peperoncino';
  map.pasta_all_assassina = 'pasta_assassina';

  return map;
})();

function getCardImageForRecipe(recipeName) {
  if (!recipeName) return '';
  const key = normalizeForId(recipeName);
  const imageId = recipeImageIdByName[key];
  if (!imageId) return '';
  return `assets/recipes/${imageId}.png`;
}

function getOptimizedCardImageForRecipe(recipeName) {
  if (!recipeName) return '';
  const key = normalizeForId(recipeName);
  const imageId = recipeImageIdByName[key];
  if (!imageId) return '';
  return `assets/recipes_optimized/${imageId}.png`;
}

function getImageCandidatesForRound(round) {
  if (!round) return [];
  if (round.isJoker) {
    return ['assets/recipes_optimized/joker.png', 'assets/recipes/joker.png'];
  }
  const optimized = getOptimizedCardImageForRecipe(round.name || '');
  const original = getCardImageForRecipe(round.name || '');
  return [...new Set([optimized, original].filter(Boolean))];
}

function getAccentForRound(round) {
  if (round.isJoker) return '#2b0b0b';
  const tags = classifyRecipe(round);
  if (tags.isMeat || tags.isFish) return '#C0392B';
  if (tags.isAnimalProduct) return '#F4B400';
  return '#3A7D44';
}

function setGameFrameAccent(accent) {
  gameSection.style.borderColor = accent || '#cabaa2';
}

function setRecipeIllustrationPlaceholder() {
  ingredientIllustrationEl.style.backgroundImage = 'none';
  ingredientIllustrationEl.style.backgroundColor = '#f8f3e9';
  ingredientIllustrationEl.style.border = 'none';
  ingredientIllustrationEl.dataset.placeholder = 'Bild Platzhalter';
}

let illustrationRequestToken = 0;

function setRecipeIllustration(round, accent) {
  const imageCandidates = getImageCandidatesForRound(round);
  const token = ++illustrationRequestToken;

  if (!imageCandidates.length) {
    setRecipeIllustrationPlaceholder();
    return;
  }

  // Show placeholder while loading; switch only when image is confirmed available.
  setRecipeIllustrationPlaceholder();

  const tryLoadCandidate = candidateIndex => {
    if (candidateIndex >= imageCandidates.length) {
      if (token !== illustrationRequestToken) return;
      setRecipeIllustrationPlaceholder();
      return;
    }

    const imagePath = imageCandidates[candidateIndex];
    const probe = new Image();
    probe.decoding = 'async';
    probe.onload = () => {
      if (token !== illustrationRequestToken) return;
      ingredientIllustrationEl.style.border = 'none';
      ingredientIllustrationEl.style.backgroundColor = 'transparent';
      ingredientIllustrationEl.style.backgroundImage = `url("${imagePath}")`;
      delete ingredientIllustrationEl.dataset.placeholder;
    };
    probe.onerror = () => {
      if (token !== illustrationRequestToken) return;
      tryLoadCandidate(candidateIndex + 1);
    };
    probe.src = imagePath;
  };

  tryLoadCandidate(0);
}

function getAllRecipes() {
  return recipesData.concat(supplementalRecipes).filter(isRecipeActive);
}

function findRecipeByName(recipeName) {
  const key = normalizeForId(recipeName || '');
  return getAllRecipes().find(recipe => normalizeForId(recipe.name) === key) || null;
}

function getCatalogCheck() {
  const pdfSet = new Set(pdfRecipeNames.map(name => normalizeForId(name)));
  const missingFromPdf = recipesData
    .filter(recipe => !pdfSet.has(normalizeForId(recipe.name)))
    .map(recipe => recipe.name);

  return {
    missingFromPdfCount: missingFromPdf.length,
    supplementalCount: supplementalRecipes.length
  };
}

function getDifficultyIndicatorText(difficulty) {
  if (difficulty === 'schwer') return 'Schwierigkeit ●●●';
  if (difficulty === 'leicht') return 'Schwierigkeit ●○○';
  return 'Schwierigkeit ●●○';
}

function getRecipeGuide(recipe, game = getCurrentGame()) {
  if (recipe.isJoker) {
    return getJokerRecipeGuide(recipe, game);
  }

  const key = normalizeForId(recipe.name || '');
  return recipeGuidesById[key] || DEFAULT_RECIPE_GUIDE;
}

function getRecipeSteps(recipe, game = getCurrentGame()) {
  return getRecipeGuide(recipe, game).steps;
}

function getPlayerDefaultNames(count) {
  return Array.from({ length: count }, (_, idx) => `Spieler ${idx + 1}`);
}

function recomputeShoppingArtifacts(game) {
  game.shoppingList = buildShoppingList(game.rounds || [], game.settings?.players || 1);
  game.shoppingExport = buildReminderExport(game.shoppingList);
}

const STORAGE_KEY = 'giro_di_pasta_games_v1';
const SYNC_ENDPOINT_KEY = 'giro_di_pasta_sync_endpoint';

function closeOtherSwipeRows(container, exceptRow) {
  if (!container) return;
  container.querySelectorAll('.swipe-row.reveal-delete').forEach(row => {
    if (row !== exceptRow) row.classList.remove('reveal-delete');
  });
}

function makeRowSwipeable(row, container) {
  const content = row.querySelector('.swipe-content');
  if (!content) return;

  const dragThreshold = 14;
  let startX = 0;
  let startY = 0;
  let dragging = false;
  let intentLocked = false;
  let wasOpen = false;

  const finish = event => {
    if (!dragging) {
      intentLocked = false;
      return;
    }
    dragging = false;
    intentLocked = false;
    const deltaX = event.clientX - startX;
    const thresholdOpen = -32;
    const thresholdClose = 16;
    let nextOpen = wasOpen;
    if (wasOpen && deltaX > thresholdClose) nextOpen = false;
    else if (!wasOpen && deltaX < thresholdOpen) nextOpen = true;
    row.classList.toggle('reveal-delete', nextOpen);
    if (event.pointerId && row.hasPointerCapture(event.pointerId)) {
      row.releasePointerCapture(event.pointerId);
    }
    content.style.transform = '';
  };

  row.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    startX = event.clientX;
    startY = event.clientY;
    dragging = false;
    intentLocked = false;
    wasOpen = row.classList.contains('reveal-delete');
    closeOtherSwipeRows(container, row);
  });

  row.addEventListener('pointermove', event => {
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (!intentLocked) {
      if (Math.abs(deltaY) > dragThreshold && Math.abs(deltaY) > Math.abs(deltaX)) {
        intentLocked = true;
        return;
      }

      if (Math.abs(deltaX) < dragThreshold) return;

      dragging = true;
      intentLocked = true;
      if (event.pointerId) row.setPointerCapture(event.pointerId);
    }

    if (!dragging) return;
    const base = wasOpen ? -82 : 0;
    const clamped = Math.max(Math.min(base + deltaX, 10), -90);
    content.style.transform = `translateX(${clamped}px)`;
  });

  row.addEventListener('pointerup', finish);
  row.addEventListener('pointercancel', finish);
  row.addEventListener('pointerleave', finish);

  row.addEventListener('click', event => {
    if (!row.classList.contains('reveal-delete')) return;
    const isDelete = event.target instanceof HTMLElement && event.target.classList.contains('swipe-action');
    if (!isDelete) {
      row.classList.remove('reveal-delete');
      event.preventDefault();
      event.stopPropagation();
    }
  });
}

function getSyncEndpointBase() {
  const raw = localStorage.getItem(SYNC_ENDPOINT_KEY) || '';
  return raw.replace(/\/+$/, '');
}

function getSpectatorSnapshotPhaseCode(game) {
  const phase = game?.phase;
  if (phase === 'summary') return 's';
  if (phase === 'preparation') return 'p';
  if (phase === 'players') return 'n';
  if (phase === 'config') return 'c';
  return 'g';
}

function decodeSpectatorSnapshotPhase(code) {
  if (code === 's') return 'summary';
  if (code === 'p') return 'preparation';
  if (code === 'n') return 'players';
  if (code === 'c') return 'config';
  return 'game';
}

function createSpectatorSnapshot(game) {
  if (!game) return null;
  const guessing = normalizeGameMode(game.gameMode) !== GAME_MODE_OPEN;
  const snapshot = {
    i: game.id,
    m: guessing ? 'g' : 'o',
    h: getSpectatorSnapshotPhaseCode(game),
    f: game.finished ? 1 : 0,
    t: Array.isArray(game.rounds) ? game.rounds.length : 0,
    p: Array.isArray(game.players) ? [...game.players] : [],
    g: Number.isFinite(game.gameIndex) ? game.gameIndex : 0,
    a: Number.isFinite(game.activePlayerTurnIndex) ? game.activePlayerTurnIndex : 0
  };

  if (guessing) {
    snapshot.s = Array.isArray(game.scores) ? [...game.scores] : [];
  } else {
    snapshot.r = (game.rounds || []).map(round => (round.isJoker ? '*' : round.name));
  }

  return snapshot;
}

function encodeSpectatorSnapshot(game) {
  const snapshot = createSpectatorSnapshot(game);
  if (!snapshot) return '';
  try {
    const bytes = new TextEncoder().encode(JSON.stringify(snapshot));
    let binary = '';
    bytes.forEach(byte => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  } catch (error) {
    return '';
  }
}

function expandSpectatorSnapshot(parsed) {
  if (!parsed || typeof parsed !== 'object') return null;
  if (!('i' in parsed) && !('r' in parsed)) return parsed;
  const gameMode = parsed.m === 'o' ? 'open' : 'guessing';
  const totalRounds = Number.isFinite(parsed.t)
    ? Math.max(0, parsed.t)
    : (Array.isArray(parsed.r) ? parsed.r.length : 0);
  return {
    id: parsed.i || '',
    title: '',
    gameMode,
    phase: decodeSpectatorSnapshotPhase(parsed.h),
    finished: !!parsed.f,
    players: Array.isArray(parsed.p) ? [...parsed.p] : [],
    scores: gameMode === GAME_MODE_GUESSING && Array.isArray(parsed.s) ? [...parsed.s] : [],
    gameIndex: Number.isFinite(parsed.g) ? parsed.g : 0,
    activePlayerTurnIndex: Number.isFinite(parsed.a) ? parsed.a : 0,
    rounds: Array.isArray(parsed.r)
      ? parsed.r.map(entry => (
        typeof entry === 'string' && entry === '*'
          ? { name: 'Joker', isJoker: true }
          : { name: entry, isJoker: false }
      ))
      : Array.from({ length: totalRounds }, (_, index) => ({
        name: `Runde ${index + 1}`,
        isJoker: false
      }))
  };
}

function normalizeSpectatorSnapshotGame(game) {
  if (!game || typeof game !== 'object') return null;
  game.gameMode = normalizeGameMode(game.gameMode);
  if (!Array.isArray(game.players)) game.players = [];
  if (!Array.isArray(game.scores)) game.scores = [];
  if (!Array.isArray(game.rounds)) game.rounds = [];
  game.finished = !!game.finished || (game.rounds.length > 0 && game.gameIndex >= game.rounds.length);
  if (isOpenMode(game) && game.scores.length > 0) game.scores = [];
  return game;
}

function decodeSpectatorSnapshot(value) {
  if (!value) return null;
  try {
    const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=');
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    const parsed = expandSpectatorSnapshot(JSON.parse(new TextDecoder().decode(bytes)));
    return normalizeSpectatorSnapshotGame(parsed);
  } catch (error) {
    return null;
  }
}

function getQrFallbackUrl(spectatorUrl) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(spectatorUrl)}`;
}

function createLocalQrSource(spectatorUrl) {
  if (!window.LocalQRCode?.createSvgDataUrl) return '';
  try {
    return window.LocalQRCode.createSvgDataUrl(spectatorUrl, {
      cellSize: 6,
      quietZone: 4,
      foreground: '#2a211d',
      background: '#ffffff'
    });
  } catch (error) {
    return '';
  }
}

function getSpectatorUrl(gameOrId) {
  const gameId = typeof gameOrId === 'string' ? gameOrId : gameOrId?.id;
  if (!gameId) return window.location.href;
  const url = new URL(window.location.href);
  url.searchParams.set('watch', gameId);
  if (typeof gameOrId === 'object' && gameOrId) {
    const snapshot = encodeSpectatorSnapshot(gameOrId);
    if (snapshot) url.searchParams.set('snapshot', snapshot);
  }
  return url.toString();
}

function getSpectatorShareHint(game) {
  const base = getSyncEndpointBase();
  if (!game) {
    return 'QR wird lokal in der App erzeugt.';
  }

  if (base) {
    return isGuessingMode(game)
      ? 'Live-Sync aktiv. Geteilt werden Spielstatus, Spielernamen und Punktestand. Die verdeckte Rezeptauswahl bleibt im Modus Mit Raten geschützt.'
      : 'Live-Sync aktiv. Geteilt werden Spielstatus, Spielernamen und die offen geplanten Rezepte dieses Spiels.';
  }

  return isGuessingMode(game)
    ? 'Der Link enthält einen Snapshot mit Spielernamen, Punktestand und Spielstatus. Die verdeckte tatsächliche Rezeptauswahl wird im Modus Mit Raten nicht geteilt.'
    : 'Der Link enthält einen Snapshot mit Spielernamen, Spielstatus und den offen geplanten Rezepten dieses Spiels.';
}

let warmedQrSource = '';
let warmedQrForUrl = '';

function warmSpectatorQr(game) {
  if (!game) return;
  const spectatorUrl = getSpectatorUrl(game);
  if (!spectatorUrl || warmedQrForUrl === spectatorUrl) return;

  warmedQrForUrl = spectatorUrl;
  warmedQrSource = createLocalQrSource(spectatorUrl) || getQrFallbackUrl(spectatorUrl);

  const preload = new Image();
  preload.decoding = 'async';
  preload.src = warmedQrSource;
}

async function pushGameSync(game) {
  const base = getSyncEndpointBase();
  if (!base) return;
  try {
    await fetch(`${base}/${encodeURIComponent(game.id)}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game)
    });
  } catch (error) {
    // Sync ist optional, daher kein harter Fehler.
  }
}

async function fetchSyncedGame(gameId) {
  const base = getSyncEndpointBase();
  if (!base) return null;
  try {
    const response = await fetch(`${base}/${encodeURIComponent(gameId)}.json`, { cache: 'no-store' });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    return null;
  }
}

const GAME_MODE_GUESSING = 'guessing';
const GAME_MODE_OPEN = 'open';

function normalizeGameMode(value) {
  return value === GAME_MODE_OPEN ? GAME_MODE_OPEN : GAME_MODE_GUESSING;
}

function isGuessingMode(game) {
  return normalizeGameMode(game?.gameMode) === GAME_MODE_GUESSING;
}

function isOpenMode(game) {
  return normalizeGameMode(game?.gameMode) === GAME_MODE_OPEN;
}

function normalizeSummaryReturnTarget(value) {
  return value === 'game' || value === 'players' ? value : '';
}

function isStoredRecipeStillAvailable(recipe, activeRecipeNames) {
  if (!recipe || typeof recipe !== 'object') return false;
  if (recipe.isJoker) return true;
  return activeRecipeNames.has(normalizeForId(recipe.name || ''));
}

function normalizeStoredGame(game) {
  if (!game || typeof game !== 'object') return game;

  game.gameMode = normalizeGameMode(game.gameMode);
  game.summaryReturnTarget = normalizeSummaryReturnTarget(game.summaryReturnTarget);
  if (!Array.isArray(game.rounds)) game.rounds = [];
  if (!Array.isArray(game.players)) game.players = [];
  if (!Array.isArray(game.scores)) game.scores = [];
  if (!Array.isArray(game.shoppingList)) game.shoppingList = [];
  if (!Array.isArray(game.eligibleExtraRecipes)) game.eligibleExtraRecipes = [];

  const activeRecipeNames = new Set(getAllRecipes().map(recipe => normalizeForId(recipe.name)));
  game.rounds = game.rounds.filter(recipe => isStoredRecipeStillAvailable(recipe, activeRecipeNames));
  game.eligibleExtraRecipes = game.eligibleExtraRecipes.filter(recipe => isStoredRecipeStillAvailable(recipe, activeRecipeNames));
  if (Number.isFinite(game.gameIndex)) {
    game.gameIndex = Math.max(0, Math.min(game.gameIndex, Math.max(0, game.rounds.length - 1)));
  } else {
    game.gameIndex = 0;
  }
  recomputeShoppingArtifacts(game);

  if (isOpenMode(game)) {
    game.scores = [];
    game.roundHasCorrectTip = false;
  }

  return game;
}

function loadGames() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(normalizeStoredGame) : [];
  } catch (error) {
    return [];
  }
}

function saveGames() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}

function formatGameLabel(game) {
  const date = new Date(game.createdAt).toLocaleDateString('de-DE');
  return `${game.title} (${date})`;
}

function createGame(title) {
  const date = new Date();
  const fallback = `Spiel ${date.toLocaleDateString('de-DE')}`;
  return normalizeStoredGame({
    id: `game_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    title: title && title.trim() ? title.trim() : fallback,
    createdAt: date.toISOString(),
    phase: 'config',
    gameMode: GAME_MODE_GUESSING,
    settings: {
      players: 4,
      recipesPerPerson: 6,
      meatAllowed: true,
      animalAllowed: true,
      fishAllowed: true,
      spicyAllowed: true
    },
    summaryReturnTarget: '',
    rounds: [],
    shoppingList: [],
    shoppingExport: '',
    eligibleExtraRecipes: [],
    addedExtraRecipes: 0,
    players: [],
    scores: [],
    gameIndex: 0,
    activePlayerTurnIndex: 0,
    awaitingRecipeReveal: true,
    roundHasCorrectTip: false,
    finished: false,
    updatedAt: Date.now()
  });
}

function canRestartGameFromBeginning(game) {
  return !!game
    && Array.isArray(game.rounds)
    && game.rounds.length > 0
    && Array.isArray(game.players)
    && game.players.length > 0;
}

function resetGameProgressToBeginning(game) {
  if (!game) return;

  game.phase = 'game';
  game.summaryReturnTarget = '';
  game.gameIndex = 0;
  game.activePlayerTurnIndex = 0;
  game.awaitingRecipeReveal = isGuessingMode(game);
  game.roundHasCorrectTip = false;
  game.finished = false;
  game.scores = isGuessingMode(game)
    ? game.players.map(() => 0)
    : [];
}

function getCurrentGame() {
  return games.find(game => game.id === currentGameId) || null;
}

function upsertCurrentGame(updatedGame) {
  normalizeStoredGame(updatedGame);
  updatedGame.updatedAt = Date.now();
  const idx = games.findIndex(game => game.id === updatedGame.id);
  if (idx === -1) games.push(updatedGame);
  else games[idx] = updatedGame;
  saveGames();
  renderGameList();
  renderLandingGameList();
  warmSpectatorQr(updatedGame);
  void pushGameSync(updatedGame);
  if (channel) channel.postMessage({ type: 'game-update', game: updatedGame });
}

function setCurrentGame(id) {
  currentGameId = id;
  renderGameList();
  renderFromCurrentGame();
}

function showStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.remove('hidden');
  statusEl.style.color = isError ? '#8a1f25' : '#2c3e2f';
}

function openDeleteGameModal(gameId) {
  pendingDeleteGameId = gameId;
  deleteGameModalEl.classList.add('open');
}

function closeDeleteGameModal() {
  pendingDeleteGameId = null;
  deleteGameModalEl.classList.remove('open');
}

function confirmDeleteGame() {
  if (!pendingDeleteGameId) return;

  games = games.filter(game => game.id !== pendingDeleteGameId);
  if (currentGameId === pendingDeleteGameId) {
    currentGameId = games.length > 0 ? games[games.length - 1].id : null;
  }

  saveGames();
  renderGameList();
  renderLandingGameList();
  renderFromCurrentGame();
  closeDeleteGameModal();
}

function hideAllSections() {
  landingSection.classList.add('hidden');
  configSection.classList.add('hidden');
  summarySection.classList.add('hidden');
  preparationSection.classList.add('hidden');
  playersSetupSection.classList.add('hidden');
  gameSection.classList.add('hidden');
  spectatorSection.classList.add('hidden');
}

function openNewGameLanding() {
  hideAllSections();
  landingSection.classList.remove('hidden');
  renderLandingGameList();
  gameTitleInputEl.value = '';
  setTimeout(() => gameTitleInputEl.focus(), 0);
}

function canOpenPlanningEditor(game) {
  return !!game && Array.isArray(game.rounds) && game.rounds.length > 0;
}

function openPlanningEditor(gameId) {
  const game = games.find(entry => entry.id === gameId);
  if (!game) return;

  currentGameId = gameId;
  menuEl.classList.remove('open');

  if (!canOpenPlanningEditor(game)) {
    renderGameList();
    renderLandingGameList();
    renderFromCurrentGame();
    return;
  }

  game.summaryReturnTarget = game.phase === 'game' || game.finished
    ? 'game'
    : game.phase === 'players'
      ? 'players'
      : '';
  game.phase = 'summary';

  upsertCurrentGame(game);
  renderFromCurrentGame();
}

function renderGameList() {
  gameListEl.innerHTML = '';

  if (games.length === 0) {
    const row = document.createElement('div');
    row.className = 'subtle';
    row.textContent = 'Keine Spiele gespeichert';
    gameListEl.appendChild(row);
    return;
  }

  games.forEach(game => {
    const row = document.createElement('div');
    row.className = 'game-row';

    const loadBtn = document.createElement('button');
    loadBtn.className = 'game-load';
    loadBtn.dataset.gameId = game.id;
    loadBtn.textContent = formatGameLabel(game);
    loadBtn.addEventListener('click', () => {
      setCurrentGame(game.id);
      menuEl.classList.remove('open');
    });
    if (game.id === currentGameId) {
      loadBtn.style.borderColor = '#b7ac9a';
      loadBtn.style.background = '#fffaf1';
    }

    const editBtn = document.createElement('button');
    editBtn.className = 'game-edit';
    editBtn.textContent = '✎';
    editBtn.title = canOpenPlanningEditor(game) ? 'Planung öffnen' : 'Spiel öffnen';
    editBtn.disabled = !canOpenPlanningEditor(game);
    editBtn.addEventListener('click', () => {
      openPlanningEditor(game.id);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'game-delete';
    deleteBtn.dataset.deleteId = game.id;
    deleteBtn.textContent = '✕';
    deleteBtn.title = 'Spiel löschen';

    row.appendChild(loadBtn);
    row.appendChild(editBtn);
    row.appendChild(deleteBtn);
    gameListEl.appendChild(row);
  });
}

function renderLandingGameList() {
  landingGameListEl.innerHTML = '';
  if (games.length === 0) {
    const row = document.createElement('div');
    row.className = 'subtle';
    row.textContent = 'Noch keine Spiele vorhanden';
    landingGameListEl.appendChild(row);
    return;
  }

  games.slice().reverse().forEach(game => {
    const row = document.createElement('div');
    row.className = 'game-row';

    const button = document.createElement('button');
    button.className = 'game-load';
    button.dataset.gameId = game.id;
    button.textContent = formatGameLabel(game);
    button.addEventListener('click', () => {
      setCurrentGame(game.id);
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'game-edit';
    editBtn.textContent = '✎';
    editBtn.title = canOpenPlanningEditor(game) ? 'Planung öffnen' : 'Spiel öffnen';
    editBtn.disabled = !canOpenPlanningEditor(game);
    editBtn.addEventListener('click', () => {
      openPlanningEditor(game.id);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'game-delete';
    deleteBtn.dataset.landingDeleteId = game.id;
    deleteBtn.textContent = '✕';
    deleteBtn.title = 'Spiel löschen';

    row.appendChild(button);
    row.appendChild(editBtn);
    row.appendChild(deleteBtn);
    landingGameListEl.appendChild(row);
  });
}

function renderRecipeList(game) {
  recipeListEl.innerHTML = '';

  const rounds = game?.rounds || [];
  if (isGuessingMode(game)) {
    const totalRecipes = rounds.length;
    const jokerCount = rounds.filter(round => round.isJoker).length;
    const li = document.createElement('li');
    li.textContent = jokerCount > 0
      ? `${totalRecipes} Rezepte wurden ausgewählt, inklusive ${jokerCount} Joker-Runde(n).`
      : `${totalRecipes} Rezepte wurden ausgewählt.`;
    recipeListEl.appendChild(li);
    return;
  }

  rounds.forEach((round, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="recipe-plan-item">
        <span class="recipe-plan-label">${round.isJoker
          ? `${index + 1}. ${round.name} - Freie Wahl`
          : `${index + 1}. ${round.name}`}</span>
        <button type="button" class="recipe-remove" data-remove-round-index="${index}" aria-label="${round.name} entfernen" title="Entfernen">✕</button>
      </div>
    `;
    recipeListEl.appendChild(li);
  });
}

function dedupeRecipesByName(recipes) {
  return recipes.filter((recipe, index, list) =>
    list.findIndex(entry => normalizeForId(entry.name) === normalizeForId(recipe.name)) === index
  );
}

function recipeMatchesGameFilters(recipe, game) {
  if (!game?.settings) return false;
  return filterRecipes([recipe], game.settings).length > 0;
}

function getAvailableExtraRecipeGroups(game) {
  if (!game || isGuessingMode(game)) {
    return { filtered: [], override: [] };
  }

  const activeRoundNames = new Set((game.rounds || []).map(entry => normalizeForId(entry.name)));
  const filtered = dedupeRecipesByName(
    (game.eligibleExtraRecipes || [])
      .filter(isRecipeActive)
      .filter(recipe => !activeRoundNames.has(normalizeForId(recipe.name)))
  ).sort((a, b) => a.name.localeCompare(b.name, 'de-DE'));
  const filteredNames = new Set(filtered.map(recipe => normalizeForId(recipe.name)));
  const override = dedupeRecipesByName(
    getAllRecipes()
      .filter(isRecipeActive)
      .filter(recipe => !activeRoundNames.has(normalizeForId(recipe.name)))
      .filter(recipe => !filteredNames.has(normalizeForId(recipe.name)))
  ).sort((a, b) => a.name.localeCompare(b.name, 'de-DE'));

  return { filtered, override };
}

function appendExtraRecipeOptions(selectEl, recipes, groupName, selectedNames) {
  recipes.forEach(recipe => {
    const option = document.createElement('option');
    option.value = recipe.name;
    option.textContent = recipe.name;
    option.selected = selectedNames.has(recipe.name);
    option.dataset.group = groupName;
    selectEl.appendChild(option);
  });
}

function renderExtraRecipeOptions(game) {
  if (isGuessingMode(game)) {
    extraRecipeSelectEl.innerHTML = '';
    extraRecipeSelectEl.disabled = true;
    addExtraRecipesBtn.disabled = true;
    addExtraRecipesBtn.textContent = 'Zusatzrezepte auswählen';
    return;
  }

  const selectedNames = new Set(
    Array.from(extraRecipeSelectEl.options)
      .filter(option => option.selected)
      .map(option => option.value)
  );
  extraRecipeSelectEl.innerHTML = '';
  const groups = getAvailableExtraRecipeGroups(game);

  if (groups.filtered.length === 0 && groups.override.length === 0) {
    extraRecipeSelectEl.disabled = true;
    addExtraRecipesBtn.disabled = false;
    addExtraRecipesBtn.textContent = 'Zusatzrezepte auswählen';
    return;
  }

  appendExtraRecipeOptions(extraRecipeSelectEl, groups.filtered, 'filtered', selectedNames);
  appendExtraRecipeOptions(extraRecipeSelectEl, groups.override, 'override', selectedNames);

  extraRecipeSelectEl.disabled = false;
  addExtraRecipesBtn.disabled = false;
  addExtraRecipesBtn.textContent = 'Zusatzrezepte auswählen';
}

function renderExtraRecipePicker(game) {
  extraRecipePickerListEl.innerHTML = '';
  const options = Array.from(extraRecipeSelectEl.options);

  if (options.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'picker-empty';
    empty.textContent = 'Keine weiteren Rezepte verfügbar.';
    extraRecipePickerListEl.appendChild(empty);
    confirmExtraRecipesBtn.disabled = true;
    return;
  }

  confirmExtraRecipesBtn.disabled = false;
  const groups = [
    {
      key: 'filtered',
      title: 'Passend zu deinen Filtern',
      note: 'Diese Rezepte erfüllen die aktuell gesetzten Regeln und können direkt ergänzt werden.'
    },
    {
      key: 'override',
      title: 'Weitere Rezepte außerhalb der Filter',
      note: 'Nur im Modus Ohne Raten: Diese Rezepte ignorieren bewusst die zuvor gesetzten Filter.'
    }
  ];

  groups.forEach(group => {
    const groupOptions = options.filter(option => option.dataset.group === group.key);
    if (groupOptions.length === 0) return;

    const section = document.createElement('section');
    section.className = 'picker-section';

    const title = document.createElement('h4');
    title.className = 'picker-section-title';
    title.textContent = group.title;

    const note = document.createElement('p');
    note.className = 'picker-section-note';
    note.textContent = group.note;

    section.appendChild(title);
    section.appendChild(note);

    groupOptions.forEach(option => {
      const label = document.createElement('label');
      label.className = 'picker-option';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = option.value;
      checkbox.checked = option.selected;

      const text = document.createElement('span');
      text.textContent = option.textContent;

      label.appendChild(checkbox);
      label.appendChild(text);
      section.appendChild(label);
    });

    extraRecipePickerListEl.appendChild(section);
  });
}

function openExtraRecipeModal() {
  const game = getCurrentGame();
  if (!game || game.phase !== 'summary' || isGuessingMode(game)) return;
  renderExtraRecipePicker(game);
  extraRecipeModalEl.classList.add('open');
}

function closeExtraRecipeModal() {
  extraRecipeModalEl.classList.remove('open');
}

function addSelectedExtraRecipes(game, selectedNames) {
  if (!game || game.phase !== 'summary' || isGuessingMode(game)) return 0;
  if (!Array.isArray(selectedNames) || selectedNames.length === 0) return 0;

  const toAddNames = selectedNames;
  const groups = getAvailableExtraRecipeGroups(game);
  const availableByName = new Map(
    dedupeRecipesByName(groups.filtered.concat(groups.override))
      .map(recipe => [normalizeForId(recipe.name), recipe])
  );
  const toAdd = toAddNames
    .map(name => availableByName.get(normalizeForId(name)))
    .filter(Boolean);
  if (toAdd.length === 0) return 0;

  const newRounds = toAdd.map(recipe => ({ ...recipe, isJoker: false, isExtraSelection: true }));
  game.rounds = game.rounds.concat(newRounds);
  const addedKeys = new Set(toAdd.map(recipe => normalizeForId(recipe.name)));
  game.eligibleExtraRecipes = (game.eligibleExtraRecipes || []).filter(recipe => !addedKeys.has(normalizeForId(recipe.name)));
  recomputeShoppingArtifacts(game);
  return newRounds.length;
}

function restoreRemovedRecipeToPool(game, round) {
  if (!game || !round || round.isJoker) return;
  const restoredRecipe = findRecipeByName(round.name);
  if (!restoredRecipe) return;

  const activeRoundNames = new Set((game.rounds || []).map(entry => normalizeForId(entry.name)));
  const eligibleNames = new Set((game.eligibleExtraRecipes || []).map(entry => normalizeForId(entry.name)));
  const restoredKey = normalizeForId(restoredRecipe.name);
  if (activeRoundNames.has(restoredKey) || eligibleNames.has(restoredKey)) return;
  if (!recipeMatchesGameFilters(restoredRecipe, game)) return;

  game.eligibleExtraRecipes = [...(game.eligibleExtraRecipes || []), restoredRecipe];
}

function renderShoppingListFromGame(game) {
  shoppingListEl.innerHTML = '';
  getShoppingDisplayEntries(game).forEach(entry => {
    const li = document.createElement('li');
    li.textContent = formatShoppingEntry(entry);
    if (entry.isRecommendation) li.classList.add('shopping-recommendation');
    shoppingListEl.appendChild(li);
  });
}

function renderPreparationItems(listEl, items, emptyText, options = {}) {
  const { showInstruction = true } = options;
  listEl.innerHTML = '';

  if (items.length === 0) {
    const li = document.createElement('li');
    li.className = 'subtle';
    li.textContent = emptyText;
    listEl.appendChild(li);
    return;
  }

  items.forEach(entry => {
    const li = document.createElement('li');
    li.className = 'prep-item';
    if (entry.label === 'Pasta') {
      li.classList.add('important');
    }

    const title = document.createElement('strong');
    title.textContent = `${entry.label}: ${prettyAmount(entry.amount)} ${entry.unit}`.trim();

    li.appendChild(title);
    if (showInstruction) {
      const note = document.createElement('span');
      note.className = 'prep-item-note';
      note.textContent = entry.instruction;
      li.appendChild(note);
    }
    listEl.appendChild(li);
  });
}

function renderPreparationSection(game) {
  renderPreparationItems(prepPrepareListEl, [], 'Keine Zutaten zum Vorbereiten.', { showInstruction: true });
  renderPreparationItems(prepReadyListEl, [], 'Keine Zutaten zum Bereitstellen.', { showInstruction: false });
  if (!game) return;
  recomputeShoppingArtifacts(game);
  const plan = buildPreparationPlan(game);
  renderPreparationItems(prepPrepareListEl, plan.prepare, 'Keine Zutaten zum Vorbereiten.', { showInstruction: true });
  renderPreparationItems(prepReadyListEl, plan.ready, 'Keine Zutaten zum Bereitstellen.', { showInstruction: false });
}

function renderPlayerInputs(game) {
  const playersCount = Math.max(1, Math.min(6, parseInt(game.settings.players, 10) || 1));
  game.settings.players = playersCount;
  const existing = game.players.length === playersCount ? game.players : getPlayerDefaultNames(playersCount);

  playerInputsEl.innerHTML = '';
  for (let i = 0; i < playersCount; i++) {
    const label = document.createElement('label');
    label.setAttribute('for', `playerName${i + 1}`);
    label.textContent = `Spieler ${i + 1}`;

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `playerName${i + 1}`;
    input.value = existing[i];

    label.appendChild(input);
    playerInputsEl.appendChild(label);
  }
}

function renderScoreStrip(game) {
  if (!scoreStripEl) return;
  scoreStripEl.classList.add('hidden');
  if (!game || !isGuessingMode(game) || !Array.isArray(game.players) || game.players.length === 0) {
    scoreStripEl.textContent = '';
    return;
  }
  scoreStripEl.textContent = game.players
    .map((name, idx) => `${name} ${game.scores?.[idx] ?? 0}`)
    .join('   ');
}

function getShoppingExportText(game = getCurrentGame()) {
  if (!game) return '';
  return buildReminderExport(game.shoppingList || []).trim();
}

function getBringExportText(game = getCurrentGame()) {
  return getShoppingDisplayEntries(game)
    .map(entry => {
      if (entry?.isRecommendation) return 'Küchenpapier / Küchenrolle';
      return [entry.label, prettyAmount(entry.amount), entry.unit].filter(Boolean).join(' ').trim();
    })
    .join('\n')
    .trim();
}

function getRecipeRecapExportText(game = getCurrentGame()) {
  const playedRounds = getPlayedRecipeRounds(game);
  if (playedRounds.length === 0) return '';

  const lines = [];

  playedRounds.forEach((round, idx) => {
    const recipeGuide = getRecipeGuide(round, game);
    lines.push(round.isJoker
      ? `${idx + 1}. ${round.name} - Freie Wahl`
      : `${idx + 1}. ${round.name}`);
    recipeGuide.steps.forEach(step => {
      lines.push(`- ${step}`);
    });
    lines.push('');
  });

  return [`Giro di Pasta - Gespielte Rezepte`, ...lines].join('\n').trim();
}

const HAPTIC_PATTERNS = Object.freeze({
  tap: 40,
  newGame: 45,
  reveal: 40,
  skip: 35,
  confirm: 40,
  score: 30
});

function triggerHaptic(type = 'tap') {
  const duration = typeof type === 'number'
    ? type
    : (HAPTIC_PATTERNS[type] ?? HAPTIC_PATTERNS.tap);
  if (!('vibrate' in navigator) || typeof navigator.vibrate !== 'function') return;
  try {
    navigator.vibrate(duration);
  } catch (error) {
    // Haptik ist optional.
  }
}

function isRoundScoringLocked(game) {
  return !game || !isGuessingMode(game) || !!game.awaitingRecipeReveal || !!game.finished;
}

function renderScoreboard(game) {
  if (!game || !isGuessingMode(game)) {
    scoreSectionEl.classList.add('hidden');
    scoreListEl.innerHTML = '';
    scoreSummaryEl.textContent = 'Punktestand';
    scoreSummaryLeaderEl.textContent = '';
    renderScoreStrip(null);
    return;
  }

  scoreSectionEl.classList.remove('hidden');
  scoreListEl.innerHTML = '';
  scoreSummaryEl.textContent = 'Punktestand';
  const scoringLocked = isRoundScoringLocked(game);
  const ranking = game.players
    .map((name, idx) => ({ name, score: game.scores[idx] ?? 0, index: idx }))
    .sort((a, b) => (b.score - a.score) || (a.index - b.index));

  ranking.forEach((entry, rankIndex) => {
    const isCook = !scoringLocked && entry.index === game.activePlayerTurnIndex;
    const wrongDisabled = scoringLocked || isCook;
    const correctDisabled = scoringLocked || isCook || !!game.roundHasCorrectTip;
    const li = document.createElement('li');
    li.className = 'score-item';
    li.innerHTML = `
      <strong>${rankIndex + 1}. ${entry.name}: ${entry.score} Pkt</strong>
      <div class="score-controls">
        <button data-score="${entry.index}" data-delta="-1" data-kind="wrong" title="Falscher Tipp (-1)" ${wrongDisabled ? 'disabled' : ''}>Falsch</button>
        <button data-score="${entry.index}" data-delta="2" data-kind="correct" title="Richtiger Tipp (+2)" ${correctDisabled ? 'disabled' : ''}>Richtig</button>
      </div>
    `;
    scoreListEl.appendChild(li);
  });

  const leader = ranking[0];
  scoreSummaryLeaderEl.textContent = leader
    ? `1. ${leader.name}: ${leader.score} Pkt`
    : 'Noch keine Punkte';
  renderScoreStrip(game);
}

function getSelectedGameModeFromForm() {
  return gameModeOpenEl.checked ? GAME_MODE_OPEN : GAME_MODE_GUESSING;
}

function getSummaryPrimaryActionLabel(game) {
  if (game?.summaryReturnTarget === 'game') return 'Zurück ins Spiel';
  if (game?.summaryReturnTarget === 'players') return 'Zurück zu Spielernamen';
  return 'Weiter zur Vorbereitung';
}

function renderSummaryForMode(game) {
  const guessing = isGuessingMode(game);

  summaryRecipeHeadingEl.textContent = guessing ? 'Verdeckte Auswahl' : 'Rundenplan';
  summaryModeNoteEl.classList.remove('hidden');
  if (guessing) {
    summaryModeNoteEl.textContent = game.summaryReturnTarget
      ? 'Die verdeckte Auswahl bleibt geschützt. Du kannst hier weiterhin Einkaufsliste und Export nutzen.'
      : 'Die Rezepte wurden intern ausgewählt. Sichtbar bleiben nur Einkaufsliste und Mengen.';
  } else if (game.summaryReturnTarget === 'game') {
    summaryModeNoteEl.textContent = 'Du bist zurück in der Planung. Bereits laufende oder vergangene Runden bleiben gesperrt; kommende Runden kannst du weiter anpassen.';
  } else {
    summaryModeNoteEl.textContent = 'Die vorgeschlagenen Rezepte sind sichtbar und können vor Spielstart angepasst werden.';
  }
  summaryExtraRecipesSectionEl.classList.toggle('hidden', guessing);
  startGameBtn.textContent = getSummaryPrimaryActionLabel(game);

  renderRecipeList(game);
  renderShoppingListFromGame(game);
  renderExtraRecipeOptions(game);
}

function getSpectatorRecipeNames(game) {
  if (!game) return [];

  if (isOpenMode(game)) {
    return (game.rounds || []).map((round, index) => ({
      name: round.isJoker ? `${round.name} - Freie Wahl` : round.name,
      isCurrent: !game.finished && game.phase === 'game' && index === game.gameIndex
    }));
  }

  return getAllRecipes()
    .map(recipe => recipe.name)
    .filter((name, index, list) => list.indexOf(name) === index)
    .sort((a, b) => a.localeCompare(b, 'de-DE'));
}

async function requestScreenWakeLock() {
  if (!('wakeLock' in navigator)) return;
  if (screenWakeLock) return;

  try {
    screenWakeLock = await navigator.wakeLock.request('screen');
    screenWakeLock.addEventListener('release', () => {
      screenWakeLock = null;
    });
  } catch (error) {
    // Wake Lock ist optional und nicht auf allen Geräten verfügbar.
  }
}

async function releaseScreenWakeLock() {
  if (!screenWakeLock) return;
  try {
    await screenWakeLock.release();
  } catch (error) {
    // Ignorieren.
  } finally {
    screenWakeLock = null;
  }
}

async function tryLockPortrait() {
  if (!('orientation' in screen) || typeof screen.orientation?.lock !== 'function') return false;
  try {
    await screen.orientation.lock('portrait');
    return true;
  } catch (error) {
    return false;
  }
}

function renderRecipeSteps(steps) {
  stepListEl.innerHTML = '';
  const preparedSteps = steps.filter(step => !step.toLowerCase().startsWith('tipp:'));

  preparedSteps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    stepListEl.appendChild(li);
  });
}

function getPlayedRounds(game) {
  const rounds = Array.isArray(game?.rounds) ? game.rounds : [];
  if (game?.finished) return [...rounds];
  const playedCount = Math.max(0, Math.min(Number.isFinite(game?.gameIndex) ? game.gameIndex : 0, rounds.length));
  return rounds.slice(0, playedCount);
}

function getPlayedRecipeRounds(game) {
  return getPlayedRounds(game).filter(round => !round?.isJoker);
}

function renderRecap(game) {
  recapSectionEl.classList.remove('hidden');
  recapScorePanelEl.classList.add('hidden');
  recapScoreListEl.innerHTML = '';
  recapRecipeListEl.innerHTML = '';
  exportRecipesWhatsappBtn.disabled = getPlayedRecipeRounds(game).length === 0;

  getPlayedRecipeRounds(game).forEach((round, idx) => {
    const li = document.createElement('li');
    li.textContent = `${idx + 1}. ${round.name}`;
    recapRecipeListEl.appendChild(li);
  });
}

function setGameSubView(mode, game = getCurrentGame()) {
  const isHandover = mode === 'handover';
  const isRecipe = mode === 'recipe';
  const isFinal = mode === 'final';
  const guessing = isGuessingMode(game);
  const showReveal = guessing && isHandover;

  gameSection.classList.toggle('handover-mode', showReveal);
  revealScreenEl.classList.toggle('open', showReveal);
  nextRecipeBtn.classList.add('hidden');
  skipRecipeBtn.classList.toggle('hidden', showReveal || isFinal);
  finishGameBtn.classList.toggle('hidden', showReveal || isFinal);
  gameCardEl.classList.toggle('hidden', isFinal || showReveal);
  if (handoverInfoEl.parentElement) {
    handoverInfoEl.parentElement.classList.toggle('hidden', isFinal || showReveal);
  }
  recipeSecondaryInfoEl.classList.toggle('hidden', !isRecipe);
  scoreSectionEl.classList.toggle('hidden', !guessing || !isRecipe);
  ingredientIllustrationEl.classList.toggle('hidden', !isRecipe);
  stepListEl.classList.toggle('hidden', isFinal);
  recapSectionEl.classList.toggle('hidden', !isFinal);
  scoreSectionEl.open = false;
}

function renderRoundHandover(game, fixedPlayerIndex = null) {
  if (isOpenMode(game)) {
    game.awaitingRecipeReveal = false;
    revealCurrentRecipe(game);
    return;
  }

  if (game.gameIndex >= game.rounds.length) {
    renderFinal(game);
    return;
  }

  if (fixedPlayerIndex === null) {
    game.activePlayerTurnIndex = game.gameIndex % game.players.length;
  } else {
    game.activePlayerTurnIndex = fixedPlayerIndex;
  }
  game.awaitingRecipeReveal = true;
  game.roundHasCorrectTip = false;
  setGameSubView('handover', game);

  const currentName = game.players[game.activePlayerTurnIndex];
  revealPlayerEl.textContent = currentName || 'Nächste Person';
  handoverInfoEl.textContent = `${currentName} ist dran`;
  recipeTitleEl.textContent = '';
  recipeMetaEl.textContent = '';
  difficultyIndicatorEl.textContent = 'Schwierigkeit ●●○';
  tipTextEl.textContent = 'Tipp: Rezeptkarte wird nach der Übergabe angezeigt.';
  stepListEl.innerHTML = '<li>Wenn das Handy uebergeben wurde, druecke auf "Rezept anzeigen".</li>';
  setRecipeIllustrationPlaceholder();
  recipeTitleEl.style.borderBottomColor = '#cabaa2';
  setGameFrameAccent('#cabaa2');
  renderScoreStrip(game);

  upsertCurrentGame(game);
}

function skipCurrentRecipe(game) {
  if (game.gameIndex >= game.rounds.length) return;

  const skippedRound = game.rounds.splice(game.gameIndex, 1)[0];
  if (!skippedRound) return;

  game.rounds.push(skippedRound);
  renderRecipeList(game);

  if (isGuessingMode(game)) {
    renderRoundHandover(game, game.activePlayerTurnIndex);
    return;
  }

  game.awaitingRecipeReveal = false;
  revealCurrentRecipe(game);
}

function revealCurrentRecipe(game) {
  void requestScreenWakeLock();
  const round = game.rounds[game.gameIndex];
  const playerName = game.players[game.activePlayerTurnIndex];
  setGameSubView('recipe', game);

  handoverInfoEl.textContent = `${playerName} ist dran`;
  recipeTitleEl.textContent = round.name;
  recipeMetaEl.textContent = `Runde ${game.gameIndex + 1} von ${game.rounds.length}${round.isJoker ? ' - Joker' : ''}`;
  const accent = getAccentForRound(round);
  recipeTitleEl.style.borderBottomColor = accent;
  setGameFrameAccent(accent);
  const recipeGuide = getRecipeGuide(round, game);
  difficultyIndicatorEl.textContent = getDifficultyIndicatorText(recipeGuide.difficulty);
  setRecipeIllustration(round, accent);

  tipTextEl.textContent = `Tipp: ${recipeGuide.tip}`;
  renderRecipeSteps(recipeGuide.steps);

  game.awaitingRecipeReveal = false;
  finishGameBtn.textContent = 'Runde beenden';
  finishGameBtn.disabled = false;
  renderScoreboard(game);
  upsertCurrentGame(game);
}

function finalizeRoundScore(game) {
  if (!isGuessingMode(game)) return;
  if (game.roundHasCorrectTip) return;

  const cookIndex = game.activePlayerTurnIndex;
  game.scores[cookIndex] += 3;
  game.roundHasCorrectTip = true;
  renderScoreboard(game);
  showStatus(`Kein richtiger Tipp: ${game.players[cookIndex]} bekommt automatisch +3 Punkte.`);
}

function renderFinal(game) {
  game.finished = true;
  game.phase = 'game';
  setGameSubView('final', game);
  revealScreenEl.classList.remove('open');
  handoverInfoEl.textContent = '';
  recipeTitleEl.textContent = '';
  recipeMetaEl.textContent = '';
  difficultyIndicatorEl.textContent = 'Schwierigkeit ●●○';
  tipTextEl.textContent = '';
  setRecipeIllustrationPlaceholder();
  recipeTitleEl.style.borderBottomColor = 'transparent';
  setGameFrameAccent('#cabaa2');
  renderRecap(game);

  skipRecipeBtn.disabled = true;
  finishGameBtn.disabled = true;
  startAnotherGameBtn.textContent = 'Spiel neu starten';
  startAnotherGameBtn.classList.remove('hidden');
  upsertCurrentGame(game);
}

function renderSpectator(game) {
  hideAllSections();
  spectatorSection.classList.remove('hidden');
  spectatorRoundInfoEl.textContent = '';
  spectatorStatusEl.textContent = isOpenMode(game) ? 'Ohne Raten' : 'Aktiv';
  spectatorScoreListEl.innerHTML = '';
  spectatorRecipeListEl.innerHTML = '';
  spectatorScorePanelEl.classList.toggle('hidden', !game || isOpenMode(game));

  if (!game) {
    spectatorRoundInfoEl.textContent = 'Kein aktives Spiel gefunden.';
    spectatorStatusEl.textContent = 'Offline';
    const li = document.createElement('li');
    li.textContent = 'Kein Spiel gefunden.';
    spectatorRecipeListEl.appendChild(li);
    return;
  }

  const players = game.players || [];
  const rounds = game.rounds || [];
  const currentPlayerName = players[game.activePlayerTurnIndex] || 'Unbekannt';

  if (game.phase !== 'game' && !game.finished) {
    spectatorRoundInfoEl.textContent = isOpenMode(game)
      ? 'Planung aktiv.'
      : 'Spiel vorbereitet.';
    spectatorStatusEl.textContent = isOpenMode(game) ? 'Ohne Raten' : 'Bereit';
  } else if (game.finished || game.gameIndex >= rounds.length) {
    spectatorRoundInfoEl.textContent = 'Spiel beendet.';
    spectatorStatusEl.textContent = 'Beendet';
  } else {
    spectatorRoundInfoEl.textContent = `${currentPlayerName} ist dran.`;
    spectatorStatusEl.textContent = isOpenMode(game) ? 'Ohne Raten' : 'Aktiv';
  }

  if (isGuessingMode(game)) {
    (game.players || []).forEach((name, idx) => {
      const li = document.createElement('li');
      const points = game.scores?.[idx] ?? 0;
      li.textContent = `${name}: ${points} Pkt`;
      spectatorScoreListEl.appendChild(li);
    });
  }

  const allVisibleRecipes = getSpectatorRecipeNames(game);

  if (allVisibleRecipes.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'Keine Rezepte vorhanden.';
    spectatorRecipeListEl.appendChild(li);
  } else {
    allVisibleRecipes.forEach((entry, idx) => {
      const li = document.createElement('li');
      if (typeof entry === 'string') {
        li.textContent = `${idx + 1}. ${entry}`;
      } else {
        li.textContent = entry.isCurrent
          ? `${idx + 1}. ${entry.name} - Aktuell`
          : `${idx + 1}. ${entry.name}`;
        li.classList.toggle('spectator-recipe-current', !!entry.isCurrent);
      }
      spectatorRecipeListEl.appendChild(li);
    });
  }
}

function renderFromCurrentGame() {
  if (spectatorMode) return;
  const game = getCurrentGame();
  hideAllSections();
  updateMenuActionState();

  if (!game) {
    landingSection.classList.remove('hidden');
    renderLandingGameList();
    return;
  }

  currentGameLabelEl.textContent = `Aktives Spiel: ${formatGameLabel(game)}`;
  warmSpectatorQr(game);

  if (game.phase === 'config') {
    configSection.classList.remove('hidden');
    statusEl.classList.add('hidden');
    statusEl.textContent = '';
    game.settings.players = Math.max(1, Math.min(6, parseInt(game.settings.players, 10) || 1));
    playersInputEl.value = game.settings.players;
    recipesPerPersonEl.value = game.settings.recipesPerPerson || 6;
    gameModeGuessingEl.checked = isGuessingMode(game);
    gameModeOpenEl.checked = isOpenMode(game);
    meatAllowedEl.checked = game.settings.meatAllowed;
    animalAllowedEl.checked = game.settings.animalAllowed;
    fishAllowedEl.checked = game.settings.fishAllowed;
    spicyAllowedEl.checked = game.settings.spicyAllowed;
    return;
  }

  if (game.phase === 'summary') {
    if ((game.rounds || []).length > 0) {
      recomputeShoppingArtifacts(game);
      upsertCurrentGame(game);
    }
    summarySection.classList.remove('hidden');
    renderSummaryForMode(game);
    return;
  }

  if (game.phase === 'preparation') {
    preparationSection.classList.remove('hidden');
    renderPreparationSection(game);
    return;
  }

  if (game.phase === 'players') {
    playersSetupSection.classList.remove('hidden');
    renderPlayerInputs(game);
    return;
  }

  gameSection.classList.remove('hidden');
  renderScoreboard(game);
  nextRecipeBtn.disabled = false;
  skipRecipeBtn.disabled = false;
  finishGameBtn.disabled = false;
  startAnotherGameBtn.classList.add('hidden');

  if (game.finished || game.gameIndex >= game.rounds.length) {
    renderFinal(game);
    return;
  }

  if (isGuessingMode(game)) {
    if (game.awaitingRecipeReveal) renderRoundHandover(game);
    else revealCurrentRecipe(game);
    return;
  }

  if (game.awaitingRecipeReveal) {
    game.awaitingRecipeReveal = false;
    upsertCurrentGame(game);
  }
  revealCurrentRecipe(game);
}

// Elemente aus dem DOM holen
const landingSection = document.getElementById('landing');
const configSection = document.getElementById('config');
const summarySection = document.getElementById('summary');
const preparationSection = document.getElementById('preparation');
const playersSetupSection = document.getElementById('playersSetup');
const gameSection = document.getElementById('game');

const menuToggleBtn = document.getElementById('menuToggle');
const qrToggleBtn = document.getElementById('qrToggle');
const menuEl = document.getElementById('menu');
const gameListEl = document.getElementById('gameList');
const landingGameListEl = document.getElementById('landingGameList');
const createGameBtn = document.getElementById('createGame');
const restartFromBeginningBtn = document.getElementById('restartFromBeginning');
const restartGameBtn = document.getElementById('restartGame');

const gameTitleInputEl = document.getElementById('gameTitle');
const startNewGameBtn = document.getElementById('startNewGame');
const currentGameLabelEl = document.getElementById('currentGameLabel');

const playersInputEl = document.getElementById('players');
const recipesPerPersonEl = document.getElementById('recipesPerPerson');
const gameModeGuessingEl = document.getElementById('gameModeGuessing');
const gameModeOpenEl = document.getElementById('gameModeOpen');
const meatAllowedEl = document.getElementById('meatAllowed');
const animalAllowedEl = document.getElementById('animalAllowed');
const fishAllowedEl = document.getElementById('fishAllowed');
const spicyAllowedEl = document.getElementById('spicyAllowed');

const generateBtn = document.getElementById('generate');
const statusEl = document.getElementById('status');
const summaryRecipeHeadingEl = document.getElementById('summaryRecipeHeading');
const summaryModeNoteEl = document.getElementById('summaryModeNote');
const summaryExtraRecipesSectionEl = document.getElementById('summaryExtraRecipesSection');
const recipeListEl = document.getElementById('recipeList');
const shoppingListEl = document.getElementById('shoppingList');
const exportShoppingBtn = document.getElementById('exportShopping');
const startGameBtn = document.getElementById('startGame');
const newRoundBtn = document.getElementById('newRound');
const extraRecipeSelectEl = document.getElementById('extraRecipeSelect');
const addExtraRecipesBtn = document.getElementById('addExtraRecipes');
const prepPrepareListEl = document.getElementById('prepPrepareList');
const prepReadyListEl = document.getElementById('prepReadyList');
const preparationNextBtn = document.getElementById('preparationNext');
const preparationBackBtn = document.getElementById('preparationBack');

const playerInputsEl = document.getElementById('playerInputs');
const confirmPlayersBtn = document.getElementById('confirmPlayers');
const backToSummaryBtn = document.getElementById('backToSummary');

const handoverInfoEl = document.getElementById('handoverInfo');
const gameCardEl = document.getElementById('gameCard');
const recipeTitleEl = document.getElementById('recipeTitle');
const recipeMetaEl = document.getElementById('recipeMeta');
const recipeSecondaryInfoEl = document.getElementById('recipeSecondaryInfo');
const difficultyIndicatorEl = document.getElementById('difficultyIndicator');
const tipTextEl = document.getElementById('tipText');
const ingredientIllustrationEl = document.getElementById('ingredientIllustration');
const stepListEl = document.getElementById('stepList');
const scoreSectionEl = document.getElementById('scoreSection');
const scoreSummaryEl = document.getElementById('scoreSummary');
const scoreSummaryLeaderEl = document.getElementById('scoreSummaryLeader');
const scoreListEl = document.getElementById('scoreList');
const recapSectionEl = document.getElementById('recapSection');
const recapScorePanelEl = document.getElementById('recapScorePanel');
const recapScoreListEl = document.getElementById('recapScoreList');
const recapRecipeListEl = document.getElementById('recapRecipeList');
const exportRecipesWhatsappBtn = document.getElementById('exportRecipesWhatsapp');
const nextRecipeBtn = document.getElementById('nextRecipe');
const skipRecipeBtn = document.getElementById('skipRecipe');
const finishGameBtn = document.getElementById('finishGame');
const startAnotherGameBtn = document.getElementById('startAnotherGame');

const spectatorSection = document.getElementById('spectator');
const spectatorRoundInfoEl = document.getElementById('spectatorRoundInfo');
const spectatorStatusEl = document.getElementById('spectatorStatus');
const spectatorScorePanelEl = document.getElementById('spectatorScorePanel');
const spectatorScoreListEl = document.getElementById('spectatorScoreList');
const spectatorRecipeListEl = document.getElementById('spectatorRecipeList');

const scoreStripEl = document.getElementById('scoreStrip');
const revealScreenEl = document.getElementById('revealScreen');
const revealPlayerEl = document.getElementById('revealPlayer');
const revealRecipeBtn = document.getElementById('revealRecipeBtn');

const qrModalEl = document.getElementById('qrModal');
const qrImageEl = document.getElementById('qrImage');
const qrHintEl = document.getElementById('qrHint');
const copySpectatorLinkBtn = document.getElementById('copySpectatorLink');
const closeQrModalBtn = document.getElementById('closeQrModal');

const exportModalEl = document.getElementById('exportModal');
const exportWhatsappBtn = document.getElementById('exportWhatsapp');
const exportRemindersBtn = document.getElementById('exportReminders');
const exportBringBtn = document.getElementById('exportBring');
const exportPdfBtn = document.getElementById('exportPdf');
const exportClipboardBtn = document.getElementById('exportClipboard');
const closeExportModalBtn = document.getElementById('closeExportModal');

const extraRecipeModalEl = document.getElementById('extraRecipeModal');
const extraRecipePickerListEl = document.getElementById('extraRecipePickerList');
const confirmExtraRecipesBtn = document.getElementById('confirmExtraRecipes');
const cancelExtraRecipesBtn = document.getElementById('cancelExtraRecipes');

const deleteGameModalEl = document.getElementById('deleteGameModal');
const confirmDeleteGameBtn = document.getElementById('confirmDeleteGame');
const cancelDeleteGameBtn = document.getElementById('cancelDeleteGame');
const restartFromBeginningModalEl = document.getElementById('restartFromBeginningModal');
const confirmRestartFromBeginningBtn = document.getElementById('confirmRestartFromBeginning');
const cancelRestartFromBeginningBtn = document.getElementById('cancelRestartFromBeginning');

let games = loadGames();
let currentGameId = games.length > 0 ? games[games.length - 1].id : null;
const searchParams = new URLSearchParams(window.location.search);
const spectatorGameId = searchParams.get('watch');
const spectatorSnapshotGame = decodeSpectatorSnapshot(searchParams.get('snapshot'));
const spectatorMode = !!spectatorGameId;
let spectatorPollIntervalId = null;
let screenWakeLock = null;
let pendingDeleteGameId = null;
let pendingRestartFromBeginningGameId = null;

function applyModeBranding() {
  if (!spectatorMode) return;
  document.title = 'Giro di Pasta - Zuschauermodus';

  const faviconLink = document.querySelector('link[rel="icon"]');
  const appleTouchLink = document.querySelector('link[rel="apple-touch-icon"]');

  if (faviconLink) faviconLink.setAttribute('href', SPECTATOR_ICON_PATH);
  if (appleTouchLink) appleTouchLink.setAttribute('href', APP_ICON_PATH);
}

applyModeBranding();

function updateMenuActionState() {
  const game = getCurrentGame();
  restartGameBtn.disabled = !game;
  restartFromBeginningBtn.disabled = !canRestartGameFromBeginning(game);
}

function openRestartFromBeginningModal() {
  const game = getCurrentGame();
  if (!canRestartGameFromBeginning(game)) return;
  pendingRestartFromBeginningGameId = game.id;
  restartFromBeginningModalEl.classList.add('open');
  menuEl.classList.remove('open');
}

function closeRestartFromBeginningModal() {
  pendingRestartFromBeginningGameId = null;
  restartFromBeginningModalEl.classList.remove('open');
}

function confirmRestartFromBeginning() {
  if (!pendingRestartFromBeginningGameId) return;

  const game = games.find(entry => entry.id === pendingRestartFromBeginningGameId);
  closeRestartFromBeginningModal();
  if (!canRestartGameFromBeginning(game)) return;

  triggerHaptic('confirm');
  resetGameProgressToBeginning(game);
  upsertCurrentGame(game);
  renderFromCurrentGame();
  showStatus('Spiel startet wieder bei Runde 1.');
}

menuToggleBtn.addEventListener('click', () => {
  updateMenuActionState();
  menuEl.classList.toggle('open');
});

gameListEl.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const deleteId = target.dataset.deleteId;

  if (deleteId) {
    openDeleteGameModal(deleteId);
  }
});

landingGameListEl.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const deleteId = target.dataset.landingDeleteId;

  if (deleteId) {
    openDeleteGameModal(deleteId);
    return;
  }
});

startNewGameBtn.addEventListener('click', () => {
  triggerHaptic('newGame');
  menuEl.classList.remove('open');
  const game = createGame(gameTitleInputEl.value);
  games.push(game);
  saveGames();
  setCurrentGame(game.id);
  gameTitleInputEl.value = '';
});

createGameBtn.addEventListener('click', () => {
  triggerHaptic('newGame');
  openNewGameLanding();
  menuEl.classList.remove('open');
});

restartFromBeginningBtn.addEventListener('click', () => {
  openRestartFromBeginningModal();
});

restartGameBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) return;

  game.phase = 'config';
  game.rounds = [];
  game.shoppingList = [];
  game.shoppingExport = '';
  game.eligibleExtraRecipes = [];
  game.addedExtraRecipes = 0;
  game.summaryReturnTarget = '';
  game.players = [];
  game.scores = [];
  game.gameIndex = 0;
  game.activePlayerTurnIndex = 0;
  game.awaitingRecipeReveal = true;
  game.roundHasCorrectTip = false;
  game.finished = false;

  upsertCurrentGame(game);
  menuEl.classList.remove('open');
  renderFromCurrentGame();
});

generateBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) return;

  const players = Math.max(1, Math.min(6, parseInt(playersInputEl.value, 10) || 1));
  const recipesPerPerson = Math.max(6, Math.min(10, parseInt(recipesPerPersonEl.value, 10) || 6));
  const gameMode = getSelectedGameModeFromForm();
  game.settings = {
    players,
    recipesPerPerson,
    meatAllowed: meatAllowedEl.checked,
    animalAllowed: animalAllowedEl.checked,
    fishAllowed: fishAllowedEl.checked,
    spicyAllowed: spicyAllowedEl.checked
  };
  game.gameMode = gameMode;

  const recipeCatalog = getAllRecipes();
  const eligibleRecipes = filterRecipes(recipeCatalog, game.settings);
  const totalRoundsTarget = recipesPerPerson;
  const jokerRecipes = Math.max(1, Math.round(totalRoundsTarget * 0.2));
  const realRecipeTarget = Math.max(1, totalRoundsTarget - jokerRecipes);
  const realRecipeCount = Math.min(realRecipeTarget, eligibleRecipes.length);

  if (eligibleRecipes.length === 0) {
    showStatus('Keine Rezepte passen zu den gewaehlten Regeln. Passe die Filter an.', true);
    return;
  }

  const selectedRealRecipes = selectDiverseRecipes(eligibleRecipes, realRecipeCount);
  game.rounds = insertJokers(selectedRealRecipes, jokerRecipes);
  recomputeShoppingArtifacts(game);
  game.eligibleExtraRecipes = eligibleRecipes.filter(
    recipe => !selectedRealRecipes.some(selected => selected.name === recipe.name)
  );
  game.addedExtraRecipes = 0;
  game.summaryReturnTarget = '';
  game.players = [];
  game.scores = [];
  game.gameIndex = 0;
  game.activePlayerTurnIndex = 0;
  game.awaitingRecipeReveal = isGuessingMode(game);
  game.roundHasCorrectTip = false;
  game.phase = 'summary';
  game.finished = false;

  statusEl.classList.add('hidden');

  upsertCurrentGame(game);
  renderFromCurrentGame();
});

async function copyTextToClipboard(text) {
  const exportText = (text || '').trim();
  if (!exportText) return false;

  try {
    await navigator.clipboard.writeText(exportText);
    return true;
  } catch (error) {
    const temp = document.createElement('textarea');
    temp.value = exportText;
    temp.setAttribute('readonly', '');
    temp.style.position = 'absolute';
    temp.style.left = '-9999px';
    document.body.appendChild(temp);
    temp.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(temp);
    return copied;
  }
}

async function copyShoppingToClipboard(text = getShoppingExportText()) {
  return copyTextToClipboard(text);
}

async function shareShoppingList(game = getCurrentGame()) {
  const text = getShoppingExportText(game);
  if (!text) return false;
  if (typeof navigator.share !== 'function') return false;

  try {
    await navigator.share({
      title: 'Einkaufsliste – Giro di Pasta',
      text
    });
    return true;
  } catch (error) {
    if (error?.name === 'AbortError') return null;
    return false;
  }
}

function openExportModal() {
  exportModalEl.classList.add('open');
}

function closeExportModal() {
  exportModalEl.classList.remove('open');
}

function openWhatsappExport() {
  const text = getShoppingExportText();
  if (!text) return;
  const encoded = encodeURIComponent(`Giro di Pasta Einkaufsliste\n${text}`);
  window.location.href = `whatsapp://send?text=${encoded}`;
}

function openRecipeRecapWhatsappExport() {
  const text = getRecipeRecapExportText();
  if (!text) return;
  const encoded = encodeURIComponent(text);
  window.location.href = `whatsapp://send?text=${encoded}`;
}

function exportShoppingPdf() {
  const game = getCurrentGame();
  const title = game ? game.title : 'Einkaufsliste';
  const lines = getShoppingExportText(game).split('\n').filter(Boolean);
  if (lines.length === 0) return;
  const printable = window.open('', '_blank', 'width=640,height=800');
  if (!printable) return;
  const listHtml = lines.map(line => `<li>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</li>`).join('');
  printable.document.write(`<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    body { font-family: 'Cormorant Garamond', Georgia, serif; padding: 24px; color: #111; }
    h1 { font-family: 'Italiana', Georgia, serif; font-size: 24px; margin: 0 0 16px; letter-spacing: 0.04em; }
    ul { padding-left: 18px; }
    li { margin: 6px 0; }
  </style>
</head>
<body>
  <h1>${title} - Einkaufsliste</h1>
  <ul>${listHtml}</ul>
</body>
</html>`);
  printable.document.close();
  printable.focus();
  printable.print();
}

exportShoppingBtn.addEventListener('click', () => {
  openExportModal();
});

addExtraRecipesBtn.addEventListener('click', () => {
  openExtraRecipeModal();
});

recipeListEl.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const removeBtn = target.closest('[data-remove-round-index]');
  if (!(removeBtn instanceof HTMLElement)) return;

  const game = getCurrentGame();
  if (!game || game.phase !== 'summary' || isGuessingMode(game)) return;

  const removeIndex = parseInt(removeBtn.dataset.removeRoundIndex || '', 10);
  if (Number.isNaN(removeIndex)) return;

  const removedRound = game.rounds.splice(removeIndex, 1)[0];
  if (!removedRound) return;

  if (game.summaryReturnTarget === 'game' && !game.finished) {
    if (removeIndex < game.gameIndex) {
      game.gameIndex = Math.max(0, game.gameIndex - 1);
    } else if (game.gameIndex >= game.rounds.length) {
      game.gameIndex = Math.max(0, game.rounds.length - 1);
    }
  }

  if (removedRound.isExtraSelection && (game.addedExtraRecipes || 0) > 0) {
    game.addedExtraRecipes -= 1;
  }
  restoreRemovedRecipeToPool(game, removedRound);
  recomputeShoppingArtifacts(game);

  upsertCurrentGame(game);
  renderFromCurrentGame();
  showStatus(`${removedRound.name} wurde entfernt.`);
});

confirmExtraRecipesBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.phase !== 'summary' || isGuessingMode(game)) return;

  const selectedNames = Array.from(
    extraRecipePickerListEl.querySelectorAll('input[type="checkbox"]:checked')
  ).map(input => input.value).filter(Boolean);

  Array.from(extraRecipeSelectEl.options).forEach(option => {
    option.selected = selectedNames.includes(option.value);
  });

  const addedCount = addSelectedExtraRecipes(game, selectedNames);
  triggerHaptic('confirm');
  closeExtraRecipeModal();

  if (addedCount === 0) return;

  upsertCurrentGame(game);
  renderFromCurrentGame();
  showStatus(`${addedCount} Zusatzrezept(e) hinzugefügt.`);
});

cancelExtraRecipesBtn.addEventListener('click', () => {
  closeExtraRecipeModal();
});

confirmDeleteGameBtn.addEventListener('click', () => {
  confirmDeleteGame();
});

cancelDeleteGameBtn.addEventListener('click', () => {
  closeDeleteGameModal();
});

confirmRestartFromBeginningBtn.addEventListener('click', () => {
  confirmRestartFromBeginning();
});

cancelRestartFromBeginningBtn.addEventListener('click', () => {
  closeRestartFromBeginningModal();
});

startGameBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.rounds.length === 0) return;

  if (game.summaryReturnTarget) {
    game.phase = game.summaryReturnTarget;
    game.summaryReturnTarget = '';
    upsertCurrentGame(game);
    renderFromCurrentGame();
    return;
  }

  game.phase = 'preparation';
  upsertCurrentGame(game);
  renderFromCurrentGame();
});

preparationNextBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.rounds.length === 0) return;

  game.settings.players = Math.max(1, Math.min(6, parseInt(game.settings.players, 10) || 1));
  game.phase = 'players';
  if (game.players.length !== game.settings.players) {
    game.players = getPlayerDefaultNames(game.settings.players);
  }

  upsertCurrentGame(game);
  renderFromCurrentGame();
});

preparationBackBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) return;

  game.phase = 'summary';
  upsertCurrentGame(game);
  renderFromCurrentGame();
});

newRoundBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) return;

  game.phase = 'config';
  game.rounds = [];
  game.shoppingList = [];
  game.shoppingExport = '';
  game.eligibleExtraRecipes = [];
  game.addedExtraRecipes = 0;
  game.summaryReturnTarget = '';
  game.players = [];
  game.scores = [];
  game.gameIndex = 0;
  game.activePlayerTurnIndex = 0;
  game.awaitingRecipeReveal = true;
  game.roundHasCorrectTip = false;
  game.finished = false;

  upsertCurrentGame(game);
  renderFromCurrentGame();
});

confirmPlayersBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) return;

  game.settings.players = Math.max(1, Math.min(6, parseInt(game.settings.players, 10) || 1));
  const names = [];
  for (let i = 0; i < game.settings.players; i++) {
    const input = document.getElementById(`playerName${i + 1}`);
    const name = input && input.value.trim() ? input.value.trim() : `Spieler ${i + 1}`;
    names.push(name);
  }

  game.players = names;
  if (isGuessingMode(game) && game.scores.length !== names.length) {
    game.scores = names.map(() => 0);
  } else if (isOpenMode(game)) {
    game.scores = [];
  }
  game.rounds = shuffle(game.rounds);
  game.phase = 'game';
  game.summaryReturnTarget = '';
  game.gameIndex = 0;
  game.awaitingRecipeReveal = isGuessingMode(game);
  game.roundHasCorrectTip = false;
  game.activePlayerTurnIndex = 0;
  game.finished = false;

  upsertCurrentGame(game);
  void tryLockPortrait();
  renderFromCurrentGame();
});

backToSummaryBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) return;

  game.phase = 'preparation';
  game.summaryReturnTarget = '';
  upsertCurrentGame(game);
  renderFromCurrentGame();
});

scoreListEl.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const game = getCurrentGame();
  if (!isGuessingMode(game)) return;
  if (isRoundScoringLocked(game)) return;

  const index = parseInt(target.dataset.score || '', 10);
  const delta = parseInt(target.dataset.delta || '', 10);
  const kind = target.dataset.kind || '';

  if (Number.isNaN(index) || Number.isNaN(delta)) return;
  if (index === game.activePlayerTurnIndex) return;
  if (kind === 'correct' && game.roundHasCorrectTip) return;

  game.scores[index] += delta;
  if (kind === 'correct') game.roundHasCorrectTip = true;

  triggerHaptic('score');
  upsertCurrentGame(game);
  renderScoreboard(game);
});

nextRecipeBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;

  // Legacy button kept hidden; no interaction required.
});

revealRecipeBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;
  if (!game.awaitingRecipeReveal) return;
  triggerHaptic('reveal');
  void tryLockPortrait();
  revealCurrentRecipe(game);
});

skipRecipeBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;
  if (game.awaitingRecipeReveal) return;
  triggerHaptic('skip');
  skipCurrentRecipe(game);
});

finishGameBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;

  if (isGuessingMode(game) && game.awaitingRecipeReveal) {
    revealCurrentRecipe(game);
    return;
  }

  if (isGuessingMode(game)) finalizeRoundScore(game);
  game.gameIndex += 1;
  game.activePlayerTurnIndex = game.players.length > 0
    ? game.gameIndex % game.players.length
    : 0;
  game.awaitingRecipeReveal = isGuessingMode(game);
  game.roundHasCorrectTip = false;

  if (game.gameIndex >= game.rounds.length) {
    renderFinal(game);
  } else {
    if (isGuessingMode(game)) renderRoundHandover(game);
    else revealCurrentRecipe(game);
  }
});

startAnotherGameBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!canRestartGameFromBeginning(game)) return;

  triggerHaptic('newGame');
  resetGameProgressToBeginning(game);
  upsertCurrentGame(game);
  renderFromCurrentGame();
  showStatus('Spiel startet wieder bei Runde 1.');
});

qrToggleBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) {
    showStatus('Bitte zuerst ein Spiel öffnen oder anlegen.');
    return;
  }

  const spectatorUrl = getSpectatorUrl(game);
  const qrSource = warmedQrForUrl === spectatorUrl
    ? warmedQrSource
    : (createLocalQrSource(spectatorUrl) || getQrFallbackUrl(spectatorUrl));
  warmedQrForUrl = spectatorUrl;
  warmedQrSource = qrSource;
  qrImageEl.src = qrSource;
  qrHintEl.textContent = getSpectatorShareHint(game);
  qrModalEl.classList.add('open');
  menuEl.classList.remove('open');
});

copySpectatorLinkBtn.addEventListener('click', async () => {
  const game = getCurrentGame();
  if (!game) return;
  const link = getSpectatorUrl(game);
  try {
    await navigator.clipboard.writeText(link);
    showStatus('Zuschauer-Link kopiert.');
  } catch (error) {
    showStatus(link);
  }
});

closeQrModalBtn.addEventListener('click', () => {
  qrModalEl.classList.remove('open');
});

closeExportModalBtn.addEventListener('click', () => {
  closeExportModal();
});

exportClipboardBtn.addEventListener('click', async () => {
  const ok = await copyShoppingToClipboard();
  if (ok) showStatus('Einkaufsliste wurde in die Zwischenablage kopiert.');
  closeExportModal();
});

exportRemindersBtn.addEventListener('click', async () => {
  const shared = await shareShoppingList();
  if (shared === true) {
    showStatus('Teilen geöffnet.');
  } else if (shared === false) {
    const ok = await copyShoppingToClipboard();
    if (ok) showStatus('Apple-Erinnerungen Text wurde kopiert.');
  }
  closeExportModal();
});

exportBringBtn.addEventListener('click', async () => {
  const ok = await copyTextToClipboard(getBringExportText());
  if (ok) showStatus('Bring-Liste kopiert.');
  closeExportModal();
});

exportRecipesWhatsappBtn.addEventListener('click', () => {
  openRecipeRecapWhatsappExport();
});

exportWhatsappBtn.addEventListener('click', () => {
  openWhatsappExport();
  closeExportModal();
});

exportPdfBtn.addEventListener('click', () => {
  exportShoppingPdf();
  closeExportModal();
});

document.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (menuEl.classList.contains('open') && !menuEl.contains(target) && target !== menuToggleBtn) {
    menuEl.classList.remove('open');
  }
  if (qrModalEl.classList.contains('open') && target === qrModalEl) {
    qrModalEl.classList.remove('open');
  }
  if (extraRecipeModalEl.classList.contains('open') && target === extraRecipeModalEl) {
    closeExtraRecipeModal();
  }
  if (deleteGameModalEl.classList.contains('open') && target === deleteGameModalEl) {
    closeDeleteGameModal();
  }
  if (restartFromBeginningModalEl.classList.contains('open') && target === restartFromBeginningModalEl) {
    closeRestartFromBeginningModal();
  }
  if (exportModalEl.classList.contains('open') && target === exportModalEl) {
    closeExportModal();
  }
});

window.addEventListener('storage', event => {
  if (!spectatorMode) return;
  if (event.key !== STORAGE_KEY) return;
  games = loadGames();
});

const channel = 'BroadcastChannel' in window ? new BroadcastChannel('giro-di-pasta') : null;
if (channel) {
  channel.addEventListener('message', event => {
    if (spectatorMode && event.data?.type === 'game-update' && event.data?.game?.id === spectatorGameId) {
      renderSpectator(normalizeStoredGame(event.data.game));
    }
  });
}

qrImageEl.onerror = () => {
  qrImageEl.onerror = null;
  const game = getCurrentGame();
  const spectatorUrl = game ? getSpectatorUrl(game) : '';
  qrImageEl.src = spectatorUrl ? getQrFallbackUrl(spectatorUrl) : FALLBACK_IMAGE;
};

if ("serviceWorker" in navigator) {
  let swRefreshing = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (swRefreshing) return;
    swRefreshing = true;
    window.location.reload();
  });

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("service-worker.js");
      registration.update();

      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            newWorker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
    } catch (error) {
      console.error("Service Worker Registrierung fehlgeschlagen:", error);
    }
  });
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    void requestScreenWakeLock();
  } else {
    void releaseScreenWakeLock();
  }
});

window.addEventListener('beforeunload', () => {
  void releaseScreenWakeLock();
});

document.addEventListener('pointerdown', () => {
  void requestScreenWakeLock();
}, { passive: true });

renderGameList();
renderLandingGameList();

async function refreshSpectator() {
  const localGame = games.find(game => game.id === spectatorGameId) || null;
  let syncedGame = null;
  if (getSyncEndpointBase()) {
    syncedGame = await fetchSyncedGame(spectatorGameId);
  }
  const liveGame = syncedGame || localGame;
  renderSpectator(liveGame ? normalizeStoredGame(liveGame) : spectatorSnapshotGame);
}

if (spectatorMode) {
  menuToggleBtn.classList.add('hidden');
  qrToggleBtn.classList.add('hidden');
  void refreshSpectator();
  spectatorPollIntervalId = setInterval(() => {
    void refreshSpectator();
  }, 2000);
} else {
  renderFromCurrentGame();
}
