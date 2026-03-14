// Daten: Rezepte mit Zutaten und Mengen pro Mini-Portion (25 g Pasta + 25 g Sauce) pro Person
// Diese Daten werden aus der Excel‑Datei "Mengenmodell Portionsbasis.xlsx" generiert.
const recipesData = [
  {
    "name": "Aglio e olio e peperoncino",
    "ingredients": {
      "Chili/Peperoncino (g)": 0.25,
      "Knoblauch (Zehen)": 0.25,
      "Olivenöl (ml)": 5.0
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
      "Knoblauch (Zehen)": 0.0625
    }
  },
  {
    "name": "Ricotta al limone",
    "ingredients": {
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
      "Olivenöl (ml)": 1.25,
      "Ricotta (g)": 12.5
    }
  },
  {
    "name": "Gorgonzola e noci",
    "ingredients": {
      "Gorgonzola (g)": 8.75,
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
    "name": "Pistazie e limone",
    "ingredients": {
      "Olivenöl (ml)": 2.5,
      "Parmigiano (g)": 2.5,
      "Pistazien/Pistaziencreme (g)": 7.5,
      "Zitrone (Saft) (ml)": 3.75
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
    "name": "Ragù alla Bolognese",
    "ingredients": {
      "Olivenöl (ml)": 1.25,
      "Rinderhack (g)": 20.0,
      "Tomaten (g)": 20.0,
      "Tomatenmark (g)": 2.5,
      "Weißwein (ml)": 5.0,
      "Zwiebeln (g)": 5.0
    }
  },
  {
    "name": "Ragù bianco",
    "ingredients": {
      "Milch (ml)": 7.5,
      "Olivenöl (ml)": 1.25,
      "Parmigiano (g)": 2.5,
      "Rinderhack (g)": 20.0,
      "Weißwein (ml)": 5.0,
      "Zwiebeln (g)": 5.0
    }
  },
  {
    "name": "Salsiccia e finocchio",
    "ingredients": {
      "Fenchel (g)": 12.5,
      "Knoblauch (Zehen)": 0.0625,
      "Olivenöl (ml)": 1.25,
      "Salsiccia (g)": 20.0
    }
  },
  {
    "name": "Speck e cipolla",
    "ingredients": {
      "Olivenöl (ml)": 1.25,
      "Speck (g)": 15.0,
      "Zwiebeln (g)": 10.0
    }
  },
  {
    "name": "Pollo e panna",
    "ingredients": {
      "Hähnchen (g)": 20.0,
      "Olivenöl (ml)": 1.25,
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
    "name": "Crema di zucca",
    "ingredients": {
      "Butter (g)": 2.5,
      "Kürbis (g)": 37.5,
      "Parmigiano (g)": 2.5,
      "Sahne (ml)": 7.5,
      "Schwarzer Pfeffer (g)": 0.125
    }
  },
  {
    "name": "Taleggio e pepe",
    "ingredients": {
      "Olivenöl (ml)": 1.25,
      "Schwarzer Pfeffer (g)": 0.5,
      "Taleggio (g)": 10.0
    }
  },
  {
    "name": "Stracchino e noci",
    "ingredients": {
      "Olivenöl (ml)": 1.25,
      "Stracchino (g)": 10.0,
      "Walnüsse (g)": 5.0
    }
  },
  {
    "name": "Quattro formaggi",
    "ingredients": {
      "Gorgonzola (g)": 5.0,
      "Parmigiano (g)": 3.75,
      "Pecorino (g)": 3.75,
      "Ricotta (g)": 10.0,
      "Sahne (ml)": 7.5,
      "Schwarzer Pfeffer (g)": 0.125
    }
  },
  {
    "name": "Pesto genovese",
    "ingredients": {
      "Basilikum (g)": 3.75,
      "Knoblauch (Zehen)": 0.0625,
      "Olivenöl (ml)": 5.0,
      "Parmigiano (g)": 5.0,
      "Walnüsse (g)": 3.75
    }
  },
  {
    "name": "Pesto rosso",
    "ingredients": {
      "Getrocknete Tomaten (g)": 7.5,
      "Knoblauch (Zehen)": 0.0625,
      "Mandeln (g)": 3.75,
      "Olivenöl (ml)": 5.0,
      "Parmigiano (g)": 3.75
    }
  },
  {
    "name": "Pasta al latte",
    "ingredients": {
      "Butter (g)": 2.5,
      "Milch (ml)": 37.5,
      "Zucker (g)": 1.25
    }
  },
  {
    "name": "Pasta con burro e zucchero",
    "ingredients": {
      "Butter (g)": 5.0,
      "Zucker (g)": 3.75
    }
  },
  {
    "name": "Pasta dolce con noci",
    "ingredients": {
      "Butter (g)": 3.75,
      "Walnüsse (g)": 5.0,
      "Zucker (g)": 3.75
    }
  },
  {
    "name": "Pasta dolce con ricotta",
    "ingredients": {
      "Butter (g)": 2.5,
      "Milch (ml)": 5.0,
      "Ricotta (g)": 20.0,
      "Zucker (g)": 3.75
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
  const aggregated = {};

  recipes.filter(recipe => !recipe.isJoker).forEach(recipe => {
    Object.entries(recipe.ingredients).forEach(([ingredient, amount]) => {
      if (!aggregated[ingredient]) aggregated[ingredient] = 0;
      aggregated[ingredient] += amount * players;
    });
  });

  return Object.entries(aggregated)
    .sort((a, b) => a[0].localeCompare(b[0], 'de'))
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
  return entries
    .map(entry => `${entry.label}: ${prettyAmount(entry.amount)} ${entry.unit}`.trim())
    .join('\n');
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

const JOKER_RECIPE_GUIDE = {
  difficulty: 'leicht',
  steps: [
    'Joker ziehen und als Gruppe ein freies Rezept festlegen',
    'Verfügbare Zutaten aus der Einkaufsliste auswählen',
    'In 5 kurzen Schritten eure eigene Zubereitung planen',
    'Rezept kochen und gemeinsam abschmecken',
    'Normal raten und die Runde wie gewohnt werten'
  ],
  tip: 'Joker-Runden sind flexibel, aber sollten zur Einkaufsplanung passen.'
};

const supplementalRecipes = [
  {
    name: 'Limone e pecorino',
    ingredients: {
      'Pecorino (g)': 7.5,
      'Zitrone (Saft) (ml)': 3.75,
      'Olivenöl (ml)': 2.5,
      'Schwarzer Pfeffer (g)': 0.25
    }
  },
  {
    name: 'Pomodoro e olive nere',
    ingredients: {
      'Tomaten (g)': 30.0,
      'Oliven (g)': 5.0,
      'Knoblauch (Zehen)': 0.125,
      'Olivenöl (ml)': 1.25,
      'Oregano (g)': 0.125
    }
  },
  {
    name: 'Funghi e prezzemolo',
    ingredients: {
      'Champignons (g)': 20.0,
      'Petersilie (g)': 0.5,
      'Knoblauch (Zehen)': 0.125,
      'Butter (g)': 5.0
    }
  },
  {
    name: 'Ricotta, spinaci e limone',
    ingredients: {
      'Ricotta (g)': 12.5,
      'Spinat (g)': 25.0,
      'Zitrone (Saft) (ml)': 2.5,
      'Olivenöl (ml)': 1.25,
      'Parmigiano (g)': 2.5
    }
  }
];

const pdfRecipeNames = [
  'Aglio e olio e peperoncino',
  'Cacio e pepe',
  'Carbonara',
  'Gricia',
  'Amatriciana',
  'Puttanesca',
  'Aglio, olio e acciughe',
  'Sardellen e pangrattato',
  'Sardellen e limone',
  'Pomodoro e basilico',
  'Arrabbiata',
  'Marinara',
  'Ricotta e pomodoro al peperoncino',
  'Burro e salvia',
  'Funghi e burro',
  'Ricotta al limone',
  'Ricotta e gorgonzola',
  'Gorgonzola e noci',
  'Parmigiano e burro',
  'Pistazie e limone',
  'Pasta all’Assassina',
  'Ragù alla Bolognese',
  'Ragù bianco',
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
  'Crema di zucca',
  'Taleggio e pepe',
  'Stracchino e noci',
  'Quattro formaggi',
  'Pesto genovese',
  'Pesto rosso',
  'Pasta al latte',
  'Pasta con burro e zucchero',
  'Pasta dolce con noci',
  'Pasta dolce con ricotta'
];

const recipeGuidesById = {
  "aglio_e_olio_e_peperoncino": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Knoblauch in kaltem Öl ansetzen",
      "Chili kurz mitziehen [30-60 s]",
      "Pasta und Nudelwasser zugeben",
      "[MITTEL] 30-60 s schwenken bis glänzend",
      "Petersilie unterheben"
    ],
    "tip": "Knoblauch nicht bräunen lassen, sonst wird er bitter."
  },
  "cacio_e_pepe": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Pfeffer trocken rösten [30-60 s]",
      "Nudelwasser zugeben und Basis rühren",
      "Pasta kurz in der Pfanne schwenken",
      "[AUS] Pecorino kräftig einarbeiten",
      "Mit wenig Wasser cremig ziehen"
    ],
    "tip": "Käse nur off heat einarbeiten, sonst klumpt er."
  },
  "carbonara": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Pancetta knusprig auslassen [2-3 Min]",
      "[AUS] Ei, Käse und Pfeffer glattrühren",
      "Pasta mit wenig Nudelwasser zugeben",
      "[AUS] Eimasse sofort zügig unterheben",
      "Cremig ziehen und direkt servieren"
    ],
    "tip": "Ziel ist Emulsion, nicht Rührei."
  },
  "gricia": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Guanciale knusprig auslassen [2-3 Min]",
      "Pfeffer kurz im Fett rösten [30 s]",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Pecorino cremig einrühren",
      "Mit Guanciale-Crunch servieren"
    ],
    "tip": "Käse immer off heat einarbeiten."
  },
  "amatriciana": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Guanciale auslassen [2-3 Min]",
      "Optional mit Weißwein kurz ablöschen",
      "[HOCH] Tomaten sanft köcheln [3-4 Min]",
      "Pasta 30 s in der Sauce schwenken",
      "Pecorino beim Servieren zugeben"
    ],
    "tip": "Für den Tisch ist vorgewärmte Tomatenbasis am stabilsten."
  },
  "puttanesca": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch anrösten [30-60 s]",
      "Sardellen im Öl auflösen",
      "Kapern und Oliven zugeben",
      "[HOCH] Tomaten 3-4 Min köcheln",
      "Pasta kurz emulgierend schwenken"
    ],
    "tip": "Erst probieren, dann salzen."
  },
  "aglio_olio_e_acciughe": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Knoblauch sanft im Öl erwärmen",
      "Sardellen einrühren bis sie zerfallen",
      "Pasta und Nudelwasser zugeben",
      "[MITTEL] Kurz emulgierend schwenken",
      "Petersilie unterheben"
    ],
    "tip": "Nicht überhitzen, sonst wird es streng."
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
    "tip": "Brösel separat halten, damit sie knusprig bleiben."
  },
  "sardellen_e_limone": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Knoblauch sanft im Öl erwärmen",
      "Sardellen einrühren bis sie zerfallen",
      "Pasta und Nudelwasser zugeben",
      "Kurz emulgierend schwenken",
      "Zitronenabrieb und wenig Saft zugeben"
    ],
    "tip": "Abrieb bringt Aroma, Saft nur sparsam dosieren."
  },
  "pomodoro_e_basilico": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch oder Zwiebel anschwitzen",
      "[HOCH] Tomaten zugeben und salzen",
      "3-4 Min leise köcheln lassen",
      "Pasta mit Nudelwasser binden",
      "[AUS] Basilikum am Ende unterheben"
    ],
    "tip": "Basilikum nie mitkochen."
  },
  "arrabbiata": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch anrösten [30-60 s]",
      "Chili kurz im Öl ziehen lassen",
      "[HOCH] Tomaten 3-4 Min köcheln",
      "Pasta mit Nudelwasser binden",
      "Petersilie und optional Pecorino zugeben"
    ],
    "tip": "Lieber nachschärfen als zu früh übertreiben."
  },
  "marinara": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Knoblauch sanft anrösten [30-60 s]",
      "[HOCH] Tomaten zugeben und 3-4 Min köcheln",
      "Oregano einrühren",
      "Pasta in der Sauce schwenken",
      "Kräuter-Finish zugeben"
    ],
    "tip": "Hier ist die Tomaten-Oregano-Sugo-Variante gemeint."
  },
  "ricotta_e_pomodoro_al_peperoncino": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Tomatensauce mit Chili erwärmen",
      "[AUS] Ricotta mit Nudelwasser glattrühren",
      "Pasta in Tomate schwenken",
      "[AUS] Ricotta-Creme unterziehen",
      "Kurz abschmecken und servieren"
    ],
    "tip": "Ricotta nicht sprudelnd kochen."
  },
  "burro_e_salvia": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Butter schmelzen [1-2 Min]",
      "Salbei kurz knusprig ziehen [30-60 s]",
      "Pasta und Nudelwasser zugeben",
      "[MITTEL] Emulgierend schwenken",
      "Optional mit Käse abrunden"
    ],
    "tip": "Butter nur haselnussfarben, nicht dunkel."
  },
  "funghi_e_burro": {
    "difficulty": "mittel",
    "steps": [
      "[HOCH] Pilze heiß anbraten bis trocken",
      "[NIEDRIG] Butter zugeben und aromatisieren",
      "Pasta und Nudelwasser zugeben",
      "[MITTEL] Emulgierend schwenken",
      "Petersilie zugeben"
    ],
    "tip": "Für den Tisch Pilze besser vorbraten."
  },
  "ricotta_al_limone": {
    "difficulty": "leicht",
    "steps": [
      "[AUS] Ricotta mit Abrieb und Öl glattrühren",
      "Nudelwasser 1-2 EL einarbeiten",
      "Pasta zugeben",
      "Cremig emulgieren",
      "Mit wenig Zitronensaft abschmecken"
    ],
    "tip": "Abrieb ist wichtiger als Saft."
  },
  "ricotta_e_gorgonzola": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Gorgonzola sanft mit Milch schmelzen",
      "Ricotta glattrühren",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren",
      "Mit Pfeffer servieren"
    ],
    "tip": "Niedrige Hitze hält die Sauce stabil."
  },
  "gorgonzola_e_noci": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Walnüsse trocken rösten [1-2 Min]",
      "[NIEDRIG] Gorgonzola in Milch schmelzen",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren",
      "Nüsse als Finish zugeben"
    ],
    "tip": "Nüsse zuletzt für Crunch."
  },
  "parmigiano_e_burro": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Butter schmelzen [1-2 Min]",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Parmigiano einrühren",
      "Cremig ziehen, Wasser nach Bedarf",
      "Optional mit Pfeffer servieren"
    ],
    "tip": "Die Emulsion entsteht über Restwärme."
  },
  "pistazie_e_limone": {
    "difficulty": "leicht",
    "steps": [
      "[AUS] Pistazien mit Öl zu Pesto mixen",
      "Zitronenabrieb einrühren",
      "Pasta und Nudelwasser zugeben",
      "Cremig schwenken",
      "Optional mit Käse abrunden"
    ],
    "tip": "Pesto nicht erhitzen, Abrieb erst am Ende."
  },
  "pasta_all_assassina": {
    "difficulty": "mittel",
    "steps": [
      "Passata und Wasser zu Brühe mischen",
      "[HOCH] Knoblauch und Chili anrösten",
      "Trockene Pasta in der Pfanne rösten",
      "Brühe etappenweise zugeben und reduzieren",
      "Röstaroma kontrollieren und servieren"
    ],
    "tip": "Fast anbrennen ist gewollt, schwarz ist zu weit."
  },
  "ragu_alla_bolognese": {
    "difficulty": "schwer",
    "steps": [
      "[MITTEL] Soffritto und Fleisch anschwitzen",
      "Mit Wein ablöschen und reduzieren",
      "Tomate und Milch zugeben",
      "Vorgekochte Ragù-Basis nur erhitzen",
      "Pasta portioniert untermischen"
    ],
    "tip": "Im Spiel nur mit vorgekochter Ragù-Basis sinnvoll."
  },
  "ragu_bianco": {
    "difficulty": "schwer",
    "steps": [
      "[MITTEL] Soffritto und Fleisch anschwitzen",
      "Mit Weißwein ablöschen",
      "Brühe zugeben und Basis aufbauen",
      "Vorgekochte Ragù-Basis nur erwärmen",
      "Pasta untermischen und servieren"
    ],
    "tip": "Zeit ist Kernzutat, daher nur mit Prep-Flag spielen."
  },
  "salsiccia_e_finocchio": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Salsiccia krümelig braten",
      "Zwiebel weich werden lassen",
      "Optional Tomate oder Wein kurz einkochen",
      "Pasta mit Nudelwasser binden",
      "Kurz servierfertig schwenken"
    ],
    "tip": "Für den Tisch Salsiccia besser vorbraten."
  },
  "speck_e_cipolla": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Zwiebel langsam glasig ziehen",
      "[MITTEL] Speck rösten",
      "Optional Tomate kurz zugeben",
      "Pasta in der Pfanne schwenken",
      "Mit Pfeffer servieren"
    ],
    "tip": "Speck ist salzig, also vorsichtig würzen."
  },
  "pollo_e_panna": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Hähnchen kräftig anbraten",
      "Zwiebel oder Knoblauch kurz anschwitzen",
      "Sahne zugeben und kurz einkochen",
      "Pasta und Parmesan binden",
      "Cremig servieren"
    ],
    "tip": "Am Tisch besser mit vorgegartem Hähnchen arbeiten."
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
    "tip": "Für den Schnellmodus Pilze vorbraten."
  },
  "tonno_e_pomodoro": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Zwiebel oder Knoblauch anschwitzen",
      "[HOCH] Tomate kurz simmern",
      "Thunfisch nur kurz einrühren",
      "Pasta in der Sauce schwenken",
      "Petersilie zugeben"
    ],
    "tip": "Thunfisch nicht lange kochen."
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
    "tip": "Kapern vorher abspülen."
  },
  "salmone_e_panna": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Lachs kurz anrösten",
      "Sahne 2-3 Min köcheln lassen",
      "Pasta und Nudelwasser zugeben",
      "Cremig emulgieren",
      "Kräuter-Finish zugeben"
    ],
    "tip": "Frischer Lachs nur kurz garen."
  },
  "salmone_e_limone": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Lachs kurz garen oder erwärmen",
      "Pasta und Nudelwasser zugeben",
      "Zitronenabrieb einrühren",
      "[AUS] Mit wenig Saft abschmecken",
      "Kräuter zugeben und servieren"
    ],
    "tip": "Säure immer erst am Ende zugeben."
  },
  "gamberi_e_aglio": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Knoblauch anschwitzen",
      "Garnelen 1-3 Min braten",
      "Pasta und Nudelwasser zugeben",
      "Kurz emulgierend schwenken",
      "Petersilie zugeben"
    ],
    "tip": "Garnelen nicht übergaren."
  },
  "gamberi_e_zucchine": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Zucchini bissfest anbraten",
      "Garnelen kurz garen",
      "Pasta und Nudelwasser zugeben",
      "Emulgierend schwenken",
      "Petersilie zugeben"
    ],
    "tip": "Zucchini erst am Ende salzen."
  },
  "vongole_in_bianco": {
    "difficulty": "schwer",
    "steps": [
      "Vorbereitete Vongole bereithalten",
      "[MITTEL] Vongole öffnen und Saft auffangen",
      "Flüssigkeit filtern und zur Pfanne geben",
      "Pasta emulgierend schwenken",
      "Petersilie zugeben und servieren"
    ],
    "tip": "Ohne Spurgare und Prep nicht party-tauglich."
  },
  "vongole_e_pomodoro": {
    "difficulty": "schwer",
    "steps": [
      "Vorbereitete Vongole bereithalten",
      "[MITTEL] Tomate kurz köcheln",
      "Vongole öffnen und Saft einarbeiten",
      "Pasta in der Sauce schwenken",
      "Petersilie zugeben"
    ],
    "tip": "Tomate nur leicht halten, damit das Meeresaroma bleibt."
  },
  "frutti_di_mare": {
    "difficulty": "schwer",
    "steps": [
      "Vorgegarte Meeresfrüchte bereithalten",
      "Garzeiten kurz staffeln und erwärmen",
      "Tomate und Muschelwasser kurz simmern",
      "Pasta in der Sauce schwenken",
      "Petersilie zugeben"
    ],
    "tip": "Ohne Prep ist das kein 5-Minuten-Rezept."
  },
  "bottarga_e_limone": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Öl sanft aromatisieren",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Bottarga einrühren",
      "Zitronenabrieb als Finish zugeben",
      "Direkt servieren"
    ],
    "tip": "Bottarga nicht kochen."
  },
  "melanzane_e_pomodoro": {
    "difficulty": "schwer",
    "steps": [
      "Vorgegarte Melanzane bereithalten",
      "[MITTEL] Tomatensauce kurz erwärmen",
      "Pasta in der Sauce schwenken",
      "Melanzane unterheben",
      "Basilikum und Ricotta salata zugeben"
    ],
    "tip": "Ohne vorbereitete Auberginen zu langsam."
  },
  "zucchine_e_menta": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Zucchini fein in Öl garen",
      "Pasta und Nudelwasser zugeben",
      "Minze einrühren",
      "[AUS] Käse cremig binden",
      "Kurz servieren"
    ],
    "tip": "Minze immer erst ganz am Ende."
  },
  "spinaci_e_ricotta": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Spinat kurz zusammenfallen lassen",
      "[AUS] Ricotta mit Nudelwasser glattrühren",
      "Pasta zugeben",
      "Cremig emulgieren und würzen",
      "Parmesan-Finish zugeben"
    ],
    "tip": "Ricotta nicht kochen."
  },
  "crema_di_zucca": {
    "difficulty": "mittel",
    "steps": [
      "Vorgegarte Kürbiscreme erwärmen",
      "Pasta und Nudelwasser zugeben",
      "Cremig emulgieren",
      "Käse oder Muskat einarbeiten",
      "Direkt servieren"
    ],
    "tip": "Als vorbereitete Basis-Sauce sehr gut spielbar."
  },
  "taleggio_e_pepe": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Taleggio mit Milch sanft schmelzen",
      "Pfeffer einrühren",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren",
      "Extra Pfeffer zugeben"
    ],
    "tip": "Nicht kochen, sonst trennt der Käse."
  },
  "stracchino_e_noci": {
    "difficulty": "leicht",
    "steps": [
      "[MITTEL] Nüsse rösten und hacken",
      "[NIEDRIG] Stracchino mit Milch cremig rühren",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren",
      "Nüsse als Finish zugeben"
    ],
    "tip": "Niedrige Hitze und Nüsse zuletzt."
  },
  "quattro_formaggi": {
    "difficulty": "mittel",
    "steps": [
      "Käse klein schneiden oder reiben",
      "[NIEDRIG] Mit Milch sanft schmelzen",
      "Pasta und Nudelwasser zugeben",
      "[AUS] Cremig emulgieren und pfeffern",
      "Direkt servieren"
    ],
    "tip": "Nicht sprudelnd kochen."
  },
  "pesto_genovese": {
    "difficulty": "mittel",
    "steps": [
      "[AUS] Knoblauch, Salz und Pinienkerne mörsern",
      "Basilikum kurz einarbeiten",
      "Käse einrühren",
      "Öl in dünnem Strahl zugeben",
      "Pasta mit wenig Nudelwasser mischen"
    ],
    "tip": "Pesto nie kochen und Basilikum kühl halten."
  },
  "pesto_rosso": {
    "difficulty": "leicht",
    "steps": [
      "[AUS] Getrocknete Tomaten vorbereiten",
      "Mit Mandeln und Öl mixen",
      "Käse und Basilikum zugeben",
      "Pasta mit wenig Nudelwasser mischen",
      "Direkt servieren"
    ],
    "tip": "Salz kontrollieren, das ist ein No-Cook-Rezept."
  },
  "pasta_al_latte": {
    "difficulty": "mittel",
    "steps": [
      "[NIEDRIG] Milch mit Zucker erhitzen",
      "Pasta in der Milch garziehen lassen",
      "Ständig rühren und leicht eindicken",
      "In Schalen füllen",
      "Mit Zimt oder Zucker toppen"
    ],
    "tip": "Brennt leicht an, daher ständig rühren."
  },
  "pasta_con_burro_e_zucchero": {
    "difficulty": "leicht",
    "steps": [
      "[NIEDRIG] Butter schmelzen",
      "Pasta zugeben und schwenken",
      "Zucker einrieseln und glasieren",
      "Sofort anrichten",
      "Optional Zimt oder Abrieb zugeben"
    ],
    "tip": "Als Spiel-Dessert klar kennzeichnen."
  },
  "pasta_dolce_con_noci": {
    "difficulty": "mittel",
    "steps": [
      "[MITTEL] Nüsse rösten und hacken",
      "Zucker kurz lösen oder glasieren",
      "Pasta zugeben und süß schwenken",
      "Nüsse darübergeben",
      "Mit Abrieb oder Kakao finishen"
    ],
    "tip": "Für Mini-Portionen lieber aromatischer als süßer."
  },
  "pasta_dolce_con_ricotta": {
    "difficulty": "leicht",
    "steps": [
      "[AUS] Ricotta mit Zucker cremig rühren",
      "Pasta kochen oder warm bereithalten",
      "Pasta in die Ricotta-Creme mischen",
      "Nur warm halten, nicht kochen",
      "Mit Zimt oder Abrieb toppen"
    ],
    "tip": "Ricotta-Creme nur warm, nicht heiß."
  }
};

const FALLBACK_IMAGE = 'assets/fallback.png';

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
  'pistazie_limone',
  'pasta_assassina',
  'ragu_bolognese',
  'ragu_bianco',
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
  'crema_zucca',
  'taleggio_pepe',
  'stracchino_noci',
  'quattro_formaggi',
  'pesto_genovese',
  'pesto_rosso',
  'pasta_latte',
  'pasta_burro_zucchero',
  'pasta_dolce_noci',
  'pasta_dolce_ricotta'
];

const recipeImageIdByName = (() => {
  const map = Object.create(null);
  const baseCount = Math.min(recipesData.length, RECIPE_IMAGE_IDS_IN_ORDER.length);

  for (let i = 0; i < baseCount; i++) {
    map[normalizeForId(recipesData[i].name)] = RECIPE_IMAGE_IDS_IN_ORDER[i];
  }

  // Zusätzliche Alias-Schreibweisen für Legacy-Namen.
  map.pasta_al_latte = 'pasta_latte';
  map.pasta_con_burro_e_zucchero = 'pasta_burro_zucchero';
  map.pasta_dolce_con_noci = 'pasta_dolce_noci';
  map.pasta_dolce_con_ricotta = 'pasta_dolce_ricotta';
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

function getAccentForRound(round) {
  if (round.isJoker) return '#2b0b0b';
  const tags = classifyRecipe(round);
  if (tags.isMeat) return '#C0392B';
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
  const imagePath = round?.isJoker ? '' : getCardImageForRecipe(round?.name || '');
  const token = ++illustrationRequestToken;

  if (!imagePath) {
    setRecipeIllustrationPlaceholder();
    return;
  }

  // Show placeholder while loading; switch only when image is confirmed available.
  setRecipeIllustrationPlaceholder();

  const probe = new Image();
  probe.onload = () => {
    if (token !== illustrationRequestToken) return;
    ingredientIllustrationEl.style.border = 'none';
    ingredientIllustrationEl.style.backgroundColor = 'transparent';
    ingredientIllustrationEl.style.backgroundImage = `url("${imagePath}")`;
    ingredientIllustrationEl.style.backgroundSize = 'contain';
    ingredientIllustrationEl.style.backgroundRepeat = 'no-repeat';
    ingredientIllustrationEl.style.backgroundPosition = 'center';
    delete ingredientIllustrationEl.dataset.placeholder;
  };
  probe.onerror = () => {
    if (token !== illustrationRequestToken) return;
    setRecipeIllustrationPlaceholder();
  };
  probe.src = imagePath;
}

function getAllRecipes() {
  return recipesData.concat(supplementalRecipes);
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

function getRecipeGuide(recipe) {
  if (recipe.isJoker) {
    return JOKER_RECIPE_GUIDE;
  }

  const key = normalizeForId(recipe.name || '');
  return recipeGuidesById[key] || DEFAULT_RECIPE_GUIDE;
}

function getRecipeSteps(recipe) {
  return getRecipeGuide(recipe).steps;
}

function formatCountdown(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function parseStepDuration(stepText) {
  const match = stepText.match(
    /(?:\[(\d+)(?:\s*-\s*(\d+))?\s*(s|sek(?:\.|unden?)?|sec(?:onds?)?|min(?:\.|uten?)?|m)\])|(?:\b(\d+)(?:\s*-\s*(\d+))?\s*(s|sek(?:\.|unden?)?|sec(?:onds?)?|min(?:\.|uten?)?|m)\b)/i
  );
  if (!match) return null;
  const firstRaw = match[1] || match[4];
  const secondRaw = match[2] || match[5] || null;
  const unit = (match[3] || match[6] || '').toLowerCase();
  const first = parseInt(firstRaw, 10);
  const second = secondRaw ? parseInt(secondRaw, 10) : null;
  if (!Number.isFinite(first)) return null;
  const rawValue = second || first;
  const seconds = unit.startsWith('m') || unit.startsWith('min') ? rawValue * 60 : rawValue;
  return {
    fullMatch: match[0],
    valueText: match[0].replace(/^\[|\]$/g, '').trim(),
    seconds
  };
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

  let startX = 0;
  let dragging = false;
  let wasOpen = false;

  const finish = event => {
    if (!dragging) return;
    dragging = false;
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
    dragging = true;
    startX = event.clientX;
    wasOpen = row.classList.contains('reveal-delete');
    closeOtherSwipeRows(container, row);
    if (event.pointerId) row.setPointerCapture(event.pointerId);
  });

  row.addEventListener('pointermove', event => {
    if (!dragging) return;
    const deltaX = event.clientX - startX;
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

function getSpectatorUrl(gameId) {
  const url = new URL(window.location.href);
  url.searchParams.set('watch', gameId);
  return url.toString();
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

function loadGames() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
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
  return {
    id: `game_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    title: title && title.trim() ? title.trim() : fallback,
    createdAt: date.toISOString(),
    phase: 'config',
    settings: {
      players: 4,
      recipesPerPerson: 6,
      roundMinutes: 8,
      meatAllowed: true,
      animalAllowed: true,
      fishAllowed: true,
      spicyAllowed: true
    },
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
    roundStarted: false,
    roundTimerEndsAt: null,
    roundHasCorrectTip: false,
    finished: false,
    updatedAt: Date.now()
  };
}

function getCurrentGame() {
  return games.find(game => game.id === currentGameId) || null;
}

function upsertCurrentGame(updatedGame) {
  updatedGame.updatedAt = Date.now();
  const idx = games.findIndex(game => game.id === updatedGame.id);
  if (idx === -1) games.push(updatedGame);
  else games[idx] = updatedGame;
  saveGames();
  renderGameList();
  renderLandingGameList();
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

function hideAllSections() {
  landingSection.classList.add('hidden');
  configSection.classList.add('hidden');
  summarySection.classList.add('hidden');
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
    row.className = 'game-row swipe-row';

    const content = document.createElement('div');
    content.className = 'swipe-content';

    const loadBtn = document.createElement('button');
    loadBtn.className = 'game-load';
    loadBtn.dataset.gameId = game.id;
    loadBtn.textContent = formatGameLabel(game);
    if (game.id === currentGameId) {
      loadBtn.style.borderColor = '#b7ac9a';
      loadBtn.style.background = '#fffaf1';
    }

    content.appendChild(loadBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'swipe-action';
    deleteBtn.dataset.deleteId = game.id;
    deleteBtn.textContent = 'Löschen';
    deleteBtn.title = 'Spiel löschen';

    row.appendChild(content);
    row.appendChild(deleteBtn);
    gameListEl.appendChild(row);

    makeRowSwipeable(row, gameListEl);
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
    row.className = 'game-row swipe-row';

    const content = document.createElement('div');
    content.className = 'swipe-content';

    const button = document.createElement('button');
    button.className = 'game-load';
    button.dataset.gameId = game.id;
    button.textContent = formatGameLabel(game);

    content.appendChild(button);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'swipe-action';
    deleteBtn.dataset.landingDeleteId = game.id;
    deleteBtn.textContent = 'Löschen';
    deleteBtn.title = 'Spiel löschen';

    row.appendChild(content);
    row.appendChild(deleteBtn);
    landingGameListEl.appendChild(row);

    makeRowSwipeable(row, landingGameListEl);
  });
}

function renderRecipeList(rounds) {
  recipeListEl.innerHTML = '';
  rounds.forEach((round, index) => {
    const li = document.createElement('li');
    li.textContent = round.isJoker
      ? `${index + 1}. ${round.name} - Freie Wahl`
      : `${index + 1}. ${round.name}`;
    recipeListEl.appendChild(li);
  });
}

function renderExtraRecipeOptions(game) {
  extraRecipeSelectEl.innerHTML = '';
  const remainingSlots = Math.max(0, 2 - (game.addedExtraRecipes || 0));

  if (remainingSlots === 0) {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'Maximale Anzahl erreicht';
    extraRecipeSelectEl.appendChild(option);
    extraRecipeSelectEl.disabled = true;
    addExtraRecipesBtn.disabled = true;
    return;
  }

  const pool = game.eligibleExtraRecipes || [];
  if (pool.length === 0) {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'Keine weiteren passenden Rezepte';
    extraRecipeSelectEl.appendChild(option);
    extraRecipeSelectEl.disabled = true;
    addExtraRecipesBtn.disabled = true;
    return;
  }

  pool.forEach(recipe => {
    const option = document.createElement('option');
    option.value = recipe.name;
    option.textContent = recipe.name;
    extraRecipeSelectEl.appendChild(option);
  });

  extraRecipeSelectEl.disabled = false;
  addExtraRecipesBtn.disabled = false;
}

function renderShoppingListFromGame(game) {
  shoppingListEl.innerHTML = '';
  game.shoppingList.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.label}: ${prettyAmount(entry.amount)} ${entry.unit}`.trim();
    shoppingListEl.appendChild(li);
  });
  shoppingExportEl.value = game.shoppingExport || '';
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
  if (!game || !Array.isArray(game.players) || game.players.length === 0) {
    scoreStripEl.textContent = '';
    return;
  }
  scoreStripEl.textContent = game.players
    .map((name, idx) => `${name} ${game.scores?.[idx] ?? 0}`)
    .join('   ');
}

function renderScoreboard(game) {
  scoreListEl.innerHTML = '';
  scoreSummaryEl.textContent = 'Punktestand';
  const scoringLocked = !game.roundStarted;

  game.scores.forEach((score, index) => {
    const li = document.createElement('li');
    li.className = 'score-item';
    li.innerHTML = `
      <strong>${game.players[index]}: ${score} Pkt</strong>
      <div class="score-controls">
        <button data-score="${index}" data-delta="-1" data-kind="wrong" title="Falscher Tipp (-1)" ${scoringLocked ? 'disabled' : ''}>Falsch</button>
        <button data-score="${index}" data-delta="2" data-kind="correct" title="Richtiger Tipp (+2)" ${scoringLocked ? 'disabled' : ''}>Richtig</button>
      </div>
    `;
    scoreListEl.appendChild(li);
  });

  const ranking = game.players
    .map((name, idx) => ({ name, score: game.scores[idx] ?? 0 }))
    .sort((a, b) => b.score - a.score);
  const topOne = ranking[0] ? `1. ${ranking[0].name} (${ranking[0].score})` : '';
  const topTwo = ranking[1] ? `2. ${ranking[1].name} (${ranking[1].score})` : '';
  const compact = [topOne, topTwo].filter(Boolean).join(' | ');
  if (compact) scoreSummaryEl.textContent = `Punktestand: ${compact}`;
  renderScoreStrip(game);
}

function clearInlineTimers() {
  inlineTimerIntervals.forEach(intervalId => clearInterval(intervalId));
  inlineTimerIntervals.clear();
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

function getTimerAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!window.__giroTimerAudioContext) {
    window.__giroTimerAudioContext = new AudioContextClass();
  }
  return window.__giroTimerAudioContext;
}

function primeInlineTimerSound() {
  const ctx = getTimerAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
}

function playInlineTimerDoneSound() {
  const ctx = getTimerAudioContext();
  if (!ctx) {
    if (navigator.vibrate) navigator.vibrate(120);
    return;
  }

  if (ctx.state === 'suspended') {
    ctx.resume()
      .then(() => playInlineTimerDoneSound())
      .catch(() => {
        if (navigator.vibrate) navigator.vibrate(120);
      });
    return;
  }

  const now = ctx.currentTime;
  const gain = ctx.createGain();
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

  const toneA = ctx.createOscillator();
  toneA.type = 'sine';
  toneA.frequency.setValueAtTime(880, now);
  toneA.connect(gain);
  toneA.start(now);
  toneA.stop(now + 0.17);

  const toneB = ctx.createOscillator();
  toneB.type = 'sine';
  toneB.frequency.setValueAtTime(1175, now + 0.2);
  toneB.connect(gain);
  toneB.start(now + 0.2);
  toneB.stop(now + 0.37);
}

function speakInlineTimerDone() {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    return false;
  }

  try {
    const utterance = new SpeechSynthesisUtterance('Nächster Schritt');
    utterance.lang = 'de-DE';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    return true;
  } catch (error) {
    return false;
  }
}

function renderStepsWithTimers(steps) {
  clearInlineTimers();
  stepListEl.innerHTML = '';
  const preparedSteps = steps.filter(step => !step.toLowerCase().startsWith('tipp:'));

  preparedSteps.forEach(step => {
      const li = document.createElement('li');
      const parsed = parseStepDuration(step);

      if (!parsed) {
        li.textContent = step;
        stepListEl.appendChild(li);
        return;
      }

      const before = step.slice(0, step.indexOf(parsed.fullMatch));
      const after = step.slice(step.indexOf(parsed.fullMatch) + parsed.fullMatch.length);
      li.append(document.createTextNode(before));

      const timerBtn = document.createElement('button');
      timerBtn.className = 'inline-timer-btn';
      timerBtn.type = 'button';
      timerBtn.dataset.seconds = String(parsed.seconds);
      timerBtn.textContent = parsed.valueText;

      timerBtn.addEventListener('click', () => {
        const total = parseInt(timerBtn.dataset.seconds || '0', 10);
        if (!Number.isFinite(total) || total <= 0) return;
        primeInlineTimerSound();
        if ('speechSynthesis' in window) window.speechSynthesis.getVoices();

        const live = document.createElement('span');
        live.className = 'inline-timer-live';
        let remaining = total;
        live.textContent = `${remaining}s`;
        timerBtn.replaceWith(live);

        const intervalId = setInterval(() => {
          remaining -= 1;
          if (remaining <= 0) {
            live.textContent = '0s';
            clearInterval(intervalId);
            inlineTimerIntervals.delete(intervalId);
            if (!speakInlineTimerDone()) {
              playInlineTimerDoneSound();
            }
            return;
          }
          live.textContent = `${remaining}s`;
        }, 1000);

        inlineTimerIntervals.add(intervalId);
      });

      li.appendChild(timerBtn);
      li.append(document.createTextNode(after));
      stepListEl.appendChild(li);
    });
}

function stopRoundCountdown() {
  if (roundCountdownIntervalId) {
    clearInterval(roundCountdownIntervalId);
    roundCountdownIntervalId = null;
  }
}

function updateRoundCountdownUi(remainingSeconds, totalSeconds = null) {
  const safeRemaining = Math.max(0, Math.floor(remainingSeconds));
  const total = totalSeconds || currentRoundDurationSeconds || safeRemaining || 1;
  const ratio = total > 0 ? safeRemaining / total : 1;
  let toneClass = 'timer-green';
  if (ratio <= 0.2) toneClass = 'timer-red';
  else if (ratio <= 0.5) toneClass = 'timer-yellow';

  roundCountdownEl.classList.remove('timer-green', 'timer-yellow', 'timer-red');
  roundCountdownEl.classList.add(toneClass);
  roundCountdownEl.classList.remove('hidden');
  roundCountdownValueEl.textContent = formatCountdown(safeRemaining);
}

function handleTimerSignals(remainingSeconds) {
  if (remainingSeconds <= 0) {
    if (navigator.vibrate) navigator.vibrate([220, 90, 320]);
    return;
  }

  if (!tenSecondWarningFired && remainingSeconds <= 10) {
    tenSecondWarningFired = true;
    if (navigator.vibrate) navigator.vibrate(160);
  }
}

function startRoundCountdown(game) {
  void requestScreenWakeLock();
  void tryLockPortrait();
  stopRoundCountdown();
  const roundMinutes = Math.max(1, parseInt(game.settings.roundMinutes || 8, 10));
  const durationSeconds = roundMinutes * 60;
  currentRoundDurationSeconds = durationSeconds;
  tenSecondWarningFired = false;
  game.roundTimerEndsAt = Date.now() + durationSeconds * 1000;
  game.roundStarted = true;
  setGameSubView('cooking');
  updateRoundCountdownUi(durationSeconds, durationSeconds);
  roundCountdownEl.classList.remove('start-ready');
  roundCountdownEl.classList.remove('start-pulse');
  if (navigator.vibrate) navigator.vibrate(180);
  const playerName = game.players[game.activePlayerTurnIndex];
  handoverInfoEl.textContent = `${playerName} kocht jetzt`;
  finishGameBtn.disabled = false;
  upsertCurrentGame(game);

  roundCountdownIntervalId = setInterval(() => {
    const remaining = Math.ceil((game.roundTimerEndsAt - Date.now()) / 1000);
    if (remaining <= 0) {
      updateRoundCountdownUi(0, durationSeconds);
      handleTimerSignals(0);
      stopRoundCountdown();
      return;
    }
    updateRoundCountdownUi(remaining, durationSeconds);
    handleTimerSignals(remaining);
  }, 1000);
}

function resumeRoundCountdown(game) {
  stopRoundCountdown();
  if (!game.roundStarted || !game.roundTimerEndsAt) {
    roundCountdownEl.classList.add('hidden');
    return;
  }

  currentRoundDurationSeconds = Math.max(1, parseInt(game.settings.roundMinutes || 8, 10)) * 60;
  const initial = Math.ceil((game.roundTimerEndsAt - Date.now()) / 1000);
  if (initial <= 0) {
    updateRoundCountdownUi(0, currentRoundDurationSeconds);
    return;
  }

  setGameSubView('cooking');
  roundCountdownEl.classList.remove('start-ready');
  roundCountdownEl.classList.remove('start-pulse');
  tenSecondWarningFired = initial <= 10;
  if (tenSecondWarningFired && initial > 0 && navigator.vibrate) navigator.vibrate(120);

  updateRoundCountdownUi(initial, currentRoundDurationSeconds);
  roundCountdownIntervalId = setInterval(() => {
    const remaining = Math.ceil((game.roundTimerEndsAt - Date.now()) / 1000);
    if (remaining <= 0) {
      updateRoundCountdownUi(0, currentRoundDurationSeconds);
      handleTimerSignals(0);
      stopRoundCountdown();
      return;
    }
    updateRoundCountdownUi(remaining, currentRoundDurationSeconds);
    handleTimerSignals(remaining);
  }, 1000);
}

function setGameSubView(mode) {
  const isHandover = mode === 'handover';
  const isCooking = mode === 'cooking';
  const isRecipe = mode === 'recipe';

  revealScreenEl.classList.toggle('open', isHandover);
  handoverActionsEl.classList.toggle('hidden', isHandover || isCooking);
  cookStartRowEl.classList.toggle('hidden', isHandover);
  ingredientIllustrationEl.classList.toggle('hidden', isHandover || isCooking);
  difficultyIndicatorEl.classList.toggle('hidden', isHandover || isCooking);
  tipTextEl.classList.toggle('hidden', isHandover || isCooking);
  recipeMetaEl.classList.toggle('hidden', isCooking);
  startCookingRowEl.classList.toggle('hidden', !isRecipe);
  nextRecipeBtn.classList.add('hidden');
  skipRecipeBtn.classList.toggle('hidden', isHandover);
  finishGameBtn.classList.toggle('hidden', isHandover);
  roundCountdownEl.classList.toggle('hidden', isHandover);
  gameSection.classList.toggle('cooking-mode', isCooking);
  if (isHandover) {
    scoreSectionEl.open = false;
    roundCountdownEl.classList.remove('start-ready');
    roundCountdownEl.classList.remove('start-pulse');
    stopRoundCountdown();
    clearInlineTimers();
  } else {
    scoreSectionEl.open = !isCooking;
  }
}

function renderRoundHandover(game, fixedPlayerIndex = null) {
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
  game.roundStarted = false;
  game.roundTimerEndsAt = null;
  game.roundHasCorrectTip = false;
  currentRoundDurationSeconds = Math.max(1, parseInt(game.settings.roundMinutes || 8, 10)) * 60;
  tenSecondWarningFired = false;
  setGameSubView('handover');
  skipRecipeTopBtn.classList.add('hidden');

  const currentName = game.players[game.activePlayerTurnIndex];
  revealPlayerEl.textContent = currentName || 'Nächste Person';
  handoverInfoEl.textContent = `${currentName} ist dran`;
  recipeTitleEl.textContent = `${currentName} ist dran`;
  recipeMetaEl.textContent = `Runde ${game.gameIndex + 1} von ${game.rounds.length}`;
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
  game.awaitingRecipeReveal = true;
  game.roundStarted = false;
  game.roundTimerEndsAt = null;
  game.roundHasCorrectTip = true;
  renderRecipeList(game.rounds);
  renderRoundHandover(game, game.activePlayerTurnIndex);
}

function revealCurrentRecipe(game) {
  void requestScreenWakeLock();
  const round = game.rounds[game.gameIndex];
  const playerName = game.players[game.activePlayerTurnIndex];
  setGameSubView('recipe');
  skipRecipeTopBtn.classList.add('hidden');

  handoverInfoEl.textContent = game.roundStarted ? `${playerName} kocht jetzt` : `${playerName} ist dran`;
  recipeTitleEl.textContent = round.name;
  recipeMetaEl.textContent = `Runde ${game.gameIndex + 1} von ${game.rounds.length}${round.isJoker ? ' - Joker' : ''}`;
  const accent = getAccentForRound(round);
  recipeTitleEl.style.borderBottomColor = accent;
  setGameFrameAccent(accent);
  const recipeGuide = getRecipeGuide(round);
  difficultyIndicatorEl.textContent = getDifficultyIndicatorText(recipeGuide.difficulty);
  setRecipeIllustration(round, accent);

  tipTextEl.textContent = `Tipp: ${recipeGuide.tip}`;
  renderStepsWithTimers(recipeGuide.steps);

  game.awaitingRecipeReveal = false;
  const roundMinutes = Math.max(1, parseInt(game.settings.roundMinutes || 8, 10));
  currentRoundDurationSeconds = roundMinutes * 60;
  finishGameBtn.textContent = 'Runde beenden';
  roundCountdownEl.classList.remove('hidden');
  const roundIsRunning = !!game.roundStarted;
  setGameSubView(roundIsRunning ? 'cooking' : 'recipe');
  roundCountdownEl.classList.toggle('start-ready', !roundIsRunning);
  roundCountdownEl.classList.toggle('start-pulse', !roundIsRunning);
  finishGameBtn.disabled = !roundIsRunning;
  if (game.roundStarted) {
    resumeRoundCountdown(game);
  } else {
    tenSecondWarningFired = false;
    updateRoundCountdownUi(currentRoundDurationSeconds, currentRoundDurationSeconds);
  }
  renderScoreboard(game);
  upsertCurrentGame(game);
}

function finalizeRoundScore(game) {
  if (game.roundHasCorrectTip) return;

  const cookIndex = game.activePlayerTurnIndex;
  game.scores[cookIndex] += 3;
  game.roundHasCorrectTip = true;
  game.roundStarted = false;
  game.roundTimerEndsAt = null;
  stopRoundCountdown();
  renderScoreboard(game);
  showStatus(`Kein richtiger Tipp: ${game.players[cookIndex]} bekommt automatisch +3 Punkte.`);
}

function renderFinal(game) {
  game.finished = true;
  game.phase = 'game';
  setGameSubView('recipe');
  startCookingRowEl.classList.add('hidden');
  revealScreenEl.classList.remove('open');
  gameSection.classList.remove('cooking-mode');
  handoverInfoEl.textContent = 'Spiel beendet.';
  recipeTitleEl.textContent = 'Endstand';
  recipeMetaEl.textContent = `${game.title}`;
  difficultyIndicatorEl.textContent = 'Schwierigkeit ●●○';
  tipTextEl.textContent = 'Tipp: Neues Spiel starten oder gespeichertes Spiel laden.';
  stopRoundCountdown();
  clearInlineTimers();
  setRecipeIllustrationPlaceholder();
  recipeTitleEl.style.borderBottomColor = '#cabaa2';
  setGameFrameAccent('#cabaa2');
  const ranking = game.players
    .map((name, idx) => ({ name, score: game.scores[idx] }))
    .sort((a, b) => b.score - a.score);

  stepListEl.innerHTML = '';
  ranking.forEach((entry, idx) => {
    const li = document.createElement('li');
    li.textContent = `${idx + 1}. ${entry.name}: ${entry.score} Punkte`;
    stepListEl.appendChild(li);
  });

  skipRecipeBtn.disabled = true;
  finishGameBtn.disabled = true;
  roundCountdownEl.classList.add('hidden');
  startAnotherGameBtn.classList.remove('hidden');
  upsertCurrentGame(game);
}

function stopSpectatorCountdown() {
  if (spectatorCountdownIntervalId) {
    clearInterval(spectatorCountdownIntervalId);
    spectatorCountdownIntervalId = null;
  }
}

function startSpectatorCountdown(roundTimerEndsAt) {
  stopSpectatorCountdown();

  const update = () => {
    const remaining = Math.max(0, Math.ceil((roundTimerEndsAt - Date.now()) / 1000));
    spectatorTimerEl.textContent = formatCountdown(remaining);
    if (remaining <= 0) stopSpectatorCountdown();
  };

  update();
  spectatorCountdownIntervalId = setInterval(update, 1000);
}

function renderSpectator(game) {
  hideAllSections();
  spectatorSection.classList.remove('hidden');
  spectatorRoundInfoEl.textContent = '';
  spectatorTimerEl.textContent = '08:00';
  spectatorScoreListEl.innerHTML = '';
  spectatorRecipeListEl.innerHTML = '';

  if (!game) {
    stopSpectatorCountdown();
    spectatorRoundInfoEl.textContent = 'Kein aktives Spiel gefunden.';
    spectatorTimerEl.textContent = '--:--';
    const li = document.createElement('li');
    li.textContent = 'Kein Spiel gefunden.';
    spectatorScoreListEl.appendChild(li);
    return;
  }

  const players = game.players || [];
  const rounds = game.rounds || [];
  const currentPlayerName = players[game.activePlayerTurnIndex] || 'Unbekannt';

  if (game.finished || game.gameIndex >= rounds.length) {
    spectatorRoundInfoEl.textContent = 'Spiel beendet.';
    stopSpectatorCountdown();
    spectatorTimerEl.textContent = '00:00';
  } else {
    spectatorRoundInfoEl.textContent = `${currentPlayerName} ist dran.`;
    if (game.roundStarted && game.roundTimerEndsAt) {
      startSpectatorCountdown(game.roundTimerEndsAt);
    } else {
      stopSpectatorCountdown();
      const roundMinutes = Math.max(1, parseInt(game.settings?.roundMinutes || 8, 10));
      spectatorTimerEl.textContent = formatCountdown(roundMinutes * 60);
    }
  }

  (game.players || []).forEach((name, idx) => {
    const li = document.createElement('li');
    const points = game.scores?.[idx] ?? 0;
    li.textContent = `${name}: ${points} Pkt`;
    spectatorScoreListEl.appendChild(li);
  });

  const recipeRounds = rounds.filter(round => !round.isJoker);
  if (recipeRounds.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'Keine Rezepte vorhanden.';
    spectatorRecipeListEl.appendChild(li);
  } else {
    recipeRounds.forEach((round, idx) => {
      const li = document.createElement('li');
      li.textContent = `${idx + 1}. ${round.name}`;
      spectatorRecipeListEl.appendChild(li);
    });
  }
}

function renderFromCurrentGame() {
  if (spectatorMode) return;
  stopSpectatorCountdown();
  const game = getCurrentGame();
  hideAllSections();

  if (!game) {
    landingSection.classList.remove('hidden');
    renderLandingGameList();
    return;
  }

  currentGameLabelEl.textContent = `Aktives Spiel: ${formatGameLabel(game)}`;

  if (game.phase === 'config') {
    configSection.classList.remove('hidden');
    game.settings.players = Math.max(1, Math.min(6, parseInt(game.settings.players, 10) || 1));
    playersInputEl.value = game.settings.players;
    recipesPerPersonEl.value = game.settings.recipesPerPerson || 6;
    roundMinutesEl.value = game.settings.roundMinutes || 8;
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
    renderRecipeList(game.rounds);
    renderShoppingListFromGame(game);
    renderExtraRecipeOptions(game);
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

  if (game.awaitingRecipeReveal) renderRoundHandover(game);
  else revealCurrentRecipe(game);
}

// Elemente aus dem DOM holen
const landingSection = document.getElementById('landing');
const configSection = document.getElementById('config');
const summarySection = document.getElementById('summary');
const playersSetupSection = document.getElementById('playersSetup');
const gameSection = document.getElementById('game');

const menuToggleBtn = document.getElementById('menuToggle');
const qrToggleBtn = document.getElementById('qrToggle');
const menuEl = document.getElementById('menu');
const gameListEl = document.getElementById('gameList');
const landingGameListEl = document.getElementById('landingGameList');
const createGameBtn = document.getElementById('createGame');
const restartGameBtn = document.getElementById('restartGame');

const gameTitleInputEl = document.getElementById('gameTitle');
const startNewGameBtn = document.getElementById('startNewGame');
const currentGameLabelEl = document.getElementById('currentGameLabel');

const playersInputEl = document.getElementById('players');
const recipesPerPersonEl = document.getElementById('recipesPerPerson');
const roundMinutesEl = document.getElementById('roundMinutes');
const meatAllowedEl = document.getElementById('meatAllowed');
const animalAllowedEl = document.getElementById('animalAllowed');
const fishAllowedEl = document.getElementById('fishAllowed');
const spicyAllowedEl = document.getElementById('spicyAllowed');

const generateBtn = document.getElementById('generate');
const statusEl = document.getElementById('status');
const recipeListEl = document.getElementById('recipeList');
const shoppingListEl = document.getElementById('shoppingList');
const shoppingExportEl = document.getElementById('shoppingExport');
const exportShoppingBtn = document.getElementById('exportShopping');
const startGameBtn = document.getElementById('startGame');
const newRoundBtn = document.getElementById('newRound');
const extraRecipeSelectEl = document.getElementById('extraRecipeSelect');
const addExtraRecipesBtn = document.getElementById('addExtraRecipes');

const playerInputsEl = document.getElementById('playerInputs');
const confirmPlayersBtn = document.getElementById('confirmPlayers');
const backToSummaryBtn = document.getElementById('backToSummary');

const handoverInfoEl = document.getElementById('handoverInfo');
const handoverActionsEl = document.getElementById('handoverActions');
const cookStartRowEl = document.getElementById('cookStartRow');
const showRecipeTopBtn = document.getElementById('showRecipeTop');
const skipRecipeTopBtn = document.getElementById('skipRecipeTop');
const recipeTitleEl = document.getElementById('recipeTitle');
const recipeMetaEl = document.getElementById('recipeMeta');
const roundCountdownEl = document.getElementById('roundCountdown');
const roundCountdownValueEl = document.getElementById('roundCountdownValue');
const difficultyIndicatorEl = document.getElementById('difficultyIndicator');
const tipTextEl = document.getElementById('tipText');
const ingredientIllustrationEl = document.getElementById('ingredientIllustration');
const stepListEl = document.getElementById('stepList');
const scoreSectionEl = document.getElementById('scoreSection');
const scoreSummaryEl = document.getElementById('scoreSummary');
const scoreListEl = document.getElementById('scoreList');
const nextRecipeBtn = document.getElementById('nextRecipe');
const skipRecipeBtn = document.getElementById('skipRecipe');
const finishGameBtn = document.getElementById('finishGame');
const startAnotherGameBtn = document.getElementById('startAnotherGame');

const spectatorSection = document.getElementById('spectator');
const spectatorRoundInfoEl = document.getElementById('spectatorRoundInfo');
const spectatorTimerEl = document.getElementById('spectatorTimer');
const spectatorScoreListEl = document.getElementById('spectatorScoreList');
const spectatorRecipeListEl = document.getElementById('spectatorRecipeList');

const scoreStripEl = document.getElementById('scoreStrip');
const revealScreenEl = document.getElementById('revealScreen');
const revealPlayerEl = document.getElementById('revealPlayer');
const revealRecipeBtn = document.getElementById('revealRecipeBtn');
const startCookingRowEl = document.getElementById('startCookingRow');
const startCookingBtn = document.getElementById('startCookingBtn');

const qrModalEl = document.getElementById('qrModal');
const qrImageEl = document.getElementById('qrImage');
const qrHintEl = document.getElementById('qrHint');
const copySpectatorLinkBtn = document.getElementById('copySpectatorLink');
const closeQrModalBtn = document.getElementById('closeQrModal');

const exportModalEl = document.getElementById('exportModal');
const exportWhatsappBtn = document.getElementById('exportWhatsapp');
const exportRemindersBtn = document.getElementById('exportReminders');
const exportPdfBtn = document.getElementById('exportPdf');
const exportClipboardBtn = document.getElementById('exportClipboard');
const closeExportModalBtn = document.getElementById('closeExportModal');

let games = loadGames();
let currentGameId = games.length > 0 ? games[games.length - 1].id : null;
const searchParams = new URLSearchParams(window.location.search);
const spectatorGameId = searchParams.get('watch');
const spectatorMode = !!spectatorGameId;
let roundCountdownIntervalId = null;
const inlineTimerIntervals = new Set();
let spectatorPollIntervalId = null;
let spectatorCountdownIntervalId = null;
let screenWakeLock = null;
let currentRoundDurationSeconds = null;
let tenSecondWarningFired = false;

menuToggleBtn.addEventListener('click', () => {
  menuEl.classList.toggle('open');
});

gameListEl.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const loadId = target.dataset.gameId;
  const deleteId = target.dataset.deleteId;

  if (loadId) {
    setCurrentGame(loadId);
    menuEl.classList.remove('open');
    return;
  }

  if (deleteId) {
    games = games.filter(game => game.id !== deleteId);
    if (currentGameId === deleteId) {
      currentGameId = games.length > 0 ? games[games.length - 1].id : null;
    }
    saveGames();
    renderGameList();
    renderLandingGameList();
    renderFromCurrentGame();
  }
});

landingGameListEl.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const loadId = target.dataset.gameId;
  const deleteId = target.dataset.landingDeleteId;

  if (deleteId) {
    games = games.filter(game => game.id !== deleteId);
    if (currentGameId === deleteId) {
      currentGameId = games.length > 0 ? games[games.length - 1].id : null;
    }
    saveGames();
    renderGameList();
    renderLandingGameList();
    renderFromCurrentGame();
    return;
  }

  if (!loadId) return;
  setCurrentGame(loadId);
});

startNewGameBtn.addEventListener('click', () => {
  menuEl.classList.remove('open');
  const game = createGame(gameTitleInputEl.value);
  games.push(game);
  saveGames();
  setCurrentGame(game.id);
  gameTitleInputEl.value = '';
});

createGameBtn.addEventListener('click', () => {
  openNewGameLanding();
  menuEl.classList.remove('open');
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
  game.players = [];
  game.scores = [];
  game.gameIndex = 0;
  game.activePlayerTurnIndex = 0;
  game.awaitingRecipeReveal = true;
  game.roundStarted = false;
  game.roundTimerEndsAt = null;
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
  const roundMinutes = Math.max(1, Math.min(30, parseInt(roundMinutesEl.value, 10) || 8));
  game.settings = {
    players,
    recipesPerPerson,
    roundMinutes,
    meatAllowed: meatAllowedEl.checked,
    animalAllowed: animalAllowedEl.checked,
    fishAllowed: fishAllowedEl.checked,
    spicyAllowed: spicyAllowedEl.checked
  };

  const recipeCatalog = getAllRecipes();
  const catalogCheck = getCatalogCheck();
  const eligibleRecipes = filterRecipes(recipeCatalog, game.settings);
  const totalRoundsTarget = recipesPerPerson;
  const jokerRecipes = Math.max(1, Math.round(totalRoundsTarget * 0.2));
  const realRecipeTarget = Math.max(1, totalRoundsTarget - jokerRecipes);
  const realRecipeCount = Math.min(realRecipeTarget, eligibleRecipes.length);
  const totalRounds = realRecipeCount + jokerRecipes;

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
  game.phase = 'summary';
  game.finished = false;

  if (eligibleRecipes.length < realRecipeTarget) {
    statusEl.classList.add('hidden');
  } else {
    statusEl.classList.add('hidden');
  }

  upsertCurrentGame(game);
  renderFromCurrentGame();
});

async function copyShoppingToClipboard() {
  const exportText = shoppingExportEl.value.trim();
  if (!exportText) return false;

  try {
    await navigator.clipboard.writeText(exportText);
    return true;
  } catch (error) {
    shoppingExportEl.select();
    document.execCommand('copy');
    return true;
  }
}

function openExportModal() {
  exportModalEl.classList.add('open');
}

function closeExportModal() {
  exportModalEl.classList.remove('open');
}

function openWhatsappExport() {
  const text = shoppingExportEl.value.trim();
  if (!text) return;
  const encoded = encodeURIComponent(`Giro di Pasta Einkaufsliste\n${text}`);
  window.location.href = `whatsapp://send?text=${encoded}`;
}

function exportShoppingPdf() {
  const game = getCurrentGame();
  const title = game ? game.title : 'Einkaufsliste';
  const lines = (shoppingExportEl.value || '').split('\n').filter(Boolean);
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
    body { font-family: Inter, system-ui, sans-serif; padding: 24px; color: #111; }
    h1 { font-family: 'Playfair Display', Georgia, serif; font-size: 24px; margin: 0 0 16px; }
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
  const game = getCurrentGame();
  if (!game || game.phase !== 'summary') return;

  const selectedNames = Array.from(extraRecipeSelectEl.selectedOptions).map(option => option.value).filter(Boolean);
  if (selectedNames.length === 0) return;

  const remaining = Math.max(0, 2 - (game.addedExtraRecipes || 0));
  const toAddNames = selectedNames.slice(0, remaining);
  const toAdd = (game.eligibleExtraRecipes || []).filter(recipe => toAddNames.includes(recipe.name));
  if (toAdd.length === 0) return;

  const newRounds = toAdd.map(recipe => ({ ...recipe, isJoker: false }));
  game.rounds = game.rounds.concat(newRounds);
  game.addedExtraRecipes = (game.addedExtraRecipes || 0) + newRounds.length;
  game.eligibleExtraRecipes = (game.eligibleExtraRecipes || []).filter(recipe => !toAddNames.includes(recipe.name));
  recomputeShoppingArtifacts(game);

  upsertCurrentGame(game);
  renderFromCurrentGame();
  showStatus(`${newRounds.length} Zusatzrezept(e) hinzugefügt.`);
});

startGameBtn.addEventListener('click', () => {
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

newRoundBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) return;

  game.phase = 'config';
  game.rounds = [];
  game.shoppingList = [];
  game.shoppingExport = '';
  game.eligibleExtraRecipes = [];
  game.addedExtraRecipes = 0;
  game.players = [];
  game.scores = [];
  game.gameIndex = 0;
  game.awaitingRecipeReveal = true;
  game.roundStarted = false;
  game.roundTimerEndsAt = null;
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
  if (game.scores.length !== names.length) {
    game.scores = names.map(() => 0);
  }
  game.rounds = shuffle(game.rounds);
  game.phase = 'game';
  game.gameIndex = 0;
  game.awaitingRecipeReveal = true;
  game.roundStarted = false;
  game.roundTimerEndsAt = null;
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

  game.phase = 'summary';
  upsertCurrentGame(game);
  renderFromCurrentGame();
});

scoreListEl.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const game = getCurrentGame();
  if (!game) return;
  if (!game.roundStarted) return;

  const index = parseInt(target.dataset.score || '', 10);
  const delta = parseInt(target.dataset.delta || '', 10);
  const kind = target.dataset.kind || '';

  if (Number.isNaN(index) || Number.isNaN(delta)) return;

  game.scores[index] += delta;
  if (kind === 'correct') game.roundHasCorrectTip = true;

  upsertCurrentGame(game);
  renderScoreboard(game);
});

nextRecipeBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;

  // Legacy button kept hidden; no interaction required.
});

showRecipeTopBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;
  if (!game.awaitingRecipeReveal) return;
  void tryLockPortrait();
  revealCurrentRecipe(game);
});

revealRecipeBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;
  if (!game.awaitingRecipeReveal) return;
  void tryLockPortrait();
  revealCurrentRecipe(game);
});

skipRecipeTopBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;
  if (game.awaitingRecipeReveal) return;
  skipCurrentRecipe(game);
});

skipRecipeBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;
  if (game.awaitingRecipeReveal) return;
  skipCurrentRecipe(game);
});

roundCountdownEl.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished || game.awaitingRecipeReveal) return;
  // Timer wird nur über den Start-Button gestartet.
});

startCookingBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished || game.awaitingRecipeReveal) return;
  if (game.roundStarted) return;
  startRoundCountdown(game);
  finishGameBtn.disabled = false;
  renderScoreboard(game);
  showStatus(`Timer gestartet: ${game.settings.roundMinutes || 8} Minuten.`);
});

finishGameBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game || game.finished) return;

  if (game.awaitingRecipeReveal) {
    revealCurrentRecipe(game);
    return;
  }

  if (!game.roundStarted) {
    showStatus('Starte zuerst das Kochen, dann kannst du die Runde beenden.');
    return;
  }

  finalizeRoundScore(game);
  game.gameIndex += 1;
  game.awaitingRecipeReveal = true;

  if (game.gameIndex >= game.rounds.length) {
    renderFinal(game);
  } else {
    renderRoundHandover(game);
  }
});

startAnotherGameBtn.addEventListener('click', () => {
  openNewGameLanding();
  menuEl.classList.remove('open');
});

qrToggleBtn.addEventListener('click', () => {
  const game = getCurrentGame();
  if (!game) {
    showStatus('Bitte zuerst ein Spiel öffnen oder anlegen.');
    return;
  }

  const spectatorUrl = getSpectatorUrl(game.id);
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(spectatorUrl)}`;
  qrImageEl.src = qrApiUrl;
  qrHintEl.textContent = getSyncEndpointBase()
    ? 'Live-Sync aktiv.'
    : 'Ohne Sync-Endpoint funktioniert Live nur auf demselben Gerät/Browser.';
  qrModalEl.classList.add('open');
  menuEl.classList.remove('open');
});

copySpectatorLinkBtn.addEventListener('click', async () => {
  const game = getCurrentGame();
  if (!game) return;
  const link = getSpectatorUrl(game.id);
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
  const ok = await copyShoppingToClipboard();
  if (ok) showStatus('Apple-Erinnerungen Text wurde kopiert.');
  closeExportModal();
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
      renderSpectator(event.data.game);
    }
  });
}

qrImageEl.onerror = () => {
  qrImageEl.onerror = null;
  qrImageEl.src = FALLBACK_IMAGE;
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
  renderSpectator(syncedGame || localGame);
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
