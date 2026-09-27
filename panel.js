/* panel.js — loaded by the DBMS MCQ bookmarklet */
(function () {
  var V = 'https://amansurntuta.github.io/vault/vault.html';

  // Clean up any previous run
  if (window.__dbmsPanel) { try { window.__dbmsPanel.remove(); } catch (e) {} window.__dbmsPanel = null; }
  if (window.__dbmsBusy) { return; }
  window.__dbmsBusy = true;
  setTimeout(function () { window.__dbmsBusy = false; }, 800);

  // --- tiny helpers ---
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // --- status toast ---
  var st = document.createElement('div');
  st.style.cssText = 'position:fixed;top:20px;right:20px;z-index:2147483647;background:#0b1220;color:#38bdf8;padding:10px 16px;border-radius:10px;font-family:system-ui,sans-serif;font-size:13px;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,.5);border:1px solid #1f2a44;';
  st.textContent = '\uD83D\uDCDA Loading DBMS Vault...';
  document.body.appendChild(st);

  // --- open vault popup to fetch notes ---
  var w = window.open(V, '_blank', 'width=1,height=1,left=-1000,top=-1000');
  if (!w) {
    st.textContent = 'Popup blocked. Allow popups for this site.';
    setTimeout(function () { st.remove(); }, 3000);
    return;
  }

  var received = false;
  function gotNotes(e) {
    if (e.origin !== new URL(V).origin) return;
    var d = e.data || {};
    if (d.type !== 'DBMS_NOTES') return;
    received = true;
    window.removeEventListener('message', gotNotes);
    try { w.close(); } catch (e) {}
    if (st.parentNode) st.remove();
    if (!d.notes) { alert('Vault is empty. Upload a PDF in the vault first.'); return; }
    initPanel(d.notes, d.transcript || '');
  }
  window.addEventListener('message', gotNotes);

  var tries = 0;
  var iv = setInterval(function () {
    if (received) { clearInterval(iv); return; }
    if (tries++ > 40) {
      clearInterval(iv);
      try { w.close(); } catch (e) {}
      if (st.parentNode) st.remove();
      alert('Could not reach vault. Is it open at ' + V + ' ?');
      return;
    }
    try { w.postMessage({ type: 'GET_NOTES' }, '*'); } catch (e) {}
  }, 150);

  // --- subtopic extractor ---
  function extractSubtopics(text) {
    var lines = text.split(/\r?\n/);
    var subs = [], cur = null;
    var numRe = /^\s*(\d+)\.\s+(.{2,120})$/;
    var pgRe = /^=+\s*Page\s+\d+\s*=+/i;
    for (var i = 0; i < lines.length; i++) {
      var L = lines[i];
      if (pgRe.test(L)) continue;
      var m = L.match(numRe);
      if (m) {
        var title = m[2].replace(/[:\-\s]+$/, '').trim();
        if (title.length < 3) continue;
        if (cur) subs.push(cur);
        cur = { title: title, body: '' };
      } else if (cur) {
        cur.body += L + '\n';
      }
    }
    if (cur) subs.push(cur);
    var seen = {}, out = [];
    subs.forEach(function (s) {
      var k = s.title.toLowerCase();
      if (!seen[k] && s.body.trim().length > 20) { seen[k] = 1; out.push(s); }
    });
    return out.slice(0, 80);
  }

  // --- load Puter.js ---
  function loadPuter(cb) {
    if (window.puter && window.puter.ai) { cb(); return; }
    var s = document.createElement('script');
    s.src = 'https://js.puter.com/v2/';
    s.onload = cb;
    s.onerror = function () { alert('Failed to load Puter.js.'); };
    document.head.appendChild(s);
  }

  // --- panel ---
  function initPanel(notes, transcript) {
    var p = document.createElement('div');
    p.id = '__dbms_panel__';
    p.style.cssText = 'position:fixed;top:20px;right:20px;width:440px;max-height:88vh;overflow:auto;background:#0b1220;color:#e2e8f0;z-index:2147483647;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.65);font-family:system-ui,sans-serif;padding:18px;border:1px solid #1f2a44;';
    p.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><b style="color:#38bdf8;font-size:17px;">\uD83D\uDCDA DBMS MCQ \u00B7 Puter AI</b><span id="__x" style="cursor:pointer;font-size:22px;color:#94a3b8;">&times;</span></div><div id="__body"></div>';
    document.body.appendChild(p);
    window.__dbmsPanel = p;
    p.querySelector('#__x').onclick = function () { p.remove(); window.__dbmsPanel = null; };

    var body = p.querySelector('#__body');
    var subs = extractSubtopics(notes);
    if (!subs.length) { body.innerHTML = '<div style="color:#f87171;">No subtopics detected.</div>'; return; }

    var h = '<div style="color:#94a3b8;font-size:13px;margin-bottom:8px;">Choose a subtopic \u2014 AI will generate 10 MCQs:</div>';
    h += '<select id="__sel" style="width:100%;padding:10px;background:#0e1730;color:#e2e8f0;border:1px solid #1f2a44;border-radius:8px;font-size:14px;">';
    subs.forEach(function (s, i) { h += '<option value="' + i + '">' + esc(s.title) + '</option>'; });
    h += '</select>';
    h += '<button id="__gen" style="margin-top:12px;width:100%;background:#38bdf8;color:#0b1220;border:0;padding:12px;border-radius:8px;font-weight:800;cursor:pointer;font-size:15px;">Generate 10 MCQs with AI</button>';
    h += '<div id="__quiz" style="margin-top:14px;"></div>';
    body.innerHTML = h;

    body.querySelector('#__gen').onclick = function () {
      var idx = parseInt(body.querySelector('#__sel').value, 10);
      askPuter(subs[idx], transcript);
    };
  }

  function askPuter(sub, transcript) {
    var qb = document.getElementById('__quiz');
    qb.innerHTML = '<div style="color:#38bdf8;">\u23F3 Calling Puter AI (first time may prompt sign-in)...</div>';
    loadPuter(async function () {
      try {
        var chunk = (sub.body + '\n' + transcript).slice(0, 5000);
        var prompt = 'You are a DBMS exam generator.\nUsing ONLY the notes below, generate 10 multiple-choice questions on the subtopic "' + sub.title + '".\nRules:\n- 4 options each (A-D), exactly one correct.\n- Return STRICT JSON only, no markdown fences, no prose.\n- Schema: {"questions":[{"q":"...","opts":["A","B","C","D"],"ans":0}]}\n\nNOTES:\n' + chunk;
        var response = await puter.ai.chat(prompt);
        var raw = typeof response === 'string' ? response : (response && response.message && response.message.content ? response.message.content : JSON.stringify(response));
        raw = raw.replace(/```json\s*/gi, '').replace(/```/g, '').trim();
        var parsed = JSON.parse(raw);
        var questions = parsed.questions || [];
        if (!questions.length) throw new Error('No questions returned');
        render(qb, sub.title, questions);
      } catch (err) {
        console.error('[DBMS]', err);
        qb.innerHTML = '<div style="color:#f87171;">AI error: ' + esc(err.message) + '</div>';
      }
    });
  }

  function render(container, title, questions) {
    var h = '<div style="background:#0e1730;padding:12px;border-radius:8px;border-left:4px solid #38bdf8;margin-bottom:12px;"><b style="color:#38bdf8;">' + esc(title) + '</b><div style="font-size:12px;color:#94a3b8;margin-top:4px;">' + questions.length + ' MCQs \u00B7 Puter AI</div></div>';
    questions.forEach(function (q, i) {
      h += '<div style="background:#0e1730;padding:12px;border-radius:8px;margin-bottom:10px;">';
      h += '<div style="font-weight:600;margin-bottom:8px;color:#f1f5f9;">Q' + (i + 1) + '. ' + esc(q.q) + '</div>';
      (q.opts || []).forEach(function (o, j) {
        h += '<div class="__opt" data-i="' + i + '" data-j="' + j + '" style="padding:7px 11px;margin:5px 0;background:#0b1220;border-radius:6px;cursor:pointer;border:1px solid #1f2a44;"><b style="color:#38bdf8;">' + String.fromCharCode(65 + j) + '.</b> ' + esc(o) + '</div>';
      });
      h += '<div id="__ans' + i + '" style="margin-top:6px;font-size:12px;color:#6ee7b7;display:none;">\u2714 Answer: ' + String.fromCharCode(65 + q.ans) + ' \u2014 ' + esc(q.opts[q.ans]) + '</div>';
      h += '</div>';
    });
    container.innerHTML = h;
    container.querySelectorAll('.__opt').forEach(function (el) {
      el.onclick = function () {
        var i = +el.dataset.i, j = +el.dataset.j;
        var correct = questions[i].ans;
        container.querySelectorAll('.__opt[data-i="' + i + '"]').forEach(function (x) { x.style.background = '#0b1220'; x.style.borderColor = '#1f2a44'; });
        if (j === correct) { el.style.background = '#064e3b'; el.style.borderColor = '#10b981'; }
        else { el.style.background = '#7f1d1d'; el.style.borderColor = '#ef4444'; }
        var a = document.getElementById('__ans' + i);
        if (a) a.style.display = 'block';
      };
    });
  }
})();
