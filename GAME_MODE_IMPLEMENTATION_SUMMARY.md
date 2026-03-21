# Giro di Pasta - Game Mode Implementation Summary

## Changed files
- `/Users/eric/GitHub/App Giro di Pasta/app.js`
- `/Users/eric/GitHub/App Giro di Pasta/index.html`
- `/Users/eric/GitHub/App Giro di Pasta/GAME_MODE_IMPLEMENTATION_SUMMARY.md`
- `/Users/eric/GitHub/App Giro di Pasta/GAME_MODE_TEST_CHECKLIST.md`

## Central game mode state
- The app now stores the mode as a top-level saved game field: `game.gameMode`.
- The two allowed values are:
  - `guessing`
  - `open`
- Missing or legacy values normalize to `guessing` so older saved games stay compatible.
- Mode normalization runs on load and before save/update, so persisted games restore into the correct behavior.

## Config screen changes
- A new `Spielmodus` selector was added below `Rezepte pro Spiel`.
- The default mode is `Mit Raten (empfohlen)`.
- The selector uses two explicit radio options:
  - `Mit Raten (empfohlen)` -> `guessing`
  - `Ohne Raten` -> `open`

## Mit Raten (`guessing`)
- Filtered recipes are still generated from the selected food rules.
- The concrete selected recipe plan is kept hidden in the summary/planning phase.
- The summary now shows only neutral selection info plus the shopping list.
- Recipe editing and extra recipe picking are disabled in this mode.
- The reveal / handover screen stays active.
- Score UI and score controls remain active only in this mode.
- Endgame ranking still uses points only in this mode.
- Spectator mode keeps score visibility and shows the filtered recipe pool instead of exposing the hidden selected plan.

## Ohne Raten (`open`)
- Filtered recipes are generated from the same selected food rules.
- The selected recipe list stays visible in the summary/planning phase.
- Recipe removal stays enabled.
- Adding more recipes stays enabled, but only from the already filtered eligible pool.
- The existing modal confirm/cancel behavior remains:
  - top left `✔` confirms
  - top right `✕` cancels
- Gameplay opens directly into the recipe view without the secret reveal step.
- No score UI is shown.
- No score clicks are accepted.
- No cook bonus or ranking logic runs.
- Final screen shows the cooked recipe sequence instead of a winner ranking.
- Spectator mode shows recipes only and hides score sections cleanly.

## How score logic is disabled in open mode
- `game.scores` is cleared for open-mode games.
- Open-mode games normalize `roundHasCorrectTip` back to `false`.
- Score rendering returns early and hides the score section.
- Score click handling returns immediately in open mode.
- Automatic cook bonus (`+3`) is skipped in open mode.
- Endgame ranking is skipped in open mode.

## How recipe visibility is protected in competitive mode
- The summary screen renders only a neutral count message instead of the selected recipe names.
- Extra recipe editing UI is hidden in competitive mode.
- Competitive gameplay still uses the reveal / handover screen before recipe visibility.
- Spectator mode keeps showing the filtered pool rather than the hidden selected sequence.

## Spectator behavior by mode
- `guessing`
  - score panel visible
  - filtered allowed recipe pool visible
  - no selected hidden plan rendered into spectator UI
- `open`
  - score panel hidden
  - selected recipes / actual planned rounds visible

## Persistence behavior
- `gameMode` is saved with the game object in local storage.
- Reloading the app restores the correct mode-specific UI and behavior.
- Legacy saved games without `gameMode` default to `guessing`.

## Validation completed
- JavaScript syntax check: `node --check /Users/eric/GitHub/App Giro di Pasta/app.js`
- Static verification of mode-specific rendering and persisted state helpers.
- A real browser smoke test was attempted, but the local Playwright browser runtime was not available in this environment.

## Remaining risks / follow-up items
- Browser-level regression testing for both modes should still be done on a real device or installed local browser runtime.
- Open mode still keeps the existing Joker round concept if it is part of the generated round set; that behavior was preserved intentionally.
- Saved games created before this change default to `guessing`, which is the safe competitive fallback.
