from __future__ import annotations

import json
import re
from datetime import date
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path('/Users/eric/GitHub/App Giro di Pasta')
OUT = ROOT / 'tmp' / 'generated_docs'
OUT.mkdir(parents=True, exist_ok=True)
TODAY = date(2026, 3, 21)


def parse_pdf_recipe_names() -> list[str]:
    app_js = (ROOT / 'app.js').read_text(encoding='utf-8')
    match = re.search(r"const pdfRecipeNames = \[(.*?)\];", app_js, re.S)
    if not match:
        raise RuntimeError('Could not find pdfRecipeNames in app.js')
    return re.findall(r"'([^']+)'", match.group(1))


def count_recipe_images() -> int:
    return len(list((ROOT / 'assets' / 'recipes').glob('*.png')))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(colors.HexColor('#6f6355'))
    canvas.drawRightString(doc.pagesize[0] - 18 * mm, 10 * mm, f'Stand {TODAY.isoformat()} - Seite {doc.page}')
    canvas.restoreState()


styles = getSampleStyleSheet()
TITLE = ParagraphStyle(
    'TitleCustom',
    parent=styles['Title'],
    fontName='Helvetica-Bold',
    fontSize=18,
    leading=22,
    textColor=colors.HexColor('#231b12'),
    alignment=TA_CENTER,
    spaceAfter=10,
)
SUBTITLE = ParagraphStyle(
    'SubtitleCustom',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=13,
    leading=16,
    textColor=colors.HexColor('#6f3000'),
    spaceBefore=6,
    spaceAfter=6,
)
BODY = ParagraphStyle(
    'BodyCustom',
    parent=styles['BodyText'],
    fontName='Helvetica',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#2c241d'),
    spaceAfter=5,
)
SMALL = ParagraphStyle(
    'SmallCustom',
    parent=BODY,
    fontSize=9,
    leading=12,
    textColor=colors.HexColor('#5f564d'),
)


def p(text: str, style=BODY):
    return Paragraph(text.replace('&', '&amp;'), style)


def bullet_lines(items: list[str], style=BODY):
    parts = []
    for item in items:
        parts.append(p(f'- {item}', style))
    return parts


def build_pdf(path: Path, story: list):
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=16 * mm,
        title=path.stem,
        author='Codex for Giro di Pasta',
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    reader = PdfReader(str(path))
    if len(reader.pages) == 0:
        raise RuntimeError(f'{path.name} has no pages')


def build_architecture_pdf(recipes: list[str], image_count: int):
    path = OUT / 'App_Architektur_v1.2.pdf'
    story = [
        p('GIRO DI PASTA - App Architektur v1.2', TITLE),
        p('Diese Version ersetzt die timerbasierte Beschreibung aus v1.1 und bildet den aktuellen Stand der Web-App ab.', SMALL),
        Spacer(1, 6),
        p('Technische Basis', SUBTITLE),
        *bullet_lines([
            'Single-page Web-App mit HTML, CSS und Vanilla JavaScript.',
            'Zentrale UI-Dateien: index.html und app.js.',
            'Gespeicherte Spiele bleiben in localStorage; keine Serverpflicht fuer den normalen Spielbetrieb.',
            'manifest.json und service-worker.js bilden die PWA- und Offline-Basis.',
        ]),
        p('Zentraler Spielzustand', SUBTITLE),
        *bullet_lines([
            'Jedes Spiel besitzt u. a. id, title, phase, gameMode, settings, rounds, players, gameIndex, activePlayerTurnIndex, scores, shoppingList und finished.',
            "gameMode ist ein First-class-State mit den Werten 'guessing' oder 'open'.",
            'Alte Savegames werden beim Laden normalisiert; entfernte Rezepte werden bereinigt und die Einkaufsliste neu berechnet.',
        ]),
        p('Hauptfluss der App', SUBTITLE),
        *bullet_lines([
            'Landing / Spielverwaltung',
            'Konfiguration mit Spielerzahl, Rezepte pro Spiel, Spielmodus und Lebensmittel-Filtern',
            'Summary / Planung mit Einkaufsliste',
            'Spieler-Setup',
            'Game Screen mit reveal / recipe view je nach Modus',
            'Abschlussscreen mit Rangliste oder Rezeptuebersicht',
        ]),
        p('Zwei sauber getrennte Spielmodi', SUBTITLE),
        *bullet_lines([
            'Mit Raten (empfohlen): Rezeptplan bleibt in der Summary verborgen, Reveal-Screen schuetzt vor Spoilern, Punkte und Rangliste sind aktiv.',
            'Ohne Raten: Rezeptplan ist in der Summary sichtbar und editierbar, Score-Logik bleibt komplett aus, das Spiel laeuft offen durch.',
            'Die Filterlogik fuer Fleisch, Fisch, tierische Produkte und Scharf gilt in beiden Modi identisch vor der Rezeptauswahl.',
        ]),
        PageBreak(),
        p('Rezept- und Planungslogik', SUBTITLE),
        *bullet_lines([
            'Aktiver Rezeptkatalog: 39 Saucen aus dem aktuellen V2.0-Stand; Joker-Runden werden separat erzeugt.',
            'Pro Spiel werden ca. 20 Prozent Joker-Runden eingestreut, der Rest kommt aus dem gefilterten Rezeptpool.',
            'Im offenen Modus koennen vorgeschlagene Rezepte entfernt und bis zu zwei weitere passende Rezepte aus dem verbleibenden Filterpool hinzugefuegt werden.',
            'Die Einkaufsliste aggregiert alle Nicht-Joker-Runden auf Basis von ca. 25 g Pasta pro Person pro Runde.',
        ]),
        p('Score- und Reveal-Logik', SUBTITLE),
        *bullet_lines([
            'Punkte gelten nur im Modus Mit Raten.',
            'Erster richtiger Tipp: +2, jeder falsche Tipp: -1.',
            'Wenn niemand richtig liegt, bekommt der Koch +3; bei mindestens einem richtigen Tipp gibt es fuer den Koch 0 Punkte.',
            'Waehrend des Kochens bleiben Score-Anzeige und Score-Bedienung sichtbar.',
        ]),
        p('Spectator, Export und PWA', SUBTITLE),
        *bullet_lines([
            'Spectator-Ansicht ist read-only und wird per QR-Link mit watch-Parameter geoeffnet.',
            'Mit Raten zeigt der Spectator Scores plus den gesamten verfuegbaren Rezeptkatalog; Ohne Raten zeigt er nur die wirklich gespielten Rezepte und markiert das aktuelle Rezept.',
            'Einkaufsliste kann per Clipboard, Apple-Erinnerungen-kompatiblem Text, WhatsApp-Deep-Link und Druck / PDF weitergegeben werden.',
            'Der Service Worker cached App Shell, Skripte, Manifest, Fonts und Bilder mit Network-first plus Cache-Fallback.',
        ]),
        p('Rezeptbilder', SUBTITLE),
        *bullet_lines([
            f'Der Bild-Slot sitzt unter dem Gerichtsnamen; aktuell liegen {image_count} PNG-Rezeptbilder im Projekt.',
            'Die eigentliche Bildgenerierung findet weiterhin extern statt; die App erwartet passende PNG-Dateinamen im Ordner assets/recipes.',
        ]),
        p('Bewusst nicht im Scope', SUBTITLE),
        *bullet_lines([
            'Kein Timer, keine Countdown-Logik, keine Timer-Sounds und keine timergetriebene Haptik.',
            'Kein Framework, kein serverseitiger Pflicht-Backend-Flow und weiterhin keine IndexedDB-Migration.',
            'Keine native Web-Share-Integration; Sharing laeuft derzeit ueber Clipboard, WhatsApp-Link und Druck / PDF.',
        ]),
        p(f'Aktive Rezeptanzahl ohne Joker: {len(recipes)}', SMALL),
    ]
    build_pdf(path, story)


def build_concept_pdf(image_count: int):
    path = OUT / 'App_Konzept_v1.2.pdf'
    story = [
        p('GIRO DI PASTA - App Konzept v1.2', TITLE),
        p('Diese Fassung beschreibt das aktuelle Produkt ohne Timer und mit zwei klar getrennten Spielmodi.', SMALL),
        Spacer(1, 6),
        p('Grundidee', SUBTITLE),
        *bullet_lines([
            'Giro di Pasta ist ein gemeinsames Kochspiel fuer den Tisch: Das Smartphone ersetzt Rezeptkarten, Shoppingzettel und Teile der Spielleitung.',
            'Der Koch liest nur die Schritte. Geraten wird muendlich zwischen den Mitspielern, nicht in der App.',
            'Die App soll auch mit fettigen oder nassen Haenden bedienbar bleiben: grosse Buttons, klare Ueberschriften, wenig visuelle Ablenkung.',
        ]),
        p('Konfiguration', SUBTITLE),
        *bullet_lines([
            'Spieler- bzw. Gruppenanzahl (bis 6 spielende Parteien).',
            'Rezepte pro Spiel mit dem Hinweis auf ca. 25 g Pasta pro Person pro Runde.',
            'Spielmodus-Auswahl: Mit Raten (empfohlen) oder Ohne Raten.',
            'Filter fuer Fleisch, Fisch, tierische Produkte und Scharf.',
        ]),
        p('Spielmodus 1 - Mit Raten (empfohlen)', SUBTITLE),
        *bullet_lines([
            'Die App waehlt passende Rezepte intern aus, ohne sie in der Summary preiszugeben.',
            'Vor jeder Runde schuetzt ein neutraler Handover-Screen den geheimen Rezeptnamen.',
            'Das Rezept wird erst nach Tipp auf Rezept anzeigen sichtbar.',
            'Punkte, Rangliste und Gewinnerlogik sind nur hier aktiv.',
        ]),
        p('Spielmodus 2 - Ohne Raten', SUBTITLE),
        *bullet_lines([
            'Die App zeigt den vorgeschlagenen Rezeptplan offen in der Summary.',
            'Der Organisator kann Rezepte loeschen und aus dem noch erlaubten Filterpool passende Zusatzrezepte bestaetigt hinzufuegen.',
            'Es gibt keine Punkte, keine Rangliste und keinen Wettbewerbsvorteil ueber Guessing.',
            'Der Kochfluss bleibt offen; der Spectator dient hier nur als Rezeptuebersicht.',
        ]),
        PageBreak(),
        p('Summary, Einkauf und Export', SUBTITLE),
        *bullet_lines([
            'Die Summary verbindet Einkaufsliste und Modus-spezifische Planung.',
            'Mit Raten zeigt sie nur die Einkaufsliste und eine neutrale Info ueber die Anzahl der ausgewaehlten Rezepte.',
            'Ohne Raten zeigt sie den konkreten Rezeptplan inklusive Entfernen-Buttons und dem Picker fuer Zusatzrezepte.',
            'Exportwege: Clipboard, Apple-Erinnerungen-kompatibler Text, WhatsApp und Druck / PDF.',
        ]),
        p('Gameplay UX', SUBTITLE),
        *bullet_lines([
            'Reveal-Screen fuer geheimen Handy-Handover im Wettbewerbsmodus.',
            'Kochscreen mit Gerichtstitel, Schrittliste, kompakter Score-Anzeige, Skip-Button sowie kompakter Schwierigkeit und Tipp.',
            'Haptisches Feedback auf Neue Spiele, Rezept anzeigen, Rezept skippen und Bestaetigen.',
            'Aktuelle Rezeptbilder werden unter dem Titel gezeigt, sobald passende PNG-Assets vorliegen.',
        ]),
        p('Zuschauermodus', SUBTITLE),
        *bullet_lines([
            'Startet ueber QR-Code oder direkten Watch-Link.',
            'Mit Raten: Punkte plus kompletter verfuegbarer Rezeptkatalog fuer die Ratenden.',
            'Ohne Raten: nur die wirklich gespielten Rezepte; das aktuelle Rezept wird markiert.',
            'Der Spectator bleibt read-only und kann keine Spielaktionen ausloesen.',
        ]),
        p('Produktgrenzen im aktuellen Stand', SUBTITLE),
        *bullet_lines([
            'Kein Timer, keine Audio-Signale und keine Timer-Farbwechsel.',
            'Kein nativer Web Share Flow und noch keine IndexedDB-Migration.',
            f'Rezeptbilder sind technisch vorbereitet; derzeit sind {image_count} Bilder eingebunden, die Bildgenerierung bleibt extern.',
        ]),
    ]
    build_pdf(path, story)


def build_architecture_card_pdf():
    path = OUT / 'Architekturkarte v1.1.pdf'
    story = [
        p('GIRO DI PASTA - Architekturkarte v1.1', TITLE),
        p('Kompakte Uebersicht des aktuellen App-Flows', SMALL),
        Spacer(1, 6),
    ]

    data = [
        ['1. Landing', 'Spiel anlegen, laden oder loeschen'],
        ['2. Konfiguration', 'Spielerzahl, Rezepte pro Spiel, Spielmodus und Filter'],
        ['3. Generierung', 'Rezepte aus dem erlaubten Pool plus Joker-Runden erzeugen'],
        ['4a. Summary - Mit Raten', 'Nur Einkaufsliste und neutrale Auswahl-Info, keine Rezeptnamen'],
        ['4b. Summary - Ohne Raten', 'Rezeptplan sichtbar, entfernen und passende Zusatzrezepte ergaenzen'],
        ['5. Spieler-Setup', 'Spielernamen erfassen, Reihenfolge mischen, Spiel starten'],
        ['6a. Runde - Mit Raten', 'Nächster Koch -> Rezept anzeigen -> Score / Skip -> Runde beenden'],
        ['6b. Runde - Ohne Raten', 'Direkt Rezeptansicht -> Skip optional -> Runde beenden'],
        ['7a. Finale - Mit Raten', 'Rangliste nach Punkten'],
        ['7b. Finale - Ohne Raten', 'Liste der gespielten Rezepte'],
        ['Shared', 'Einkaufsliste, Autosave, QR-Spectator, PWA / Offline, Bildslot unter dem Titel'],
    ]
    table = Table(data, colWidths=[48 * mm, 116 * mm])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f2ebdf')),
        ('BACKGROUND', (0, 0), (-1, -1), colors.white),
        ('BOX', (0, 0), (-1, -1), 0.8, colors.HexColor('#d9c9b5')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e7dfd1')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('LEADING', (0, 0), (-1, -1), 13),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(table)
    story.extend([
        Spacer(1, 12),
        p('Wichtige Architekturregeln', SUBTITLE),
        *bullet_lines([
            'Der Spielmodus trennt Sichtbarkeit, Score-Verhalten und Spectator-Darstellung eindeutig.',
            'Mit Raten leakt den konkreten Plan in der Summary nicht an den Organisator.',
            'Ohne Raten rechnet keine Punkte im Hintergrund mit.',
            'Timer-bezogene Altlogik ist nicht mehr Bestandteil des Produktflusses.',
        ]),
    ])
    build_pdf(path, story)


def build_rules_pdf():
    path = OUT / 'Regelblatt_v1.2.pdf'
    story = [
        p('GIRO DI PASTA - Regelblatt v1.2', TITLE),
        p('Aktuelle Spielregeln ohne Timer, mit zwei Spielmodi.', SMALL),
        Spacer(1, 6),
        p('Gemeinsame Grundregeln', SUBTITLE),
        *bullet_lines([
            'Maximal 6 spielende Parteien. Ab 6 Personen werden Teams gebildet; jedes Team zaehlt als eine Partei.',
            'Die Rezeptschritte sind nicht interaktiv. Der Koch liest und kocht, die anderen sprechen ihre Vermutungen nur muendlich aus.',
            'Joker-Runden koennen im Spiel auftauchen und stehen fuer eine freie Wahl statt eines festen Rezepts.',
            'Rezept skippen bleibt als sichtbare Aktion waehrend des Kochens erlaubt.',
        ]),
        p('Ablauf einer Runde - Mit Raten', SUBTITLE),
        *bullet_lines([
            'Das Smartphone wird an den naechsten Koch uebergeben.',
            'Der Reveal-Screen zeigt nur Nächster Koch und den Namen der aktiven Person.',
            'Erst nach Tipp auf Rezept anzeigen sieht der Koch das Rezept.',
            'Andere Spieler raten muendlich, waehrend der Koch arbeitet.',
            'Die Punkte werden direkt auf dem Kochscreen vergeben.',
        ]),
        p('Punktevergabe - nur Mit Raten', SUBTITLE),
        *bullet_lines([
            'Erster richtiger Tipp: +2 Punkte.',
            'Jeder falsche Tipp: -1 Punkt.',
            'Niemand errät das Rezept: Koch +3 Punkte.',
            'Mindestens ein richtiger Tipp: Koch 0 Punkte.',
        ]),
        PageBreak(),
        p('Ablauf einer Runde - Ohne Raten', SUBTITLE),
        *bullet_lines([
            'Die Rezepte sind bereits in der Planung sichtbar.',
            'Das Spiel laeuft offen, ohne geheime Reveal-Pflicht und ohne Score-System.',
            'Es gibt keinen Sieger ueber Punkte; am Ende sieht man die gespielten Rezepte.',
        ]),
        p('Spielende', SUBTITLE),
        *bullet_lines([
            'Mit Raten endet mit einer Rangliste nach Punkten.',
            'Ohne Raten endet mit einer Uebersicht der gespielten Runden.',
            'In beiden Modi kann danach direkt ein neues Spiel angelegt oder ein gespeichertes Spiel geladen werden.',
        ]),
        p('Zuschauermodus', SUBTITLE),
        *bullet_lines([
            'Der Spectator wird per QR-Code geoeffnet und bleibt read-only.',
            'Mit Raten zeigt er Punkte sowie den gesamten verfuegbaren Rezeptkatalog als Hilfestellung fuer die Ratenden.',
            'Ohne Raten zeigt er nur die wirklich gespielten Rezepte und markiert das aktuelle Rezept.',
        ]),
        p('Wichtiger Hinweis', SUBTITLE),
        *bullet_lines([
            'Der fruehere Timer ist vollstaendig aus dem Produkt entfernt. Es gibt keine Countdown-Regel mehr.',
        ]),
    ]
    build_pdf(path, story)


def chunked(items: list[str], size: int) -> list[list[str]]:
    return [items[i:i + size] for i in range(0, len(items), size)]


def build_recipe_list_pdf(recipes: list[str]):
    path = OUT / 'Rezeptliste v1.1.pdf'
    grouped = [
        ('Klassiker und rote Saucen', [
            'Aglio e olio e peperoncino', 'Pomodoro e basilico', 'Arrabbiata', 'Marinara',
            'Ricotta e pomodoro al peperoncino', 'Cacio e pepe', 'Carbonara', 'Gricia',
            'Amatriciana', 'Puttanesca', 'Pasta all’Assassina'
        ]),
        ('Sardellen, Kaese und cremige Saucen', [
            'Aglio, olio e acciughe', 'Sardellen e limone', 'Sardellen e pangrattato',
            'Burro e salvia', 'Parmigiano e burro', 'Funghi e burro', 'Ricotta al limone',
            'Ricotta e gorgonzola', 'Gorgonzola e noci', 'Taleggio e pepe', 'Stracchino e noci'
        ]),
        ('Fleisch, Gefluegel und Wurst', [
            'Salsiccia e finocchio', 'Speck e cipolla', 'Pollo e panna', 'Pollo e funghi'
        ]),
        ('Fisch und Meeresfruechte', [
            'Tonno e pomodoro', 'Tonno e capperi', 'Salmone e panna', 'Salmone e limone',
            'Gamberi e aglio', 'Gamberi e zucchine', 'Vongole in bianco', 'Vongole e pomodoro',
            'Frutti di mare', 'Bottarga e limone'
        ]),
        ('Gemuese', [
            'Melanzane e pomodoro', 'Zucchine e menta', 'Spinaci e ricotta'
        ]),
    ]
    flat = [name for _, names in grouped for name in names]
    if sorted(flat) != sorted(recipes):
        raise RuntimeError('Grouped recipe list does not match current recipe catalog')

    story = [
        p('GIRO DI PASTA - Rezeptliste v1.1', TITLE),
        p('Aktiver Rezeptkatalog der App auf Basis des aktuellen V2.0-Stands.', SMALL),
        Spacer(1, 6),
        p(f'Aktive Rezepte: {len(recipes)}. Joker-Runden werden separat erzeugt und sind kein eigenes Rezept.', BODY),
    ]
    for title, names in grouped:
        story.append(p(title, SUBTITLE))
        story.extend(bullet_lines(names))
    story.extend([
        Spacer(1, 8),
        p('Nicht mehr im aktiven Katalog: Pesto-Rezepte, Dessert-Rezepte, Ragus, Quattro formaggi und Crema di zucca.', SMALL),
    ])
    build_pdf(path, story)


def build_task_list_xlsx():
    path = OUT / 'Aufgabenliste v1.2.xlsx'
    rows = [
        (1, 'UX', 'Privacy Screen beim Handy-Handover', 'Rezept erst nach Uebergabe sichtbar machen', 'Erledigt', 'Reveal-Screen aktiv im Modus Mit Raten.'),
        (2, 'UX', 'Cooking Screen bereinigen', 'Titel, Schritte, Score, Skip, Schwierigkeit und Tipp sauber darstellen', 'Erledigt', 'Timer-UI entfernt, Kochscreen bleibt praktisch.'),
        (3, 'UX', 'Spielmodus Mit Raten', 'Verdeckte Rezeptplanung und Wettbewerb aktiv halten', 'Erledigt', 'Summary versteckt Rezeptnamen, Reveal und Score aktiv.'),
        (4, 'UX', 'Spielmodus Ohne Raten', 'Offene Planung ohne Wettbewerb', 'Erledigt', 'Rezeptplan sichtbar und editierbar, Score komplett aus.'),
        (5, 'UX', 'Big Tap Targets', 'Alle kritischen Buttons mobil gut treffbar machen', 'Teilweise', 'Spielkritische Buttons gross, nicht alle Randaktionen bereits vereinheitlicht.'),
        (6, 'UX', 'Kompakte Score-Anzeige', 'Punktestand sichtbar halten ohne den Kochscreen zu ueberladen', 'Erledigt', 'Aufklappbare Ranglistenansicht im Hauptspiel vorhanden.'),
        (7, 'Feedback', 'Haptik fuer Schluesselaktionen', 'Kurzes Vibrationsfeedback bei wichtigen Buttons', 'Erledigt', 'Neu, Reveal, Skip und Bestaetigen nutzen navigator.vibrate mit Fallback.'),
        (8, 'Feedback', 'Timer-Sound / Timer-Vibration / Timer-HUD', 'Fruehere Countdown-Features', 'Aus Scope', 'Der Timer wurde bewusst aus dem Produkt entfernt.'),
        (9, 'Stabilitaet', 'Autosave implementieren', 'Spielstaende automatisch speichern', 'Erledigt', 'Speicherung erfolgt ueber upsertCurrentGame in localStorage.'),
        (10, 'Datenstruktur', 'Rezept-Datenmodell strukturieren', 'Zutaten, IDs, Guides und Bilder konsistenter zusammenfuehren', 'Teilweise', 'Runtime-Daten liegen noch in app.js und recipes.json verteilt.'),
        (11, 'Datenstruktur', 'IndexedDB statt localStorage', 'Robustere Speicherung', 'Offen', 'Persistenz laeuft weiterhin ausschliesslich ueber localStorage.'),
        (12, 'PWA', 'Service Worker', 'Offlinefaehigkeit der App', 'Erledigt', 'service-worker.js ist aktiv und versioniert.'),
        (13, 'PWA', 'App Shell Caching', 'Schneller App-Start und Fallbacks', 'Erledigt', 'index.html, app.js, Manifest, Icon und Bilder werden gecacht.'),
        (14, 'Feature', 'QR Spectator Mode', 'Read-only Zuschaueransicht ueber QR', 'Erledigt', 'Watch-Link und QR-Modal sind produktiv.'),
        (15, 'Feature', 'Spectator mode-aware UI', 'Anzeige an Mit Raten / Ohne Raten anpassen', 'Erledigt', 'Mit Raten zeigt Scores und alle Rezepte, Ohne Raten nur gespielte Rezepte.'),
        (16, 'Planung', 'Einkaufsliste generieren', 'Zutaten automatisch aggregieren', 'Erledigt', 'Nicht-Joker-Runden werden fuer die Einkaufsliste zusammengefasst.'),
        (17, 'Integration', 'Bring-friendly Export', 'Einkaufsliste besser fuer Bring nutzbar machen', 'Teilweise', 'Clipboard-Export ist da, kein Bring-spezifisches Format.'),
        (18, 'Integration', 'Web Share API', 'Liste nativ ueber das Betriebssystem teilen', 'Offen', 'navigator.share ist noch nicht eingebunden.'),
        (19, 'Integration', 'Apple Erinnerungen Export', 'iOS-kompatiblen Listenfluss anbieten', 'Teilweise', 'Aktuell wird Erinnerungen-kompatibler Text kopiert.'),
        (20, 'Gameplay', 'Rezeptplanung offen editieren', 'Rezepte entfernen und passende Zusatzrezepte bestaetigen', 'Erledigt', 'Nur im Modus Ohne Raten sichtbar und nutzbar.'),
        (21, 'Gameplay', 'Zusatzpunkt bestes Gericht', 'Optionaler Bonuspunkt pro Runde', 'Offen', 'Keine UI und keine State-Logik vorhanden.'),
        (22, 'Gameplay', 'Rezepte nach Spiel bereitstellen', 'Saubere Nach-Spiel-Uebersicht aller gekochten Gerichte', 'Teilweise', 'Offener Modus zeigt Abschlussliste, dediziertes Recap fehlt noch.'),
        (23, 'Content', 'Rezeptkatalog V2.0 synchronisieren', 'Aktive Rezepte auf neuen Dokumentenstand bringen', 'Erledigt', 'Pesto, Dessert-Rezepte und Crema di zucca sind entfernt.'),
        (24, 'Rezepte', 'Puttanesca pruefen', 'Fachliche Pruefung dokumentieren', 'Erledigt', 'Review-Notiz vorhanden; Rezept selbst bewusst noch nicht umgeschrieben.'),
        (25, 'Rezepte', 'Amatriciana Zwiebel klaeren', 'Aromaten-Frage fachlich final entscheiden', 'Teilweise', 'In RECIPE_REVIEW_NOTES dokumentiert, noch nicht final entschieden.'),
        (26, 'Rezepte', 'Pasta all\'Assassina validieren', 'Fachliche Beschreibung final absichern', 'Teilweise', 'Review vorhanden, Endentscheidung noch offen.'),
        (27, 'Content', 'Rezeptbilder Hook', 'Bild-Slot unter dem Titel und externe Assets nutzen', 'Teilweise', 'Hook aktiv, 16 Bilder vorhanden; Generierung bleibt extern.'),
        (28, 'Produkt', 'Asia Edition Konzept', 'Alternative Rezeptbibliothek', 'Verschoben', 'Aktuell nicht im Fokus der App-Umsetzung.'),
        (29, 'Business', 'Zutatenpartner / Rabatt / Commission', 'Partner- und Erlosmodell bewerten', 'Extern', 'Kein Code-Thema, bleibt ausserhalb des Produktkerns.'),
    ]

    wb = Workbook()
    ws = wb.active
    ws.title = 'Giro di Pasta Tasks v1.2'
    ws.append(['Prioritaet', 'Kategorie', 'Aufgabe', 'Beschreibung / Ziel', 'Status', 'Stand / Hinweis'])
    for row in rows:
        ws.append(row)

    header_fill = PatternFill('solid', fgColor='F2EBDD')
    status_fills = {
        'Erledigt': PatternFill('solid', fgColor='DCEED7'),
        'Teilweise': PatternFill('solid', fgColor='FFF0C9'),
        'Offen': PatternFill('solid', fgColor='F8D6D2'),
        'Verschoben': PatternFill('solid', fgColor='E7E1F6'),
        'Extern': PatternFill('solid', fgColor='D9E7F7'),
        'Aus Scope': PatternFill('solid', fgColor='E6E6E6'),
    }
    for cell in ws[1]:
        cell.font = Font(bold=True)
        cell.fill = header_fill
        cell.alignment = Alignment(horizontal='center', vertical='center')

    for row in ws.iter_rows(min_row=2, max_row=ws.max_row):
        status_cell = row[4]
        status_cell.fill = status_fills.get(status_cell.value, PatternFill())
        status_cell.font = Font(bold=True)
        for cell in row:
            cell.alignment = Alignment(vertical='top', wrap_text=True)

    widths = {1: 10, 2: 16, 3: 34, 4: 42, 5: 14, 6: 50}
    for idx, width in widths.items():
        ws.column_dimensions[get_column_letter(idx)].width = width

    ws.freeze_panes = 'A2'
    ws.auto_filter.ref = f'A1:F{ws.max_row}'
    wb.save(path)


def build_summary_md(recipes: list[str], image_count: int):
    path = OUT / 'DOCUMENT_UPDATE_SUMMARY.md'
    lines = [
        '# Dokumentenupdate Giro di Pasta',
        '',
        f'- Stand: {TODAY.isoformat()}',
        '- Quelle: aktueller App-Stand in /Users/eric/GitHub/App Giro di Pasta',
        '- Timer wurde in allen neuen Dokumenten als entfernt / ausser Scope behandelt.',
        f'- Aktive Rezepte ohne Joker: {len(recipes)}',
        f'- Aktuell vorhandene Rezeptbilder: {image_count}',
        '',
        '## Neue Dateien',
        '- App_Architektur_v1.2.pdf',
        '- App_Konzept_v1.2.pdf',
        '- Architekturkarte v1.1.pdf',
        '- Aufgabenliste v1.2.xlsx',
        '- Regelblatt_v1.2.pdf',
        '- Rezeptliste v1.1.pdf',
    ]
    path.write_text('\n'.join(lines), encoding='utf-8')


def main():
    recipes = parse_pdf_recipe_names()
    image_count = count_recipe_images()
    build_architecture_pdf(recipes, image_count)
    build_concept_pdf(image_count)
    build_architecture_card_pdf()
    build_rules_pdf()
    build_recipe_list_pdf(recipes)
    build_task_list_xlsx()
    build_summary_md(recipes, image_count)
    print(f'Generated files in {OUT}')
    for file in sorted(OUT.iterdir()):
        print(file.name)


if __name__ == '__main__':
    main()
