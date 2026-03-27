# Giro: Pasta Night - Game Mode Test Checklist

## A. Mit Raten
- Create a new game.
- Select `Mit Raten (empfohlen)`.
- Apply a restrictive filter combination and generate recipes.
- Verify the summary shows shopping data but not the selected recipe names.
- Verify extra recipe editing is hidden.
- Continue to player names and start the game.
- Verify the reveal screen appears before the recipe is shown.
- Verify the recipe is only visible after tapping `Rezept anzeigen`.
- Verify score controls are visible on the cooking screen.
- Verify first correct guess gives `+2` only once.
- Verify wrong guesses still give `-1`.
- Verify ending a round with no correct guess gives the cook `+3`.
- Verify spectator mode shows scores.
- Verify spectator mode does not render the hidden selected recipe sequence in advance.

## B. Ohne Raten
- Create a new game.
- Select `Ohne Raten`.
- Apply filters and generate recipes.
- Verify the summary shows the actual selected recipes.
- Verify removing a recipe works immediately.
- Verify adding recipes only shows filtered eligible options.
- Verify `✔` confirms extra recipe selection.
- Verify `✕` closes the picker without saving.
- Continue to player names and start the game.
- Verify the game opens directly into the recipe view without the reveal overlay.
- Verify no score UI appears.
- Verify score clicks do nothing.
- Verify ending rounds does not calculate points.
- Verify the final screen shows completion without a winner ranking.
- Verify spectator mode shows recipes but no scores.

## C. Persistence
- Create one game in `Mit Raten` and one in `Ohne Raten`.
- Reload the app.
- Re-open both saved games.
- Verify each game restores into the correct mode.
- Verify the competitive game still hides recipe names in summary.
- Verify the open game still shows editable recipes in summary.
- Verify an open-mode saved game still has no score UI in gameplay and spectator mode.
