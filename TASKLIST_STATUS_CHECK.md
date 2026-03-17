# Giro di Pasta – Task List Status Check

## Done
- [done] Privacy Screen beim Handy-Handover
  Reason: Ein neutraler Reveal-Screen mit `Nächster Koch:` und `Rezept anzeigen` verhindert, dass das Rezept vor dem Klick sichtbar ist.
  Files: `index.html`, `app.js`

- [done] Minimal / cleaned cooking screen
  Reason: Der Koch-Screen zeigt Titel, Schritte, kompakten Punktestand, Score-Bedienung, Skip sowie kompakte Schwierigkeit und Tipp; Timer-UI ist entfernt.
  Files: `index.html`, `app.js`

- [done] Score Strip / kompakte Score-Anzeige
  Reason: Im Kochmodus gibt es eine kompakte, aufklappbare Score-Anzeige mit Platz-1-Vorschau und detaillierter Wertung im aufgeklappten Zustand.
  Files: `index.html`, `app.js`

- [done] Autosave implementieren
  Reason: Spielzustände werden bei jedem `upsertCurrentGame()` in den Browser-Speicher geschrieben und beim Laden wiederhergestellt.
  Files: `app.js`

- [done] Service Worker
  Reason: Ein Service Worker ist vorhanden, wird beim Start registriert und bei Updates aktiv neu gezogen.
  Files: `service-worker.js`, `app.js`

- [done] App Shell Caching
  Reason: Kern-Assets wie `index.html`, `app.js`, `manifest.json` und das App-Icon werden gecacht; HTML/Skripte/Bilder haben Network-first mit Cache-Fallback.
  Files: `service-worker.js`

- [done] QR Spectator Mode
  Reason: Es gibt einen QR-Modal-Flow und einen Zuschauer-Link mit `watch`-Parameter.
  Files: `index.html`, `app.js`

- [done] Spectator UI
  Reason: Der Zuschauermodus ist vorhanden, read-only und zeigt Status, Punktestand und die sichtbare Rezeptliste.
  Files: `index.html`, `app.js`

- [done] Einkaufsliste generieren
  Reason: Zutaten werden ueber alle Nicht-Joker-Runden aggregiert, gerundet und als Einkaufsliste dargestellt.
  Files: `app.js`

- [done] Puttanesca prüfen
  Reason: Puttanesca wurde technisch geprüft und in den Review-Notizen dokumentiert; noch ohne Inhaltsänderung, wie aktuell gewünscht.
  Files: `RECIPE_REVIEW_NOTES.md`, `app.js`, `recipes.json`

- [done] Pomodoro Basilico prüfen
  Reason: Pomodoro e basilico wurde geprüft und dokumentiert; die Abweichungen zwischen Guide und Datenmodell sind notiert.
  Files: `RECIPE_REVIEW_NOTES.md`, `app.js`, `recipes.json`

## Partial
- [partial] Big Tap Targets
  Reason: Die spielkritischen Buttons sind gross genug, aber nicht alle übrigen Buttons im Projekt folgen konsequent denselben grossen Touch-Zielen.
  Files: `index.html`

- [partial] Rezept-Datenmodell strukturieren
  Reason: Es gibt brauchbare Datenquellen fuer Mengen, Guides, IDs und Bilder, aber sie sind auf `recipesData`, `recipeGuidesById` und `recipes.json` verteilt.
  Files: `app.js`, `recipes.json`

- [partial] Bring App Integration prüfen / Bring-friendly export
  Reason: Es gibt generische Exportpfade und einen zeilenbasierten Einkaufslisten-Export, aber keine Bring-spezifische Integration oder Formatierung.
  Files: `app.js`, `index.html`

- [partial] Apple Erinnerungen Export
  Reason: Ein Button ist vorhanden, aber aktuell wird nur der Erinnerungen-kompatible Text in die Zwischenablage kopiert.
  Files: `app.js`, `index.html`

- [partial] Rezepte nach Spiel bereitstellen
  Reason: Rezepte sind vor dem Spiel im Rundenplan und im Zuschauermodus sichtbar, aber es gibt keine dedizierte Nach-Spiel-Rezeptübersicht oder Abschluss-Rekap.
  Files: `index.html`, `app.js`

- [partial] Amatriciana Zwiebel klären
  Reason: Amatriciana wurde geprüft und dokumentiert, aber die konkrete Zwiebel-/Aromatenfrage ist noch nicht ausdrücklich fachlich entschieden.
  Files: `RECIPE_REVIEW_NOTES.md`, `app.js`, `recipes.json`

- [partial] Pasta all’Assassina validieren
  Reason: Es gibt Review-Notizen zu Namens- und Inhaltskonsistenz, aber noch keine abschliessende fachliche Validierung.
  Files: `RECIPE_REVIEW_NOTES.md`, `app.js`, `recipes.json`

## Not done
- [not done] IndexedDB statt localStorage
  Reason: Persistenz läuft weiterhin ausschliesslich über `localStorage`.
  Files: `app.js`

- [not done] Web Share API
  Reason: Es gibt keinen Einsatz von `navigator.share()` oder eine native Share-Sheet-Integration.
  Files: `app.js`, `index.html`

- [not done] Zusatzpunkt bestes Gericht
  Reason: Es gibt keine UI, keinen State und keine Logik fuer einen optionalen Bonuspunkt fuer das beste Gericht.
  Files: `app.js`, `index.html`

## Postponed
- [postponed] Großer Timer HUD
  Reason: Der Timer wurde bewusst aus dem Produkt entfernt und ist nicht mehr Bestandteil des aktuellen Funktionsumfangs.

- [postponed] Timer Farbwechsel
  Reason: Timer-Farbzustände sind nicht mehr relevant, weil das Timer-Feature absichtlich aus dem Produkt genommen wurde.

- [postponed] Vibration bei Timer Events
  Reason: Timer-getriebene Vibration wurde aus dem Scope entfernt, zusammen mit dem gesamten Timer-Feature.

- [postponed] Sound bei Statuswechsel
  Reason: Soundfeedback ist im aktuellen Produkt bewusst nicht vorgesehen; der vorherige timernahe Scope gilt nicht mehr.

- [postponed] Asia Edition Konzept
  Reason: Produkt-/Content-Konzeptthema; aktuell nicht als Code-Arbeit umgesetzt.

- [postponed] Zucker optional ergänzen
  Reason: Rezeptinhalte werden derzeit nur geprüft und dokumentiert, aber noch nicht geändert.
  Files: `RECIPE_REVIEW_NOTES.md`

- [postponed] Pistazie Limone anpassen
  Reason: Die Abweichungen sind dokumentiert, inhaltliche Anpassungen wurden aber bewusst noch nicht vorgenommen.
  Files: `RECIPE_REVIEW_NOTES.md`, `app.js`, `recipes.json`

- [postponed] Marinara ergänzen
  Reason: Marinara wurde fachlich notiert, aber die tatsächliche Rezept-Ergänzung ist bewusst verschoben.
  Files: `RECIPE_REVIEW_NOTES.md`, `app.js`, `recipes.json`

## External
- [external] Zutatenpartner suchen
  Reason: Business-/Partnerschaftsthema, nicht im Code implementierbar.

- [external] Rabattcode Modell
  Reason: Geschäftsmodell-/Go-to-market-Thema, nicht als aktuelle App-Funktion umgesetzt.

- [external] Commission Modell prüfen
  Reason: Business-Prüfung, nicht Teil der aktuellen Codebasis.

- [external] Rezeptbilder generieren / vorbereiten (extern via Leonardo AI)
  Reason: Die App hat Bild-Hooks und Asset-Referenzen, aber die eigentliche Bildgenerierung ist laut Produktentscheidung extern vorgesehen.
  Files: `app.js`, `assets/recipes`, `recipes.json`

| Status | Count |
|---|---|
| done | 11 |
| partial | 7 |
| not done | 3 |
| postponed | 8 |
| external | 4 |

## Recommended Next Priorities
1. Rezept-Datenmodell strukturieren, damit Runtime-Daten, Review und Bild-/Export-Hooks nicht weiter auseinanderlaufen.
2. Big Tap Targets vereinheitlichen, damit der gesamte Spiel- und Export-Flow auf Mobilgeräten gleich robust bedienbar bleibt.
3. Rezepte nach Spiel bereitstellen, damit nach dem Spiel ein sauberer Rezept-Rückblick fehlt.
4. Web Share API ergänzen, um Shopping-/Share-Flows auf dem Handy nativer zu machen.
5. Bring-friendly Export und Apple-Erinnerungen-Export härten, damit die Einkaufsliste auf Mobilgeräten praktischer weiterverwendet werden kann.
