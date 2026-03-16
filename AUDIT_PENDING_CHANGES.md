# Implemented already

## Neutral handover reveal screen
- current status: implemented
- relevant file(s): `index.html`, `app.js`
- A full-screen neutral handover overlay already exists before the recipe becomes visible. It shows the next cook name and a single reveal CTA, which prevents accidental spoilers during phone handoff.
- recommended action: keep as is

## Non-interactive five-step recipe guide
- current status: implemented
- relevant file(s): `app.js`, `index.html`
- Recipe steps are rendered as plain list items via `renderRecipeSteps()`. There is no active step UI, no inline step timers, and no guess-entry form inside the cooking flow.
- recommended action: keep as is

## Compact score strip plus collapsible full scoreboard
- current status: implemented
- relevant file(s): `index.html`, `app.js`
- A compact score strip is shown at the top of Game Mode, while the detailed scoreboard lives inside a collapsible `details` block. This matches the latest direction better than a permanently expanded full scoreboard.
- recommended action: keep as is

## Shopping list aggregation
- current status: implemented
- relevant file(s): `app.js`
- Ingredient quantities are aggregated across all non-joker rounds and scaled by player count. The aggregation logic rounds amounts for practical shopping units and produces a usable list for the summary screen.
- recommended action: keep as is

## Export modal baseline
- current status: implemented
- relevant file(s): `index.html`, `app.js`
- The summary screen already supports export through clipboard, WhatsApp, PDF, and a plain text list suitable for copy/paste. `buildReminderExport()` produces a practical line-based format for Apple Reminders style lists.
- recommended action: keep as is

## Local autosave and PWA shell baseline
- current status: implemented
- relevant file(s): `app.js`, `service-worker.js`, `manifest.json`
- Games are autosaved to `localStorage` on every upsert, and a service worker caches the app shell for basic offline use. The app also registers and hot-updates the service worker during page load.
- recommended action: improve

# Partially implemented

## Cooking screen is usable but not minimal
- current status: partial
- relevant file(s): `index.html`, `app.js`
- The cook can read the recipe clearly, but the screen still contains image space, difficulty text, tip text, compact score UI, skip controls, and a finish button. It is not yet the stripped-down single-focus cooking card described by the current product direction.
- recommended action: improve

## Main button sizing is uneven
- current status: partial
- relevant file(s): `index.html`
- The reveal CTA and game action buttons are large enough for kitchen use, but many config, summary, export, and menu buttons still rely on the generic `46px` minimum height. Kitchen-critical interactions are mostly large, but the app is not consistently optimized for wet/oily hands.
- recommended action: improve

## Scoring logic is close but not exact
- current status: partial
- relevant file(s): `app.js`
- The app already supports `Richtig` as `+2`, `Falsch` as `-1`, and `cook +3` when nobody guessed correctly. It does not enforce "first correct guess only"; multiple correct taps can still award `+2`, and there is no round lock after the first correct answer.
- recommended action: improve

## Spectator mode is read-only but spoiler-heavy
- current status: partial
- relevant file(s): `index.html`, `app.js`
- Spectator mode is already separated from the main game flow and exposes no write actions, so it is effectively read-only. However, it shows the full recipe list for the game, which can spoil future rounds if the link is opened by active players.
- recommended action: improve

## Save/load stability is simple but schema-less
- current status: partial
- relevant file(s): `app.js`
- Save/load works and survived the recent flow changes, but the storage layer is just raw JSON in `localStorage` with no migration path, schema validation, or recovery flow beyond a parse fallback. That is stable enough for a prototype, but brittle for ongoing product iteration.
- recommended action: improve

## Recipe data is split across multiple sources
- current status: partial
- relevant file(s): `app.js`, `recipes.json`, `scripts/generate_recipe_images_openai.py`
- Runtime quantities, difficulty, steps, and tips live inside `app.js`, while `recipes.json` contains a separate minimal recipe list used by the external image script. The two sources use different naming/casing conventions, so the project has usable recipe data but no clean single source of truth.
- recommended action: improve

## Apple Reminders export is only clipboard based
- current status: partial
- relevant file(s): `app.js`, `index.html`
- The "Apple Erinnerungen" option currently copies the reminder-style text to the clipboard and relies on the user to paste it elsewhere. That is practical enough for now, but it is not a true share or reminders handoff.
- recommended action: improve

## Runtime image hook exists but the recipe model does not own images directly
- current status: partial
- relevant file(s): `app.js`, `assets/recipes`, `assets/app-icon.svg`
- The game already has a placeholder-based image hook and a recipe-name-to-image-id mapping, so showing recipe images is supported in the UI. The mapping is still name/alias driven rather than a first-class `image` field on each recipe, which makes the setup harder to maintain.
- recommended action: improve

# Missing

## First-correct-only enforcement
- current status: missing
- relevant file(s): `app.js`
- The current score UI does not stop scoring after the first correct guess and does not prevent multiple `+2` taps in a single round. That means the latest scoring rule is not enforced exactly in code.
- recommended action: improve

## End-of-game recipe recap
- current status: missing
- relevant file(s): `app.js`
- The final screen currently shows only ranking lines. There is no recap of which recipes were played, skipped, or revealed during the game.
- recommended action: implement later

## Optional best-dish bonus scoring
- current status: missing
- relevant file(s): `app.js`, `index.html`
- There is no support for an optional "best dish" or "best plate" bonus. No UI, state, or score application logic exists for that rule.
- recommended action: implement later

## Web Share API support
- current status: missing
- relevant file(s): `app.js`
- The app has clipboard, WhatsApp, and PDF export paths, but no `navigator.share()` integration for native mobile share sheets. That keeps export usable, but not very phone-native.
- recommended action: implement later

## Bring-friendly export format
- current status: missing
- relevant file(s): `app.js`
- There is no dedicated export variant optimized for Bring import or manual Bring copy/paste conventions. The current line-based reminder export is the closest available fallback.
- recommended action: implement later

## Single authoritative recipe schema
- current status: missing
- relevant file(s): `app.js`, `recipes.json`
- No single data source currently combines stable id, display title, ingredients, shopping quantities, steps, difficulty, tags, and optional image in one record shape. The app works anyway because the runtime data is embedded, but future maintenance and content correction will stay error-prone until this is unified.
- recommended action: implement later

# Obsolete because timer was removed

## Round timer state fields
- current status: obsolete
- relevant file(s): `app.js`
- `roundStarted` and `roundTimerEndsAt` still exist in the game object and are still reset or toggled in several flow functions. Since timer-driven game flow has been removed, these fields are dead state and should not survive into future logic.
- recommended action: remove

## Timer-shaped spectator status slot
- current status: obsolete
- relevant file(s): `index.html`, `app.js`
- Spectator mode still uses `spectatorTimerEl` and the `.spectator-timer` UI slot even though it now shows only `Live`, `Offline`, or `Ende`. The status itself may still be useful, but the timer naming and timer-shaped presentation are obsolete leftovers.
- recommended action: remove

## Unused countdown / start styling remnants
- current status: obsolete
- relevant file(s): `index.html`
- CSS classes such as `.countdown-chip`, `.countdown-chip.start-pulse`, and `.cook-start-label` remain even though the cooking timer UI is gone. They are no longer referenced by the current markup and should be cleaned out.
- recommended action: remove

## Phantom timer-era round bookkeeping
- current status: obsolete
- relevant file(s): `app.js`
- `renderRoundHandover()`, `revealCurrentRecipe()`, and `finalizeRoundScore()` still write `roundStarted` even though there is no start-cooking phase anymore. That bookkeeping comes from the removed timer flow and now only adds conceptual noise.
- recommended action: remove

# Needs manual product decision

## Spectator spoiler policy
- current status: manual decision
- relevant file(s): `app.js`, `index.html`
- The current spectator mode exposes the full recipe list, which is useful for viewers but risky for active players. Product needs to decide whether spectator mode should show all recipes, only played recipes, or just score plus current cook.
- recommended action: improve

## Final cooking card density
- current status: manual decision
- relevant file(s): `index.html`, `app.js`
- The active recipe card still shows image space, difficulty, tip text, and multiple controls. Product needs to decide whether those elements are still desired or whether the game card should be reduced to title plus steps plus minimal scoring only.
- recommended action: improve

## Canonical content for classic recipes
- current status: manual decision
- relevant file(s): `app.js`, `recipes.json`
- The targeted recipes are plausible today, but they are not canonical across all data sources. `Amatriciana`, `Puttanesca`, `Pomodoro e basilico`, `Pasta all’Assassina`, `Pistazie e limone`, and `Marinara` should be reviewed once by product/cooking owners to confirm garlic, oregano, cheese, wine, and sauce assumptions before the project treats them as final.
- recommended action: improve

## Recipe skip in final ruleset
- current status: manual decision
- relevant file(s): `index.html`, `app.js`
- `Rezept skippen` still exists during the game flow and pushes the round to the back. That may remain useful for awkward rounds, but it is a product rule decision rather than a technical necessity.
- recommended action: improve

## Best dish bonus as a real rule or not
- current status: manual decision
- relevant file(s): `app.js`, `index.html`
- There is no implementation yet, and the current code does not hint at one. Product needs to decide whether "best dish" should stay out of scope or become an explicit optional score layer.
- recommended action: implement later

# External / non-code backlog

## Leonardo AI image generation workflow
- current status: external backlog
- relevant file(s): `scripts/generate_recipe_images_openai.py`, `recipes.json`, `assets/recipes`
- The runtime already supports local image assets, but the current generation script is explicitly built around the OpenAI Images API. Per the latest direction, future image creation should move outside the app and later use Leonardo AI instead.
- recommended action: external only

## Human recipe and pantry review
- current status: external backlog
- relevant file(s): `app.js`, `recipes.json`
- Several recipes depend on pantry assumptions rather than explicitly modeled ingredients, and `recipes.json` intentionally compresses ingredients down to a small prompt set. A human cooking/product review is still needed to decide what should count as core ingredient, optional garnish, pantry staple, or sugar omission.
- recommended action: external only

## Real device kitchen QA
- current status: external backlog
- relevant file(s): `index.html`, `app.js`, `service-worker.js`
- The app clearly needs on-device testing under actual kitchen conditions: glare, distance, greasy hands, rotation behavior, and offline reopen. Those checks are product/QA work rather than something the static code audit can finish alone.
- recommended action: external only

## Cross-device live sync strategy
- current status: external backlog
- relevant file(s): `app.js`
- The code already supports an optional sync endpoint through `SYNC_ENDPOINT_KEY`, but the endpoint itself does not exist in this repository. If cross-device spectator or live game sharing matters, a hosting/storage strategy outside this app still needs to be chosen.
- recommended action: external only
