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

const PDF_DEFAULT_STEPS = [
  '1. [MITTEL] Basis anroesten [30-60 s]',
  '2. Hauptzutat zugeben',
  '3. Sauce oder Basis aufbauen',
  '4. Pasta in Pfanne schwenken',
  '5. Mit Nudelwasser cremig ziehen',
  'Tipp: Hitze kontrollieren fuer perfekte Emulsion'
];

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

const cardImagePool = [
  'assets/cards/extract_429.jpg',
  'assets/cards/extract_430.jpg',
  'assets/cards/extract_464.jpg',
  'assets/cards/extract_465.jpg',
  'assets/cards/extract_498.jpg',
  'assets/cards/extract_499.jpg',
  'assets/cards/extract_532.jpg',
  'assets/cards/extract_533.jpg',
  'assets/cards/extract_568.jpg',
  'assets/cards/extract_569.jpg'
];

// Hinweis: Bitte die Datei "assets/fallback.png" anlegen, damit Bild-Fallbacks sichtbar sind.
const FALLBACK_IMAGE = 'assets/fallback.png';

function getCardImageForRecipe(recipeName) {
  if (!recipeName || cardImagePool.length === 0) return '';
  let hash = 0;
  for (let i = 0; i < recipeName.length; i++) {
    hash = ((hash << 5) - hash) + recipeName.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % cardImagePool.length;
  return cardImagePool[index];
}

function setRecipeIllustrationWithFallback(imagePath) {
  if (!imagePath) {
    ingredientIllustrationEl.style.backgroundImage = 'none';
    return;
  }

  const probe = new Image();
  probe.onload = () => {
    ingredientIllustrationEl.style.backgroundImage = `url('${imagePath}')`;
  };
  probe.onerror = () => {
    ingredientIllustrationEl.style.backgroundImage = `url('${FALLBACK_IMAGE}')`;
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

function getRecipeSteps(recipe) {
  if (recipe.isJoker) {
    return [
      'Ihr entscheidet als Gruppe frei, welches Rezept ihr jetzt kocht.',
      'Nehmt verfuegbare Zutaten oder Reste aus der Einkaufsliste.',
      'Kochzeit selbst festlegen und nach Geschmack anpassen.',
      'Am Ende wird normal geraten und gepunktet.'
    ];
  }
  return PDF_DEFAULT_STEPS;
}

function formatCountdown(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function parseStepDuration(stepText) {
  const match = stepText.match(/\[(\d+)(?:\s*-\s*(\d+))?\s*(s|sec|min|m)\]/i);
  if (!match) return null;
  const first = parseInt(match[1], 10);
  const second = match[2] ? parseInt(match[2], 10) : null;
  const unit = (match[3] || '').toLowerCase();
  const rawValue = second || first;
  const seconds = unit.startsWith('m') ? rawValue * 60 : rawValue;
  return {
    fullMatch: match[0],
    valueText: second ? String(second) : String(first),
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
    row.className = 'game-row';

    const loadBtn = document.createElement('button');
    loadBtn.className = 'game-load';
    loadBtn.dataset.gameId = game.id;
    loadBtn.textContent = formatGameLabel(game);
    if (game.id === currentGameId) {
      loadBtn.style.borderColor = '#b7ac9a';
      loadBtn.style.background = '#fffaf1';
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'game-delete';
    deleteBtn.dataset.deleteId = game.id;
    deleteBtn.textContent = '✕';
    deleteBtn.title = 'Spiel löschen';

    row.appendChild(loadBtn);
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

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'game-delete';
    deleteBtn.dataset.landingDeleteId = game.id;
    deleteBtn.textContent = '✕';
    deleteBtn.title = 'Spiel löschen';

    row.appendChild(button);
    row.appendChild(deleteBtn);
    landingGameListEl.appendChild(row);
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
        <button data-score="${index}" data-delta="-1" data-kind="wrong" title="Falscher Tipp" ${scoringLocked ? 'disabled' : ''}>-1</button>
        <button data-score="${index}" data-delta="2" data-kind="correct" title="Richtiger Tipp" ${scoringLocked ? 'disabled' : ''}>+2</button>
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
}

function clearInlineTimers() {
  inlineTimerIntervals.forEach(intervalId => clearInterval(intervalId));
  inlineTimerIntervals.clear();
}

function renderStepsWithTimers(steps) {
  clearInlineTimers();
  stepListEl.innerHTML = '';

  steps
    .filter(step => !step.toLowerCase().startsWith('tipp:'))
    .forEach(step => {
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

function updateRoundCountdownUi(remainingSeconds) {
  roundCountdownEl.classList.remove('hidden');
  roundCountdownValueEl.textContent = formatCountdown(remainingSeconds);
}

function startRoundCountdown(game) {
  stopRoundCountdown();
  const roundMinutes = Math.max(1, parseInt(game.settings.roundMinutes || 8, 10));
  const durationSeconds = roundMinutes * 60;
  game.roundTimerEndsAt = Date.now() + durationSeconds * 1000;
  game.roundStarted = true;
  startCookingBtn.classList.add('hidden');
  updateRoundCountdownUi(durationSeconds);
  const playerName = game.players[game.activePlayerTurnIndex];
  handoverInfoEl.textContent = `${playerName} kocht jetzt`;
  upsertCurrentGame(game);

  roundCountdownIntervalId = setInterval(() => {
    const remaining = Math.ceil((game.roundTimerEndsAt - Date.now()) / 1000);
    if (remaining <= 0) {
      updateRoundCountdownUi(0);
      stopRoundCountdown();
      return;
    }
    updateRoundCountdownUi(remaining);
  }, 1000);
}

function resumeRoundCountdown(game) {
  stopRoundCountdown();
  if (!game.roundStarted || !game.roundTimerEndsAt) {
    roundCountdownEl.classList.add('hidden');
    return;
  }

  const initial = Math.ceil((game.roundTimerEndsAt - Date.now()) / 1000);
  if (initial <= 0) {
    updateRoundCountdownUi(0);
    return;
  }

  updateRoundCountdownUi(initial);
  roundCountdownIntervalId = setInterval(() => {
    const remaining = Math.ceil((game.roundTimerEndsAt - Date.now()) / 1000);
    if (remaining <= 0) {
      updateRoundCountdownUi(0);
      stopRoundCountdown();
      return;
    }
    updateRoundCountdownUi(remaining);
  }, 1000);
}

function setGameSubView(mode) {
  const isHandover = mode === 'handover';
  handoverActionsEl.classList.toggle('hidden', !isHandover);
  ingredientIllustrationEl.classList.toggle('hidden', isHandover);
  difficultyIndicatorEl.classList.toggle('hidden', isHandover);
  tipTextEl.classList.toggle('hidden', isHandover);
  nextRecipeBtn.classList.add('hidden');
  skipRecipeBtn.classList.toggle('hidden', isHandover);
  finishGameBtn.classList.toggle('hidden', isHandover);
  startCookingBtn.classList.toggle('hidden', isHandover);
  if (isHandover) {
    scoreSectionEl.open = false;
    roundCountdownEl.classList.add('hidden');
    stopRoundCountdown();
    clearInlineTimers();
  } else {
    scoreSectionEl.open = true;
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
  setGameSubView('handover');
  skipRecipeTopBtn.classList.add('hidden');

  const currentName = game.players[game.activePlayerTurnIndex];
  handoverInfoEl.textContent = `${currentName} ist dran`;
  recipeTitleEl.textContent = `${currentName} ist dran`;
  recipeMetaEl.textContent = `Runde ${game.gameIndex + 1} von ${game.rounds.length}`;
  difficultyIndicatorEl.textContent = 'Schwierigkeit ●●○';
  tipTextEl.textContent = 'Tipp: Rezeptkarte wird nach der Übergabe angezeigt.';
  stepListEl.innerHTML = '<li>Wenn das Handy uebergeben wurde, druecke auf "Rezept anzeigen".</li>';
  ingredientIllustrationEl.style.borderLeft = '4px solid #c8b9a5';
  recipeTitleEl.style.borderBottomColor = '#cabaa2';
  ingredientIllustrationEl.style.backgroundImage = 'none';

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
  const round = game.rounds[game.gameIndex];
  const playerName = game.players[game.activePlayerTurnIndex];
  setGameSubView('recipe');
  skipRecipeTopBtn.classList.add('hidden');

  handoverInfoEl.textContent = game.roundStarted ? `${playerName} kocht jetzt` : `${playerName} ist dran`;
  recipeTitleEl.textContent = round.name;
  recipeMetaEl.textContent = `Runde ${game.gameIndex + 1} von ${game.rounds.length}${round.isJoker ? ' - Joker' : ''}`;
  const tags = classifyRecipe(round);
  const accent = tags.isMeat ? '#C0392B' : (tags.isAnimalProduct ? '#F4B400' : '#3A7D44');
  ingredientIllustrationEl.style.borderLeft = `4px solid ${accent}`;
  recipeTitleEl.style.borderBottomColor = accent;
  difficultyIndicatorEl.textContent = 'Schwierigkeit ●●○';
  const recipeImage = getCardImageForRecipe(round.name);
  setRecipeIllustrationWithFallback(recipeImage);

  const steps = getRecipeSteps(round);
  const tipLine = steps.find(step => step.toLowerCase().startsWith('tipp:')) || 'Tipp: Mit ruhiger Hitze arbeiten.';
  tipTextEl.textContent = tipLine;
  renderStepsWithTimers(steps);

  game.awaitingRecipeReveal = false;
  finishGameBtn.textContent = 'Runde beenden';
  startCookingBtn.classList.toggle('hidden', game.roundStarted);
  const roundIsRunning = !!game.roundStarted;
  finishGameBtn.disabled = !roundIsRunning;
  resumeRoundCountdown(game);
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
  handoverInfoEl.textContent = 'Spiel beendet.';
  recipeTitleEl.textContent = 'Endstand';
  recipeMetaEl.textContent = `${game.title}`;
  difficultyIndicatorEl.textContent = 'Schwierigkeit ●●○';
  tipTextEl.textContent = 'Tipp: Neues Spiel starten oder gespeichertes Spiel laden.';
  stopRoundCountdown();
  clearInlineTimers();
  ingredientIllustrationEl.style.borderLeft = '4px solid #c8b9a5';
  recipeTitleEl.style.borderBottomColor = '#cabaa2';
  ingredientIllustrationEl.style.backgroundImage = 'none';
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
  startCookingBtn.classList.add('hidden');
  startAnotherGameBtn.classList.remove('hidden');
  upsertCurrentGame(game);
}

function renderSpectator(game) {
  hideAllSections();
  spectatorSection.classList.remove('hidden');
  spectatorScoreListEl.innerHTML = '';
  spectatorRecipeListEl.innerHTML = '';

  if (!game) {
    const li = document.createElement('li');
    li.textContent = 'Kein Spiel gefunden.';
    spectatorScoreListEl.appendChild(li);
    return;
  }

  (game.players || []).forEach((name, idx) => {
    const li = document.createElement('li');
    const points = game.scores?.[idx] ?? 0;
    li.textContent = `${name}: ${points} Pkt`;
    spectatorScoreListEl.appendChild(li);
  });

  (game.rounds || [])
    .filter(round => !round.isJoker)
    .forEach((round, idx) => {
      const li = document.createElement('li');
      li.textContent = `${idx + 1}. ${round.name}`;
      spectatorRecipeListEl.appendChild(li);
    });
}

function renderFromCurrentGame() {
  if (spectatorMode) return;
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
const startCookingBtn = document.getElementById('startCooking');
const nextRecipeBtn = document.getElementById('nextRecipe');
const skipRecipeBtn = document.getElementById('skipRecipe');
const finishGameBtn = document.getElementById('finishGame');
const startAnotherGameBtn = document.getElementById('startAnotherGame');

const spectatorSection = document.getElementById('spectator');
const spectatorScoreListEl = document.getElementById('spectatorScoreList');
const spectatorRecipeListEl = document.getElementById('spectatorRecipeList');

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
    showStatus(`Es gibt nur ${eligibleRecipes.length} passende Rezepte. Geplant: ${realRecipeCount} Rezepte + ${jokerRecipes} Joker (20%). Katalog: ${catalogCheck.supplementalCount} ergänzte Rezepte, ${catalogCheck.missingFromPdfCount} ohne PDF-Match.`);
  } else {
    showStatus(`${totalRounds} Runden erstellt: ${realRecipeCount} Rezepte + ${jokerRecipes} Joker (20%). Zeit pro Rezept: ${roundMinutes} min. 6 Runden = 150 g pro Person. Katalog: ${catalogCheck.supplementalCount} ergänzte Rezepte, ${catalogCheck.missingFromPdfCount} ohne PDF-Match.`);
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

const scoreTracker = [];

function addPlayer(name) {
  if (!name || !name.trim()) return;
  scoreTracker.push({ name: name.trim(), points: 0 });
  renderScoreTracker();
}

function addPoints(player, points) {
  const entry = scoreTracker.find(item => item.name === player);
  if (!entry) return;
  entry.points += points;
  renderScoreTracker();
}

function getScores() {
  return scoreTracker.slice();
}

const recipes = [
"Spaghetti Aglio e Olio",
"Pesto Pasta",
"Tomato Basil Pasta",
"Garlic Chili Pasta",
"Olive Lemon Pasta"
];

function drawRecipe() {
  const index = Math.floor(Math.random() * recipes.length);
  return recipes[index];
}

const scorePlayerNameEl = document.getElementById('scorePlayerName');
const scoreAddPlayerBtn = document.getElementById('scoreAddPlayer');
const scoreTrackerListEl = document.getElementById('scoreTrackerList');
const timerStart5MinBtn = document.getElementById('timerStart5Min');
const timerDisplayEl = document.getElementById('timerDisplay');
const drawRecipeBtnEl = document.getElementById('drawRecipeBtn');
const selectedRecipeEl = document.getElementById('selectedRecipe');

let timerInterval5Min = null;
let timerSeconds5Min = 300;

function renderScoreTracker() {
  if (!scoreTrackerListEl) return;
  scoreTrackerListEl.innerHTML = '';
  scoreTracker.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.name}: ${entry.points}`;
    scoreTrackerListEl.appendChild(li);
  });
}

function renderTimerDisplay() {
  if (!timerDisplayEl) return;
  const minutes = Math.floor(timerSeconds5Min / 60);
  const seconds = timerSeconds5Min % 60;
  timerDisplayEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

if (scoreAddPlayerBtn) {
  scoreAddPlayerBtn.addEventListener('click', () => {
    addPlayer(scorePlayerNameEl ? scorePlayerNameEl.value : '');
    if (scorePlayerNameEl) scorePlayerNameEl.value = '';
  });
}

if (timerStart5MinBtn) {
  timerStart5MinBtn.addEventListener('click', () => {
    if (timerInterval5Min) clearInterval(timerInterval5Min);
    timerSeconds5Min = 300;
    renderTimerDisplay();
    timerInterval5Min = setInterval(() => {
      timerSeconds5Min -= 1;
      renderTimerDisplay();
      if (timerSeconds5Min <= 0) {
        clearInterval(timerInterval5Min);
        timerInterval5Min = null;
        alert("Time is up!");
      }
    }, 1000);
  });
}

if (drawRecipeBtnEl) {
  drawRecipeBtnEl.addEventListener('click', () => {
    const recipe = drawRecipe();
    if (selectedRecipeEl) selectedRecipeEl.textContent = `Selected recipe: ${recipe}`;
  });
}

renderTimerDisplay();
renderScoreTracker();
