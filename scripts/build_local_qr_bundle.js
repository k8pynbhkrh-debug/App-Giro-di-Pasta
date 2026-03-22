#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const sourceDir = '/usr/local/lib/node_modules/npm/node_modules/qrcode-terminal/vendor/QRCode';
const outFile = path.join(__dirname, '..', 'assets', 'local-qr.js');
const files = [
  'QR8bitByte.js',
  'QRBitBuffer.js',
  'QRErrorCorrectLevel.js',
  'QRMaskPattern.js',
  'QRMath.js',
  'QRMode.js',
  'QRPolynomial.js',
  'QRRSBlock.js',
  'QRUtil.js',
  'index.js'
];

for (const file of files) {
  const fullPath = path.join(sourceDir, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing QR source file: ${fullPath}`);
  }
}

const escapeModuleCode = value => value
  .replace(/require\('\.\/([^']+)'\)/g, 'require("$1.js")');

const moduleEntries = files.map(file => {
  const source = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  return `    "${file}": function(module, exports, require) {\n${escapeModuleCode(source)}\n    }`;
}).join(',\n');

const bundle = `/* Local QR bundle for Giro di Pasta
 * Source adapted from qrcode-terminal / QRCode for JavaScript (MIT).
 */
(function(global) {
  const modules = {
${moduleEntries}
  };

  const cache = {};

  function require(id) {
    if (cache[id]) return cache[id].exports;
    const factory = modules[id];
    if (!factory) {
      throw new Error("Unknown local QR module: " + id);
    }
    const module = { exports: {} };
    cache[id] = module;
    factory(module, module.exports, require);
    return module.exports;
  }

  const QRCode = require("index.js");
  const QRErrorCorrectLevel = require("QRErrorCorrectLevel.js");

  function createMatrix(text, errorLevel) {
    const level = QRErrorCorrectLevel[errorLevel] || QRErrorCorrectLevel.L;
    const qr = new QRCode(-1, level);
    qr.addData(String(text || ""));
    qr.make();
    return {
      size: qr.getModuleCount(),
      modules: qr.modules
    };
  }

  function createSvg(text, options) {
    const opts = options || {};
    const matrix = createMatrix(text, opts.errorLevel || "L");
    const quietZone = Number.isFinite(opts.quietZone) ? opts.quietZone : 4;
    const cellSize = Number.isFinite(opts.cellSize) ? opts.cellSize : 8;
    const size = (matrix.size + quietZone * 2) * cellSize;
    const foreground = opts.foreground || "#1f1713";
    const background = opts.background || "#ffffff";
    const rects = [];

    for (let row = 0; row < matrix.size; row += 1) {
      for (let col = 0; col < matrix.size; col += 1) {
        if (!matrix.modules[row][col]) continue;
        rects.push(
          '<rect x="' + ((col + quietZone) * cellSize) +
          '" y="' + ((row + quietZone) * cellSize) +
          '" width="' + cellSize +
          '" height="' + cellSize +
          '" fill="' + foreground + '"/>'
        );
      }
    }

    return [
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" role="img" aria-label="QR Code">',
      '<rect width="100%" height="100%" fill="' + background + '"/>',
      rects.join(""),
      '</svg>'
    ].join("");
  }

  function createSvgDataUrl(text, options) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(createSvg(text, options));
  }

  global.LocalQRCode = {
    createMatrix,
    createSvg,
    createSvgDataUrl
  };
})(window);
`;

fs.writeFileSync(outFile, bundle, 'utf8');
console.log(`Local QR bundle written to ${outFile}`);
