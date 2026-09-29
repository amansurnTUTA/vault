<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Schema Checker Pro — Full Comparison Report</title>
<style>
  :root {
    --bg: #0f172a;
    --panel: #1e293b;
    --panel-2: #273449;
    --border: #334155;
    --text: #e2e8f0;
    --muted: #94a3b8;
    --primary: #38bdf8;
    --primary-dark: #0284c7;
    --ok: #22c55e;
    --ok-bg: #14532d;
    --missing: #ef4444;
    --missing-bg: #7f1d1d;
    --redundant: #f59e0b;
    --redundant-bg: #78350f;
    --duplicate: #a855f7;
    --duplicate-bg: #4c1d95;
    --info: #60a5fa;
    --info-bg: #1e3a8a;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.5;
    padding: 24px;
  }
  .wrap { max-width: 1400px; margin: 0 auto; }
  h1 {
    font-size: 1.8rem;
    margin: 0 0 6px;
    background: linear-gradient(90deg, #38bdf8, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .sub { color: var(--muted); margin-bottom: 24px; font-size: 0.95rem; }

  .card {
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 18px;
  }
  .card h2 {
    margin: 0 0 14px;
    font-size: 1.05rem;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 720px) { .grid-2 { grid-template-columns: 1fr; } }

  .file-drop {
    border: 2px dashed var(--border);
    border-radius: 10px;
    padding: 18px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    background: var(--panel-2);
  }
  .file-drop:hover { border-color: var(--primary); background: #1e3a5f; }
  .file-drop.has-file { border-color: var(--ok); background: #0f2e1a; border-style: solid; }
  .file-drop input { display: none; }
  .file-drop .label { font-size: 0.85rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; }
  .file-drop .name { font-weight: 600; margin-top: 6px; word-break: break-all; }
  .file-drop .meta { font-size: 0.8rem; color: var(--muted); margin-top: 4px; }

  .options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;
    margin-top: 4px;
  }
  .opt {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--panel-2);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.88rem;
    cursor: pointer;
    user-select: none;
    transition: border-color 0.15s;
  }
  .opt:hover { border-color: var(--primary); }
  .opt input { accent-color: var(--primary); cursor: pointer; }

  button.primary {
    background: linear-gradient(90deg, var(--primary), #818cf8);
    color: #0b1220;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    padding: 12px 28px;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.2s;
    margin-top: 8px;
  }
  button.primary:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(56,189,248,0.35); }
  button.primary:disabled { opacity: 0.4; cursor: not-allowed; }

  button.ghost {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 14px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.15s;
  }
  button.ghost:hover { border-color: var(--primary); color: var(--primary); }

  .actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin-top: 8px; }

  /* Results */
  #results { display: none; }

  .stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-bottom: 18px;
  }
  .stat {
    background: var(--panel-2);
    border: 1px solid var(--border);
    border-left: 4px solid var(--info);
    border-radius: 8px;
    padding: 12px 14px;
  }
  .stat .num { font-size: 1.6rem; font-weight: 700; line-height: 1; }
  .stat .lbl { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); margin-top: 6px; }
  .stat.ok { border-left-color: var(--ok); } .stat.ok .num { color: var(--ok); }
  .stat.missing { border-left-color: var(--missing); } .stat.missing .num { color: var(--missing); }
  .stat.redundant { border-left-color: var(--redundant); } .stat.redundant .num { color: var(--redundant); }
  .stat.duplicate { border-left-color: var(--duplicate); } .stat.duplicate .num { color: var(--duplicate); }
  .stat.info { border-left-color: var(--info); } .stat.info .num { color: var(--info); }

  .table-report {
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 10px;
    margin-bottom: 16px;
    overflow: hidden;
  }
  .table-report .header {
    background: var(--panel-2);
    padding: 14px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    cursor: pointer;
    user-select: none;
  }
  .table-report .header h3 { margin: 0; font-size: 1rem; display: flex; align-items: center; gap: 10px; }
  .table-report .body { padding: 18px; display: none; }
  .table-report.open .body { display: block; }

  .badge {
    display: inline-block;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .badge.ok { background: var(--ok-bg); color: #86efac; }
  .badge.missing { background: var(--missing-bg); color: #fecaca; }
  .badge.redundant { background: var(--redundant-bg); color: #fde68a; }
  .badge.duplicate { background: var(--duplicate-bg); color: #e9d5ff; }
  .badge.info { background: var(--info-bg); color: #bfdbfe; }

  .col-section { margin-bottom: 18px; }
  .col-section .title {
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip {
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-family: "SF Mono", Menlo, Consolas, monospace;
    border: 1px solid transparent;
  }
  .chip.ok { background: var(--ok-bg); color: #bbf7d0; border-color: #166534; }
  .chip.missing { background: var(--missing-bg); color: #fecaca; border-color: #991b1b; }
  .chip.redundant { background: var(--redundant-bg); color: #fde68a; border-color: #92400e; }
  .chip.duplicate { background: var(--duplicate-bg); color: #e9d5ff; border-color: #6b21a8; }

  .kv { display: grid; grid-template-columns: auto 1fr; gap: 4px 16px; font-size: 0.88rem; margin-bottom: 14px; }
  .kv .k { color: var(--muted); }
  .kv .v { font-family: "SF Mono", Menlo, Consolas, monospace; }

  .order-warn {
    background: var(--redundant-bg);
    border-left: 4px solid var(--redundant);
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 0.88rem;
    margin-top: 10px;
  }

  .mapping-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
    margin-top: 8px;
  }
  .mapping-table th, .mapping-table td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid var(--border);
  }
  .mapping-table th { color: var(--muted); font-weight: 600; font-size: 0.75rem; text-transform: uppercase; }
  .mapping-table select {
    background: var(--panel-2);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 5px 8px;
    font-size: 0.85rem;
    width: 100%;
  }

  .type-tag {
    font-size: 0.7rem;
    padding: 1px 6px;
    border-radius: 4px;
    background: #1e293b;
    color: var(--muted);
    border: 1px solid var(--border);
    margin-left: 6px;
  }

  details.raw {
    margin-top: 10px;
    background: var(--panel-2);
    border-radius: 6px;
    padding: 10px 14px;
  }
  details.raw summary { cursor: pointer; color: var(--muted); font-size: 0.85rem; }
  details.raw pre {
    margin: 10px 0 0;
    font-size: 0.78rem;
    color: var(--text);
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .spinner {
    display: inline-block;
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.2);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    vertical-align: middle;
    margin-right: 8px;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .toast {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-left: 4px solid var(--primary);
    padding: 12px 18px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    font-size: 0.9rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.25s;
    pointer-events: none;
  }
  .toast.show { opacity: 1; transform: translateY(0); }

  .legend { display: flex; gap: 14px; flex-wrap: wrap; font-size: 0.8rem; color: var(--muted); margin-top: 10px; }
  .legend span { display: inline-flex; align-items: center; gap: 6px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
</style>
</head>
<body>
<div class="wrap">
  <h1>Schema Checker Pro</h1>
  <p class="sub">Full-schema comparison with flexible matching, complete visibility, and exportable reports.</p>

  <!-- Upload -->
  <div class="card">
    <h2>📁 1. Upload Files</h2>
    <div class="grid-2">
      <label class="file-drop" id="dropPrimary">
        <input type="file" id="primaryFile" accept=".xlsx,.xls,.csv">
        <div class="label">Primary File (source of truth)</div>
        <div class="name" id="primaryName">Click to choose…</div>
        <div class="meta" id="primaryMeta"></div>
      </label>
      <label class="file-drop" id="dropSecondary">
        <input type="file" id="secondaryFile" accept=".xlsx,.xls,.csv">
        <div class="label">Secondary File (to validate)</div>
        <div class="name" id="secondaryName">Click to choose…</div>
        <div class="meta" id="secondaryMeta"></div>
      </label>
    </div>
  </div>

  <!-- Options -->
  <div class="card">
    <h2>⚙️ 2. Matching Options</h2>
    <div class="options">
      <label class="opt"><input type="checkbox" id="optCaseInsensitive" checked> Case-insensitive column matching</label>
      <label class="opt"><input type="checkbox" id="optNormalizeSpaces" checked> Ignore spaces / underscores / hyphens</label>
      <label class="opt"><input type="checkbox" id="optFuzzySheets" checked> Fuzzy sheet-name matching</label>
      <label class="opt"><input type="checkbox" id="optCheckOrder"> Check column order too</label>
      <label class="opt"><input type="checkbox" id="optInferTypes" checked> Infer column data types</label>
      <label class="opt"><input type="checkbox" id="optShowMatches" checked> Show matching columns</label>
      <label class="opt"><input type="checkbox" id="optShowSample" checked> Show sample values</label>
      <label class="opt"><input type="checkbox" id="optTreatCSVAsOne" checked> Treat CSV as single table</label>
    </div>
    <div class="legend">
      <span><i class="dot" style="background:var(--ok)"></i> Match</span>
      <span><i class="dot" style="background:var(--missing)"></i> Missing (in Primary, not in Secondary)</span>
      <span><i class="dot" style="background:var(--redundant)"></i> Redundant (in Secondary, not in Primary)</span>
      <span><i class="dot" style="background:var(--duplicate)"></i> Duplicate within same table</span>
    </div>
  </div>

  <!-- Run -->
  <div class="card" style="text-align:center">
    <button class="primary" id="runBtn" disabled>▶ Run Full Comparison</button>
    <div id="runStatus" style="margin-top:10px; color:var(--muted); font-size:0.85rem;"></div>
  </div>

  <!-- Results -->
  <div id="results">
    <div class="card">
      <h2>📊 Summary</h2>
      <div class="stat-grid" id="statGrid"></div>
      <div class="actions">
        <button class="ghost" id="exportJson">⬇ Export JSON</button>
        <button class="ghost" id="exportCsv">⬇ Export CSV</button>
        <button class="ghost" id="expandAll">⊞ Expand All</button>
        <button class="ghost" id="collapseAll">⊟ Collapse All</button>
      </div>
    </div>

    <div id="sheetMappingCard" class="card" style="display:none">
      <h2>🔗 Sheet Mapping (editable)</h2>
      <p style="color:var(--muted); font-size:0.88rem; margin-top:0">Review and change how sheets are paired. Changing a mapping re-runs the comparison instantly.</p>
      <div id="sheetMappingBody"></div>
    </div>

    <div id="tableReports"></div>
    <div id="extraSheetsCard" class="card" style="display:none">
      <h2>📋 Sheets Only in Secondary</h2>
      <div id="extraSheetsBody"></div>
    </div>

    <div class="card">
      <h2>🔍 Raw Report</h2>
      <details class="raw">
        <summary>Click to view / copy the full JSON report</summary>
        <pre id="rawJson"></pre>
      </details>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<!-- Libraries -->
<script src="https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>

<script>
/* =====================================================================
   State
===================================================================== */
const state = {
  primary: null,     // { fileName, type, sheets: { name: { columns:[], rows:[], rowCount } } }
  secondary: null,
  sheetMap: {},      // primarySheetName -> secondarySheetName | null
  lastReport: null,
};

const $ = id => document.getElementById(id);

/* =====================================================================
   Upload handling
===================================================================== */
function fmtSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function handleFile(file, which) {
  const el = which === 'primary' ? $('primaryFile') : $('secondaryFile');
  const nameEl = which === 'primary' ? $('primaryName') : $('secondaryName');
  const metaEl = which === 'primary' ? $('primaryMeta') : $('secondaryMeta');
  const dropEl = which === 'primary' ? $('dropPrimary') : $('dropSecondary');

  if (!file) return;
  nameEl.textContent = file.name;
  metaEl.textContent = fmtSize(file.size) + ' · parsing…';

  try {
    const parsed = await parseFile(file);
    state[which] = { fileName: file.name, ...parsed };
    const tableCount = Object.keys(parsed.sheets).length;
    metaEl.textContent = fmtSize(file.size) + ' · ' + tableCount + ' table(s)';
    dropEl.classList.add('has-file');
  } catch (err) {
    metaEl.textContent = '❌ ' + err.message;
    dropEl.classList.remove('has-file');
    state[which] = null;
    console.error(err);
  }
  updateRunButton();
}

$('primaryFile').addEventListener('change', e => handleFile(e.target.files[0], 'primary'));
$('secondaryFile').addEventListener('change', e => handleFile(e.target.files[0], 'secondary'));

function updateRunButton() {
  $('runBtn').disabled = !(state.primary && state.secondary);
}

/* =====================================================================
   File parsing
===================================================================== */
function parseFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext === 'csv') return parseCSV(file);
  if (ext === 'xlsx' || ext === 'xls') return parseExcel(file);
  return Promise.reject(new Error('Unsupported format: ' + ext));
}

function parseCSV(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      skipEmptyLines: 'greedy',
      complete: (results) => {
        try {
          const rows = results.data;
          const sheets = {};
          if (!rows.length) {
            sheets['CSV Data'] = { columns: [], rows: [], rowCount: 0 };
          } else {
            const headers = rows[0].map(h => String(h == null ? '' : h).trim()).filter(Boolean);
            const dataRows = rows.slice(1).map(r => {
              const obj = {};
              headers.forEach((h, i) => { obj[h] = r[i] !== undefined ? r[i] : ''; });
              return obj;
            });
            sheets['CSV Data'] = { columns: headers, rows: dataRows, rowCount: dataRows.length };
          }
          resolve({ type: 'csv', sheets });
        } catch (e) { reject(e); }
      },
      error: (err) => reject(err),
    });
  });
}

function parseExcel(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const wb = XLSX.read(data, { type: 'array', cellDates: true });
        const sheets = {};
        wb.SheetNames.forEach(sheetName => {
          const ws = wb.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', raw: false });
          if (!json.length) {
            sheets[sheetName] = { columns: [], rows: [], rowCount: 0 };
            return;
          }
          const headers = json[0].map(h => String(h == null ? '' : h).trim()).filter(Boolean);
          const dataRows = json.slice(1).map(r => {
            const obj = {};
            headers.forEach((h, i) => { obj[h] = r[i] !== undefined ? r[i] : ''; });
            return obj;
          });
          sheets[sheetName] = { columns: headers, rows: dataRows, rowCount: dataRows.length };
        });
        resolve({ type: 'excel', sheets });
      } catch (err) { reject(err); }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

/* =====================================================================
   Normalization + fuzzy matching
===================================================================== */
function normalizeKey(name, opts) {
  let s = String(name).trim();
  if (opts.caseInsensitive) s = s.toLowerCase();
  if (opts.normalizeSpaces) s = s.replace(/[\s_\-]+/g, '');
  return s;
}

function levenshtein(a, b) {
  a = a.toLowerCase(); b = b.toLowerCase();
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function similarity(a, b) {
  const d = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length) || 1;
  return 1 - d / maxLen;
}

function findBestSheetMatch(primaryName, secondaryNames, opts) {
  if (!secondaryNames.length) return { match: null, score: 0 };
  const pn = normalizeKey(primaryName, opts);
  // exact normalized
  for (const s of secondaryNames) {
    if (normalizeKey(s, opts) === pn) return { match: s, score: 1 };
  }
  if (!opts.fuzzySheets) return { match: null, score: 0 };
  // fuzzy
  let best = null, bestScore = 0;
  for (const s of secondaryNames) {
    const score = similarity(primaryName, s);
    if (score > bestScore) { bestScore = score; best = s; }
  }
  // Require at least 0.65 similarity to count
  return bestScore >= 0.65 ? { match: best, score: bestScore } : { match: null, score: bestScore };
}

/* =====================================================================
   Type inference
===================================================================== */
function inferType(values) {
  const nonEmpty = values.filter(v => v !== '' && v != null);
  if (!nonEmpty.length) return 'empty';
  const isNum = nonEmpty.every(v => !isNaN(parseFloat(v)) && isFinite(v));
  if (isNum) return 'number';
  const isDate = nonEmpty.every(v => !isNaN(Date.parse(v)) && String(v).length >= 6);
  if (isDate) return 'date';
  const isBool = nonEmpty.every(v => ['true','false','0','1','yes','no'].includes(String(v).toLowerCase()));
  if (isBool) return 'boolean';
  return 'string';
}

function sampleValues(rows, col, n = 3) {
  const out = [];
  for (const row of rows) {
    const v = row[col];
    if (v !== undefined && v !== '') out.push(v);
    if (out.length >= n) break;
  }
  return out;
}

/* =====================================================================
   Comparison engine
===================================================================== */
function getOpts() {
  return {
    caseInsensitive: $('optCaseInsensitive').checked,
    normalizeSpaces: $('optNormalizeSpaces').checked,
    fuzzySheets: $('optFuzzySheets').checked,
    checkOrder: $('optCheckOrder').checked,
    inferTypes: $('optInferTypes').checked,
    showMatches: $('optShowMatches').checked,
    showSample: $('optShowSample').checked,
  };
}

function autoMapSheets(primary, secondary, opts) {
  const map = {};
  const secondaryNames = Object.keys(secondary.sheets);
  const usedSecondary = new Set();
  for (const pName of Object.keys(primary.sheets)) {
    const { match, score } = findBestSheetMatch(pName, secondaryNames, opts);
    if (match && !usedSecondary.has(match)) {
      map[pName] = { to: match, score, auto: true };
      usedSecondary.add(match);
    } else {
      map[pName] = { to: null, score: 0, auto: true };
    }
  }
  return map;
}

function buildReport() {
  const opts = getOpts();
  const { primary, secondary } = state;
  const report = {
    generatedAt: new Date().toISOString(),
    options: opts,
    files: {
      primary: { name: primary.fileName, type: primary.type, sheetCount: Object.keys(primary.sheets).length },
      secondary: { name: secondary.fileName, type: secondary.type, sheetCount: Object.keys(secondary.sheets).length },
    },
    sheetMap: {},
    tables: [],
    extraSheets: [],
    totals: { tables: 0, matchedTables: 0, missingTables: 0, missingCols: 0, redundantCols: 0, duplicateCols: 0, matchingCols: 0 },
  };

  const secondaryUsed = new Set();

  for (const pName of Object.keys(primary.sheets)) {
    const mapping = state.sheetMap[pName];
    const sName = mapping && mapping.to ? mapping.to : null;
    const pTable = primary.sheets[pName];
    const sTable = sName ? secondary.sheets[sName] : null;
    if (sName) secondaryUsed.add(sName);

    const table = {
      primarySheet: pName,
      secondarySheet: sName,
      matchType: sName ? (mapping.score >= 1 ? 'exact' : 'fuzzy') : 'none',
      matchScore: mapping ? mapping.score : 0,
      primaryRowCount: pTable.rowCount,
      secondaryRowCount: sTable ? sTable.rowCount : null,
      primaryColCount: pTable.columns.length,
      secondaryColCount: sTable ? sTable.columns.length : null,
      missing: [],
      redundant: [],
      matching: [],
      duplicateInPrimary: [],
      duplicateInSecondary: [],
      orderMismatch: false,
      orderNote: '',
      primaryTypes: {},
      secondaryTypes: {},
      primarySamples: {},
      secondarySamples: {},
    };

    // Duplicates within primary
    const seenP = new Map();
    pTable.columns.forEach(c => {
      const k = normalizeKey(c, opts);
      seenP.set(k, (seenP.get(k) || 0) + 1);
    });
    pTable.columns.forEach(c => {
      const k = normalizeKey(c, opts);
      if (seenP.get(k) > 1 && !table.duplicateInPrimary.includes(c)) table.duplicateInPrimary.push(c);
    });

    if (!sTable) {
      table.missing = [...pTable.columns];
      report.totals.missingCols += table.missing.length;
    } else {
      // Map normalized -> original for secondary
      const sMap = new Map();
      sTable.columns.forEach(c => {
        const k = normalizeKey(c, opts);
        if (!sMap.has(k)) sMap.set(k, []);
        sMap.get(k).push(c);
      });

      // Duplicates within secondary
      sTable.columns.forEach(c => {
        const k = normalizeKey(c, opts);
        if (sMap.get(k).length > 1 && !table.duplicateInSecondary.includes(c)) table.duplicateInSecondary.push(c);
      });

      // Match / missing
      const consumedSecondary = new Set();
      pTable.columns.forEach(pc => {
        const k = normalizeKey(pc, opts);
        if (sMap.has(k)) {
          table.matching.push({ primary: pc, secondary: sMap.get(k)[0] });
          consumedSecondary.add(sMap.get(k)[0]);
        } else {
          table.missing.push(pc);
        }
      });

      // Redundant
      sTable.columns.forEach(sc => {
        const k = normalizeKey(sc, opts);
        const hasMatch = pTable.columns.some(pc => normalizeKey(pc, opts) === k);
        if (!hasMatch) table.redundant.push(sc);
      });

      // Column order check
      if (opts.checkOrder) {
        const pOrder = pTable.columns.map(c => normalizeKey(c, opts)).filter(k => sMap.has(k));
        const sOrder = sTable.columns.map(c => normalizeKey(c, opts)).filter(k => {
          const pKeys = new Set(pTable.columns.map(c2 => normalizeKey(c2, opts)));
          return pKeys.has(k);
        });
        if (pOrder.length && sOrder.length && pOrder.join('|') !== sOrder.join('|')) {
          table.orderMismatch = true;
          table.orderNote = 'Matching columns appear in a different order between the two sheets.';
        }
      }

      // Types + samples
      if (opts.inferTypes) {
        pTable.columns.forEach(c => {
          table.primaryTypes[c] = inferType(pTable.rows.map(r => r[c]));
        });
        sTable.columns.forEach(c => {
          table.secondaryTypes[c] = inferType(sTable.rows.map(r => r[c]));
        });
      }
      if (opts.showSample) {
        pTable.columns.forEach(c => {
          table.primarySamples[c] = sampleValues(pTable.rows, c, 3);
        });
        sTable.columns.forEach(c => {
          table.secondarySamples[c] = sampleValues(sTable.rows, c, 3);
        });
      }
    }

    report.totals.tables += 1;
    if (sTable) report.totals.matchedTables += 1; else report.totals.missingTables += 1;
    report.totals.missingCols += table.missing.length;
    report.totals.redundantCols += table.redundant.length;
    report.totals.duplicateCols += table.duplicateInPrimary.length + table.duplicateInSecondary.length;
    report.totals.matchingCols += table.matching.length;

    report.tables.push(table);
  }

  // Extra sheets in secondary
  for (const sName of Object.keys(secondary.sheets)) {
    if (!secondaryUsed.has(sName)) {
      report.extraSheets.push({
        name: sName,
        columnCount: secondary.sheets[sName].columns.length,
        rowCount: secondary.sheets[sName].rowCount,
        columns: secondary.sheets[sName].columns,
      });
    }
  }

  return report;
}

/* =====================================================================
   Rendering
===================================================================== */
function renderReport(report) {
  state.lastReport = report;
  $('results').style.display = 'block';

  renderStats(report);
  renderSheetMapping(report);
  renderTables(report);
  renderExtraSheets(report);
  $('rawJson').textContent = JSON.stringify(report, null, 2);
}

function renderStats(r) {
  const t = r.totals;
  const items = [
    { cls: 'info',      num: t.tables,         lbl: 'Tables in Primary' },
    { cls: 'ok',        num: t.matchedTables,  lbl: 'Matched Tables' },
    { cls: 'missing',   num: t.missingTables,  lbl: 'Unmatched Tables' },
    { cls: 'ok',        num: t.matchingCols,   lbl: 'Matching Columns' },
    { cls: 'missing',   num: t.missingCols,    lbl: 'Missing Columns' },
    { cls: 'redundant', num: t.redundantCols,  lbl: 'Redundant Columns' },
    { cls: 'duplicate', num: t.duplicateCols,  lbl: 'Duplicate Columns' },
    { cls: 'info',      num: r.extraSheets.length, lbl: 'Extra Sheets in Secondary' },
  ];
  $('statGrid').innerHTML = items.map(i =>
    `<div class="stat ${i.cls}"><div class="num">${i.num}</div><div class="lbl">${i.lbl}</div></div>`
  ).join('');
}

function renderSheetMapping(report) {
  const card = $('sheetMappingCard');
  if (!state.primary || Object.keys(state.primary.sheets).length < 1) { card.style.display = 'none'; return; }
  card.style.display = 'block';

  const secondaryNames = Object.keys(state.secondary.sheets);
  const rows = Object.keys(state.primary.sheets).map(pName => {
    const cur = state.sheetMap[pName] || { to: null, score: 0 };
    const options = ['<option value="">— none —</option>']
      .concat(secondaryNames.map(s => {
        const selected = cur.to === s ? ' selected' : '';
        return `<option value="${escapeHtml(s)}"${selected}>${escapeHtml(s)}</option>`;
      })).join('');
    const scoreTxt = cur.score > 0 ? ` (similarity ${(cur.score * 100).toFixed(0)}%)` : '';
    return `<tr>
      <td><strong>${escapeHtml(pName)}</strong></td>
      <td><select data-primary="${escapeHtml(pName)}">${options}</select></td>
      <td style="color:var(--muted); font-size:0.8rem">${cur.to ? 'auto' + scoreTxt : 'unmatched'}</td>
    </tr>`;
  }).join('');

  $('sheetMappingBody').innerHTML = `
    <table class="mapping-table">
      <thead><tr><th>Primary Sheet</th><th>Maps to Secondary Sheet</th><th>Status</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;

  $('sheetMappingBody').querySelectorAll('select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const pName = e.target.getAttribute('data-primary');
      const newTarget = e.target.value || null;
      state.sheetMap[pName] = { to: newTarget, score: newTarget ? 1 : 0, auto: false };
      const rep = buildReport();
      renderReport(rep);
      toast('Mapping updated — report refreshed.');
    });
  });
}

function renderTables(report) {
  const container = $('tableReports');
  const opts = report.options;
  let html = '';
  report.tables.forEach((t, idx) => {
    const status = !t.secondarySheet
      ? { cls: 'missing', text: 'UNMATCHED' }
      : (t.missing.length || t.redundant.length || t.duplicateInPrimary.length || t.duplicateInSecondary.length)
        ? { cls: 'redundant', text: 'ISSUES FOUND' }
        : { cls: 'ok', text: 'ALL GOOD' };

    const header = `
      <div class="header">
        <h3>
          <span>📄 ${escapeHtml(t.primarySheet)}</span>
          ${t.secondarySheet ? `<span style="color:var(--muted); font-weight:400">→ ${escapeHtml(t.secondarySheet)}</span>` : ''}
          <span class="badge ${status.cls}">${status.text}</span>
        </h3>
        <div style="color:var(--muted); font-size:0.85rem">
          ${t.primaryRowCount} rows (P) · ${t.secondaryRowCount ?? '—'} rows (S)
        </div>
      </div>`;

    const body = `<div class="body">${renderTableBody(t, opts)}</div>`;

    html += `<div class="table-report ${idx < 3 ? 'open' : ''}" data-idx="${idx}">${header}${body}</div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.table-report .header').forEach(h => {
    h.addEventListener('click', () => h.parentElement.classList.toggle('open'));
  });
}

function renderTableBody(t, opts) {
  let out = '';

  // KV summary
  out += `<div class="kv">
    <div class="k">Primary sheet</div><div class="v">${escapeHtml(t.primarySheet)}</div>
    <div class="k">Secondary sheet</div><div class="v">${t.secondarySheet ? escapeHtml(t.secondarySheet) : '<em style="color:var(--missing)">— not found —</em>'}</div>
    <div class="k">Match type</div><div class="v">${t.matchType}${t.matchScore ? ' (' + (t.matchScore * 100).toFixed(0) + '%)' : ''}</div>
    <div class="k">Columns (P / S)</div><div class="v">${t.primaryColCount} / ${t.secondaryColCount ?? '—'}</div>
    <div class="k">Rows (P / S)</div><div class="v">${t.primaryRowCount} / ${t.secondaryRowCount ?? '—'}</div>
  </div>`;

  // Missing
  if (t.missing.length) {
    out += `<div class="col-section">
      <div class="title"><span class="badge missing">MISSING</span> In Primary, not in Secondary — ${t.missing.length}</div>
      <div class="chips">${t.missing.map(c => chipFor(c, 'missing', t.primaryTypes[c], opts)).join('')}</div>
    </div>`;
  }

  // Redundant
  if (t.redundant.length) {
    out += `<div class="col-section">
      <div class="title"><span class="badge redundant">REDUNDANT</span> In Secondary, not in Primary — ${t.redundant.length}</div>
      <div class="chips">${t.redundant.map(c => chipFor(c, 'redundant', t.secondaryTypes[c], opts)).join('')}</div>
    </div>`;
  }

  // Duplicates
  if (t.duplicateInPrimary.length) {
    out += `<div class="col-section">
      <div class="title"><span class="badge duplicate">DUPLICATE</span> Duplicated within Primary — ${t.duplicateInPrimary.length}</div>
      <div class="chips">${t.duplicateInPrimary.map(c => `<span class="chip duplicate">${escapeHtml(c)}</span>`).join('')}</div>
    </div>`;
  }
  if (t.duplicateInSecondary.length) {
    out += `<div class="col-section">
      <div class="title"><span class="badge duplicate">DUPLICATE</span> Duplicated within Secondary — ${t.duplicateInSecondary.length}</div>
      <div class="chips">${t.duplicateInSecondary.map(c => `<span class="chip duplicate">${escapeHtml(c)}</span>`).join('')}</div>
    </div>`;
  }

  // Matching
  if (opts.showMatches && t.matching.length) {
    out += `<div class="col-section">
      <div class="title"><span class="badge ok">MATCHING</span> Present in both — ${t.matching.length}</div>
      <div class="chips">${t.matching.map(m => {
        const sameName = m.primary === m.secondary;
        const label = sameName ? m.primary : `${m.primary} ↔ ${m.secondary}`;
        const typeP = t.primaryTypes[m.primary];
        return `<span class="chip ok">${escapeHtml(label)}${typeP ? `<span class="type-tag">${typeP}</span>` : ''}</span>`;
      }).join('')}</div>
    </div>`;
  }

  // Order warning
  if (opts.checkOrder && t.orderMismatch) {
    out += `<div class="order-warn">⚠️ <strong>Column order differs.</strong> ${escapeHtml(t.orderNote)}</div>`;
  }

  // Sample values
  if (opts.showSample && t.secondarySheet) {
    const cols = Object.keys(t.primarySamples);
    if (cols.length) {
      out += `<details class="raw"><summary>Sample values (first 3 non-empty per column)</summary>
        <table class="mapping-table">
          <thead><tr><th>Column</th><th>Primary samples</th><th>Secondary samples</th></tr></thead>
          <tbody>
            ${cols.map(c => {
              const ps = (t.primarySamples[c] || []).map(escapeHtml).join(', ') || '—';
              const ss = (t.secondarySamples[c] || []).map(escapeHtml).join(', ') || '—';
              return `<tr><td><code>${escapeHtml(c)}</code></td><td>${ps}</td><td>${ss}</td></tr>`;
            }).join('')}
          </tbody>
        </table>
      </details>`;
    }
  }

  return out;
}

function chipFor(name, kind, type, opts) {
  const typeTag = type ? `<span class="type-tag">${type}</span>` : '';
  return `<span class="chip ${kind}">${escapeHtml(name)}${typeTag}</span>`;
}

function renderExtraSheets(report) {
  const card = $('extraSheetsCard');
  if (!report.extraSheets.length) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  $('extraSheetsBody').innerHTML = report.extraSheets.map(s => `
    <div class="col-section">
      <div class="title"><span class="badge info">EXTRA</span> ${escapeHtml(s.name)} — ${s.columnCount} columns · ${s.rowCount} rows</div>
      <div class="chips">${s.columns.map(c => `<span class="chip ok">${escapeHtml(c)}</span>`).join('') || '<em style="color:var(--muted)">no columns</em>'}</div>
    </div>
  `).join('');
}

/* =====================================================================
   Export
===================================================================== */
function downloadBlob(content, mime, filename) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

$('exportJson').addEventListener('click', () => {
  if (!state.lastReport) return;
  downloadBlob(JSON.stringify(state.lastReport, null, 2), 'application/json', 'schema-report.json');
  toast('Report downloaded (JSON).');
});

$('exportCsv').addEventListener('click', () => {
  if (!state.lastReport) return;
  const rows = [['Table', 'Issue', 'Column', 'Detail']];
  state.lastReport.tables.forEach(t => {
    t.missing.forEach(c => rows.push([t.primarySheet, 'missing', c, 'in primary, not in secondary']));
    t.redundant.forEach(c => rows.push([t.secondarySheet || '', 'redundant', c, 'in secondary, not in primary']));
    t.duplicateInPrimary.forEach(c => rows.push([t.primarySheet, 'duplicate-primary', c, 'appears multiple times']));
    t.duplicateInSecondary.forEach(c => rows.push([t.secondarySheet || '', 'duplicate-secondary', c, 'appears multiple times']));
    t.matching.forEach(m => rows.push([t.primarySheet, 'match', m.primary, 'matched' + (m.primary !== m.secondary ? ' to ' + m.secondary : '')]));
  });
  state.lastReport.extraSheets.forEach(s => rows.push([s.name, 'extra-sheet', '', s.columnCount + ' columns, ' + s.rowCount + ' rows']));
  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  downloadBlob(csv, 'text/csv', 'schema-report.csv');
  toast('Report downloaded (CSV).');
});

/* =====================================================================
   Utility
===================================================================== */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}

function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2200);
}

/* =====================================================================
   Run
===================================================================== */
$('runBtn').addEventListener('click', async () => {
  if (!state.primary || !state.secondary) return;
  const btn = $('runBtn');
  const status = $('runStatus');
  btn.disabled = true;
  const oldText = btn.textContent;
  btn.innerHTML = '<span class="spinner"></span>Running…';
  status.textContent = 'Analyzing ' + Object.keys(state.primary.sheets).length + ' primary table(s)…';

  try {
    const opts = getOpts();
    state.sheetMap = autoMapSheets(state.primary, state.secondary, opts);
    const report = buildReport();
    renderReport(report);
    status.textContent = '✔ Done at ' + new Date().toLocaleTimeString();
    toast('Comparison complete.');
    // Auto scroll
    setTimeout(() => $('results').scrollIntoView({ behavior: 'smooth' }), 100);
  } catch (e) {
    console.error(e);
    status.textContent = '❌ Error: ' + e.message;
    toast('Error running comparison.');
  } finally {
    btn.innerHTML = oldText;
    btn.disabled = false;
  }
});

$('expandAll').addEventListener('click', () => {
  document.querySelectorAll('.table-report').forEach(el => el.classList.add('open'));
});
$('collapseAll').addEventListener('click', () => {
  document.querySelectorAll('.table-report').forEach(el => el.classList.remove('open'));
});
</script>
</body>
</html>
