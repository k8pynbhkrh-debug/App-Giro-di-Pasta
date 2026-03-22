#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'assets', 'recipes');
const buildScript = path.join(rootDir, 'scripts', 'build_recipe_web_images.sh');

let debounceTimer = null;
let buildRunning = false;
let rerunRequested = false;

function log(message) {
  const timestamp = new Date().toISOString();
  process.stdout.write(`[recipe-image-watcher] ${timestamp} ${message}\n`);
}

function runBuild(reason) {
  if (buildRunning) {
    rerunRequested = true;
    log(`Build already running, merke weiteren Sync vor (${reason}).`);
    return;
  }

  buildRunning = true;
  log(`Starte Webbild-Sync (${reason}).`);

  const child = spawn('/bin/zsh', [buildScript], {
    cwd: rootDir,
    stdio: 'inherit'
  });

  child.on('exit', code => {
    buildRunning = false;
    if (code === 0) {
      log('Webbild-Sync abgeschlossen.');
    } else {
      log(`Webbild-Sync mit Fehler beendet (Code ${code}).`);
    }

    if (rerunRequested) {
      rerunRequested = false;
      runBuild('nachgezogener Sync');
    }
  });
}

function scheduleBuild(reason) {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    runBuild(reason);
  }, 450);
}

function isRelevantFile(filename) {
  if (!filename) return true;
  return filename.toLowerCase().endsWith('.png');
}

function startWatching() {
  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Quellordner nicht gefunden: ${sourceDir}`);
  }

  log(`Beobachte ${sourceDir}`);
  runBuild('Initialer Sync');

  fs.watch(sourceDir, { persistent: true }, (eventType, filename) => {
    if (!isRelevantFile(filename)) return;
    scheduleBuild(`${eventType || 'change'} ${filename || ''}`.trim());
  });
}

try {
  startWatching();
} catch (error) {
  console.error('[recipe-image-watcher] Start fehlgeschlagen:', error);
  process.exit(1);
}
