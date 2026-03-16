# Recipe Review Notes

Technical review only. No recipe content was changed in this run.

Reviewed sources:
- `/Users/eric/GitHub/App Giro di Pasta/app.js`
- `/Users/eric/GitHub/App Giro di Pasta/recipes.json`

## Cross-source observations

- `app.js` is currently the richer runtime source for cooking data: it contains quantities, difficulty, steps, tips, and image aliases.
- `recipes.json` contains a reduced recipe shape with `id`, `name`, and a short ingredient list. It is useful as a lightweight external hook, but it is too compressed to serve as a canonical cooking source.
- Several recipe names differ slightly between sources, which is manageable today only because `app.js` contains alias handling.

## Amatriciana

- Status: review needed
- Relevant files: `/Users/eric/GitHub/App Giro di Pasta/app.js`, `/Users/eric/GitHub/App Giro di Pasta/recipes.json`
- Runtime ingredients include tomato, pecorino, guanciale/pancetta, chili, garlic, and olive oil, but the step guide says white wine is an optional deglazing step even though white wine is not modeled in the ingredients.
- `recipes.json` only lists `guanciale`, `tomato`, and `pecorino`, so chili, garlic, and oil are omitted there.

## Puttanesca

- Status: review needed
- Relevant files: `/Users/eric/GitHub/App Giro di Pasta/app.js`, `/Users/eric/GitHub/App Giro di Pasta/recipes.json`
- Runtime ingredients include tomato, anchovy, capers, olives, garlic, oregano, and olive oil, but the step guide never explicitly mentions oregano even though it is in the ingredient model.
- `recipes.json` only lists `olive`, `capers`, and `anchovy`, so tomato, garlic, oregano, and oil are omitted there.

## Pomodoro e basilico

- Status: review needed
- Relevant files: `/Users/eric/GitHub/App Giro di Pasta/app.js`, `/Users/eric/GitHub/App Giro di Pasta/recipes.json`
- The guide says "Knoblauch oder Zwiebel anschwitzen", but the runtime ingredient model only includes garlic, not onion. That makes the guide slightly broader than the shopping data.
- `recipes.json` only lists `tomato` and `basil`, so garlic and olive oil are omitted there.

## Pasta all'Assassina

- Status: review needed
- Relevant files: `/Users/eric/GitHub/App Giro di Pasta/app.js`, `/Users/eric/GitHub/App Giro di Pasta/recipes.json`
- Naming is inconsistent across sources: runtime data uses `Pasta all’Assassina`, `recipes.json` uses `Pasta all Assassina`, and the internal id is `pasta_assassina`.
- The guide starts with "Passata und Wasser zu Bruehe mischen", but the runtime ingredient model only tracks tomatoes generically. If the team later wants stricter culinary accuracy, the tomato base should be defined more clearly.
- `recipes.json` omits olive oil compared with the runtime ingredient model.

## Pistazie e limone

- Status: review needed
- Relevant files: `/Users/eric/GitHub/App Giro di Pasta/app.js`, `/Users/eric/GitHub/App Giro di Pasta/recipes.json`
- The runtime ingredient model includes pistachio, lemon, olive oil, and parmigiano, but the guide frames cheese as optional. That is a small mismatch between modeled ingredients and instruction text.
- `recipes.json` only lists `pistachio` and `lemon`, so olive oil and cheese are omitted there.
- The name itself is a German/Italian hybrid, which may be intentional for the audience but is not linguistically consistent with the rest of the list.

## Marinara

- Status: review needed
- Relevant files: `/Users/eric/GitHub/App Giro di Pasta/app.js`, `/Users/eric/GitHub/App Giro di Pasta/recipes.json`
- The guide ends with "Kraeuter-Finish zugeben", but the ingredient model only names oregano as the herb component. The finishing herb is therefore a little vague in the written method.
- `recipes.json` lists `tomato`, `garlic`, and `oregano`, but omits olive oil compared with the runtime ingredient model.

## Ingredient omission note

- Status: documented
- Relevant files: `/Users/eric/GitHub/App Giro di Pasta/app.js`, `/Users/eric/GitHub/App Giro di Pasta/recipes.json`
- In the inspected savory recipes, the main omissions are tomato, oil, garlic, cheese, and herb details in `recipes.json`. There was no sugar-specific issue in this subset.
- Recommendation for later: keep `recipes.json` clearly labeled as a reduced external schema unless it is upgraded to match runtime cooking data.
