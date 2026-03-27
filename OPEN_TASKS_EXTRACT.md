# Giro: Pasta Night – Remaining Development Tasks

## Not Done (Critical)
- IndexedDB statt localStorage
  - Short description: Persistenz läuft weiterhin ausschliesslich über `localStorage`.
  - Files affected: `app.js`

- Web Share API
  - Short description: Es gibt keinen Einsatz von `navigator.share()` oder eine native Share-Sheet-Integration.
  - Files affected: `app.js`, `index.html`

- Zusatzpunkt bestes Gericht
  - Short description: Es gibt keine UI, keinen State und keine Logik fuer einen optionalen Bonuspunkt fuer das beste Gericht.
  - Files affected: `app.js`, `index.html`

## Partial (Needs Review)
- Big Tap Targets
  - Implemented: Die spielkritischen Buttons sind gross genug.
  - Still missing: Nicht alle übrigen Buttons im Projekt folgen konsequent denselben grossen Touch-Zielen.
  - Files affected: `index.html`

- Rezept-Datenmodell strukturieren
  - Implemented: Es gibt brauchbare Datenquellen fuer Mengen, Guides, IDs und Bilder.
  - Still missing: Die Daten sind noch auf `recipesData`, `recipeGuidesById` und `recipes.json` verteilt.
  - Files affected: `app.js`, `recipes.json`

- Bring App Integration prüfen / Bring-friendly export
  - Implemented: Es gibt generische Exportpfade und einen zeilenbasierten Einkaufslisten-Export.
  - Still missing: Es gibt keine Bring-spezifische Integration oder Formatierung.
  - Files affected: `app.js`, `index.html`

- Apple Erinnerungen Export
  - Implemented: Ein Button ist vorhanden.
  - Still missing: Aktuell wird nur der Erinnerungen-kompatible Text in die Zwischenablage kopiert.
  - Files affected: `app.js`, `index.html`

- Rezepte nach Spiel bereitstellen
  - Implemented: Rezepte sind vor dem Spiel im Rundenplan und im Zuschauermodus sichtbar.
  - Still missing: Es gibt keine dedizierte Nach-Spiel-Rezeptübersicht oder Abschluss-Rekap.
  - Files affected: `index.html`, `app.js`

- Amatriciana Zwiebel klären
  - Implemented: Amatriciana wurde geprüft und dokumentiert.
  - Still missing: Die konkrete Zwiebel-/Aromatenfrage ist noch nicht ausdrücklich fachlich entschieden.
  - Files affected: `RECIPE_REVIEW_NOTES.md`, `app.js`, `recipes.json`

- Pasta all’Assassina validieren
  - Implemented: Es gibt Review-Notizen zu Namens- und Inhaltskonsistenz.
  - Still missing: Es gibt noch keine abschliessende fachliche Validierung.
  - Files affected: `RECIPE_REVIEW_NOTES.md`, `app.js`, `recipes.json`

| Category | Count |
|---|---|
| Not done | 3 |
| Partial | 7 |
