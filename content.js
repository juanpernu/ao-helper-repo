// ============================================================
// AO Web Helper - Content Script
// Se inyecta en aoweb.app/play y muestra overlay con guía
// ============================================================

(function() {
  'use strict';

  let currentTab = 'leveling';
  let panelCollapsed = false;

  // --- INIT: Try multiple strategies to detect the game ---
  function init() {
    console.log('[AO Helper] Script cargado en', window.location.href);

    // Strategy 1: If we're on /play, try immediately after a delay
    if (window.location.pathname.includes('/play')) {
      console.log('[AO Helper] Ruta /play detectada, esperando carga del juego...');
      setTimeout(createPanel, 3000);  // 3 seconds should be enough
      return;
    }

    // Strategy 2: Watch for URL changes (SPA navigation)
    let lastUrl = window.location.href;
    const observer = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        lastUrl = window.location.href;
        if (window.location.pathname.includes('/play')) {
          console.log('[AO Helper] Navegación a /play detectada');
          setTimeout(createPanel, 3000);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Strategy 3: Also check periodically
    let attempts = 0;
    const checker = setInterval(() => {
      attempts++;
      if (window.location.pathname.includes('/play')) {
        clearInterval(checker);
        setTimeout(createPanel, 2000);
      }
      if (attempts > 30) clearInterval(checker); // Stop after 30 seconds
    }, 1000);
  }

  // --- Create the overlay panel ---
  function createPanel() {
    // Don't create if already exists
    if (document.getElementById('ao-helper-panel')) {
      console.log('[AO Helper] Panel ya existe');
      return;
    }

    console.log('[AO Helper] Creando panel...');

    const panel = document.createElement('div');
    panel.id = 'ao-helper-panel';
    panel.innerHTML = buildPanelHTML();
    document.body.appendChild(panel);

    makeResizable(panel);
    attachEvents(panel);
    loadSettings();

    console.log('[AO Helper] ¡Panel creado! Usa Alt+H para mostrar/ocultar.');
  }

  // --- Build panel HTML ---
  function buildPanelHTML() {
    return `
      <div class="aoh-resize-handle" id="aoh-resize-handle"></div>
      <div class="aoh-header">
        <span class="aoh-title">🧙 AO Helper</span>
        <div class="aoh-header-buttons">
          <button class="aoh-btn-minimize" id="aoh-minimize" title="Minimizar">◀</button>
          <button class="aoh-btn-close" id="aoh-close" title="Cerrar">✕</button>
        </div>
      </div>
      <div class="aoh-body" id="aoh-body">
        <div class="aoh-config">
          <div class="aoh-config-row">
            <label>Clase:</label>
            <select id="aoh-class">
              <option value="1">🧙 Mago</option>
              <option value="2">⛪ Clérigo</option>
              <option value="3">⚔️ Guerrero</option>
              <option value="4">🗡️ Asesino</option>
              <option value="5">🦹 Ladrón</option>
              <option value="6">🎵 Bardo</option>
              <option value="7">🌿 Druida</option>
              <option value="8">🛡️ Paladín</option>
              <option value="9">🏹 Cazador</option>
              <option value="10">⛏️ Trabajador</option>
              <option value="11">🏴‍☠️ Pirata</option>
            </select>
          </div>
          <div class="aoh-config-row">
            <label>Nivel:</label>
            <input type="number" id="aoh-level" min="1" max="50" value="1" />
          </div>
        </div>
        <div class="aoh-tabs">
          <button class="aoh-tab active" data-tab="leveling">📍 Leveo</button>
          <button class="aoh-tab" data-tab="spells">✨ Hechizos</button>
          <button class="aoh-tab" data-tab="equip">🛡️ Equipo</button>
          <button class="aoh-tab" data-tab="pois">🗺️ Mapa</button>
        </div>
        <div class="aoh-content" id="aoh-content"></div>
        <div class="aoh-footer">
          <button class="aoh-footer-feedback" id="aoh-feedback-btn">💡 Sugerencias</button>
          <div class="aoh-footer-credit">hecho con 💜 por <a href="https://www.juanpernumian.com.ar" target="_blank" rel="noopener">Juanpernu</a></div>
        </div>
      </div>
    `;
  }

  // --- Tab content builders ---

  function buildLevelingContent(level, classId) {
    const rec = AO_DATA.getRecommendation(level, classId);
    if (rec.spots.length === 0) {
      return '<div class="aoh-empty">No hay datos de leveo para nivel ' + level + '.</div>';
    }
    let html = '<div class="aoh-section-title">Zonas para Nivel ' + level + ' (' + rec.clase.nombre + ')</div>';
    rec.spots.forEach((spot, i) => {
      const classTip = spot.claseTip && spot.claseTip[classId] ? spot.claseTip[classId] : '';
      html += '<div class="aoh-card' + (i === 0 ? ' aoh-card-highlight' : '') + '">' +
        '<div class="aoh-card-title">' + spot.zona + '</div>' +
        '<div class="aoh-card-detail"><span class="aoh-label">Mapas:</span> ' + spot.mapas + '</div>' +
        (spot.acceso ? '<div class="aoh-card-detail aoh-card-acceso"><span class="aoh-label">🚪 Cómo llegar:</span> ' + spot.acceso + '</div>' : '') +
        '<div class="aoh-card-detail"><span class="aoh-label">Criaturas:</span> ' + spot.criaturas + '</div>' +
        '<div class="aoh-card-detail"><span class="aoh-label">Exp:</span> ' + spot.expAprox + '</div>' +
        '<div class="aoh-card-tip">' + spot.tips + '</div>' +
        (classTip ? '<div class="aoh-card-class-tip">💡 <strong>' + rec.clase.nombre + ':</strong> ' + classTip + '</div>' : '') +
        '</div>';
    });
    if (rec.relevantDungeons.length > 0) {
      html += '<div class="aoh-section-title" style="margin-top:10px">Dungeons disponibles</div>';
      rec.relevantDungeons.forEach(d => {
        html += '<div class="aoh-mini-card">' +
          '<span class="aoh-poi-icon">' + d.icon + '</span>' +
          '<span class="aoh-poi-name">' + d.nombre + '</span>' +
          '<span class="aoh-poi-detail">' + (d.mapa ? 'Mapa ' + d.mapa : '') + ' Nv ' + d.nivelMin + '-' + d.nivelMax + '</span>' +
          '</div>';
      });
    }
    return html;
  }

  function buildSpellsContent(level, classId) {
    const rec = AO_DATA.getRecommendation(level, classId);
    let html = '';

    if (rec.currentSpellPhase) {
      html += '<div class="aoh-section-title">Hechizos para ' + rec.clase.nombre + ' Nivel ' + rec.currentSpellPhase.nivel + '</div>' +
        '<div class="aoh-card aoh-card-highlight">' +
        '<div class="aoh-card-title">Hechizos a tener ahora</div>' +
        '<div class="aoh-spell-list">' +
        rec.currentSpellPhase.hechizos.map(function(s) { return '<span class="aoh-spell-badge">✨ ' + s + '</span>'; }).join('') +
        '</div>' +
        '<div class="aoh-card-tip">' + rec.currentSpellPhase.tip + '</div>' +
        '</div>';
    } else if (rec.clase.tipo === 'física' || rec.clase.tipo === 'oficio') {
      html += '<div class="aoh-empty">Tu clase (' + rec.clase.nombre + ') no usa hechizos como recurso principal. Enfocate en equipo y stats.</div>';
    } else {
      html += '<div class="aoh-empty">No hay guía de hechizos específica para ' + rec.clase.nombre + ' aún.</div>';
    }

    if (rec.spellProg) {
      html += '<div class="aoh-section-title" style="margin-top:10px">Progresión completa</div>';
      rec.spellProg.fases.forEach(function(fase) {
        var isCurrent = fase === rec.currentSpellPhase;
        html += '<div class="aoh-mini-card' + (isCurrent ? ' aoh-mini-current' : '') + '">' +
          '<span class="aoh-fase-level">Nv ' + fase.nivel + '</span>' +
          '<span class="aoh-fase-spells">' + fase.hechizos.join(', ') + '</span>' +
          '</div>';
      });
    }

    // Helper to render spell vendor/price info
    function spellVendorHTML(spell) {
      var extra = '';
      if (spell.precio) {
        extra += '<div class="aoh-spell-price">💰 ' + spell.precio + '</div>';
      }
      if (spell.vendedor) {
        extra += '<div class="aoh-spell-vendor">🏪 ' + spell.vendedor + '</div>';
      }
      if (spell.staffAffected) {
        extra += '<div class="aoh-spell-staff">🔮 Afectado por báculo (-26% maná con Báculo Engarzado)</div>';
      }
      return extra;
    }

    var availableSpells = AO_DATA.spells.ofensivos
      .filter(function(s) { return s.clases.indexOf(classId) !== -1 && level >= s.nivelReq; })
      .sort(function(a, b) { return b.nivelReq - a.nivelReq; });

    if (availableSpells.length > 0) {
      html += '<div class="aoh-section-title" style="margin-top:10px">Hechizos ofensivos disponibles</div>';
      availableSpells.forEach(function(spell) {
        html += '<div class="aoh-spell-card">' +
          '<div class="aoh-spell-name">' + spell.nombre + '</div>' +
          '<div class="aoh-spell-stats"><span>Maná: ' + spell.mana + '</span><span>Daño: ' + spell.dano + '</span><span>Skill: ' + spell.minSkill + '</span></div>' +
          spellVendorHTML(spell) +
          '<div class="aoh-spell-desc">' + spell.desc + '</div></div>';
      });
    }

    // Next spells to unlock (offensive)
    var nextOffSpells = AO_DATA.spells.ofensivos
      .filter(function(s) { return s.clases.indexOf(classId) !== -1 && level < s.nivelReq; })
      .sort(function(a, b) { return a.nivelReq - b.nivelReq; })
      .slice(0, 2);
    if (nextOffSpells.length > 0) {
      html += '<div class="aoh-extras-title">Próximos hechizos ofensivos</div>';
      nextOffSpells.forEach(function(spell) {
        html += '<div class="aoh-spell-card" style="opacity:0.7">' +
          '<div class="aoh-spell-name">🔒 ' + spell.nombre + ' <span style="color:#ff9800;font-size:10px">(Nv ' + spell.nivelReq + ')</span></div>' +
          '<div class="aoh-spell-stats"><span>Maná: ' + spell.mana + '</span><span>Daño: ' + spell.dano + '</span><span>Skill: ' + spell.minSkill + '</span></div>' +
          spellVendorHTML(spell) +
          '</div>';
      });
    }

    var availableHeals = AO_DATA.spells.curacion
      .filter(function(s) { return s.clases.indexOf(classId) !== -1 && level >= s.nivelReq; });
    if (availableHeals.length > 0) {
      html += '<div class="aoh-section-title" style="margin-top:10px">Curación disponible</div>';
      availableHeals.forEach(function(spell) {
        html += '<div class="aoh-spell-card aoh-spell-heal">' +
          '<div class="aoh-spell-name">💚 ' + spell.nombre + '</div>' +
          '<div class="aoh-spell-stats"><span>Maná: ' + spell.mana + '</span><span>Cura: ' + spell.cura + '</span><span>Skill: ' + spell.minSkill + '</span></div>' +
          spellVendorHTML(spell) +
          '<div class="aoh-spell-desc">' + spell.desc + '</div></div>';
      });
    }

    var availableSupport = AO_DATA.spells.soporte
      .filter(function(s) { return s.clases.indexOf(classId) !== -1 && level >= s.nivelReq; });
    if (availableSupport.length > 0) {
      html += '<div class="aoh-section-title" style="margin-top:10px">Soporte disponible</div>';
      availableSupport.forEach(function(spell) {
        html += '<div class="aoh-spell-card aoh-spell-support">' +
          '<div class="aoh-spell-name">🔮 ' + spell.nombre + '</div>' +
          '<div class="aoh-spell-stats"><span>Maná: ' + spell.mana + '</span><span>Skill: ' + spell.minSkill + '</span></div>' +
          spellVendorHTML(spell) +
          '<div class="aoh-spell-desc">' + spell.desc + '</div></div>';
      });
    }

    // Next support spells to unlock
    var nextSupportSpells = AO_DATA.spells.soporte
      .filter(function(s) { return s.clases.indexOf(classId) !== -1 && level < s.nivelReq; })
      .sort(function(a, b) { return a.nivelReq - b.nivelReq; })
      .slice(0, 2);
    if (nextSupportSpells.length > 0) {
      html += '<div class="aoh-extras-title">Próximos hechizos de soporte</div>';
      nextSupportSpells.forEach(function(spell) {
        html += '<div class="aoh-spell-card aoh-spell-support" style="opacity:0.7">' +
          '<div class="aoh-spell-name">🔒 ' + spell.nombre + ' <span style="color:#ff9800;font-size:10px">(Nv ' + spell.nivelReq + ')</span></div>' +
          spellVendorHTML(spell) +
          '</div>';
      });
    }

    // Vendor locations section
    if (AO_DATA.spellVendors) {
      html += '<div class="aoh-section-title" style="margin-top:12px">NPCs vendedores de hechizos</div>';
      AO_DATA.spellVendors.forEach(function(v) {
        var nivelClass = v.nivel === 'Básico' ? '#8bc34a' : v.nivel === 'Intermedio' ? '#ffc107' : v.nivel === 'Alto' ? '#ff9800' : '#f44336';
        html += '<div class="aoh-mini-card">' +
          '<span class="aoh-poi-icon">🧙</span>' +
          '<div style="flex:1">' +
          '<div class="aoh-poi-name">' + v.nombre + '</div>' +
          '<div class="aoh-poi-detail">' + v.ciudad + (v.mapa ? ' (Mapa ' + v.mapa + ')' : '') + '</div>' +
          '<div style="font-size:10px;color:' + nivelClass + '">' + v.nivel + ' — ' + v.desc + '</div>' +
          '</div>' +
          '</div>';
      });
    }

    return html;
  }

  function buildEquipContent(level, classId) {
    const rec = AO_DATA.getRecommendation(level, classId);
    const equip = rec.equipData;
    let html = '<div class="aoh-section-title">Equipo para ' + equip.nombre + ' Nivel ' + level + '</div>';
    if (equip.nota) html += '<div class="aoh-note">' + equip.nota + '</div>';

    if (rec.currentEquipPhase) {
      var phase = rec.currentEquipPhase;
      html += '<div class="aoh-card aoh-card-highlight">' +
        '<div class="aoh-card-title">Equipo recomendado (Nivel ' + phase.nivel + ')</div>';

      // Render detailed items
      if (phase.items) {
        phase.items.forEach(function(item) {
          html += '<div class="aoh-item-row">' +
            '<div class="aoh-item-header">' +
              '<span class="aoh-item-slot">' + item.slot + '</span>' +
              '<span class="aoh-item-name">' + item.nombre + '</span>' +
            '</div>' +
            '<div class="aoh-item-stats">' + item.stats + '</div>' +
            '<div class="aoh-item-where">' + item.donde + '</div>' +
            (item.precio ? '<div class="aoh-item-price">💰 ' + item.precio + '</div>' : '') +
            (item.nivelReq ? '<div class="aoh-item-lvl">📊 Nivel mínimo: ' + item.nivelReq + '</div>' : '') +
            '</div>';
        });
      }

      // Render extras (potions, accessories)
      if (phase.extras) {
        html += '<div class="aoh-extras-title">Consumibles y extras</div>';
        phase.extras.forEach(function(extra) {
          html += '<div class="aoh-extra-row">' +
            '<span class="aoh-extra-name">' + extra.nombre + '</span>' +
            '<span class="aoh-extra-where">' + extra.donde + '</span>' +
            (extra.tip ? '<div class="aoh-extra-tip">' + extra.tip + '</div>' : '') +
            '</div>';
        });
      }

      if (phase.tip) {
        html += '<div class="aoh-card-class-tip">💡 ' + phase.tip + '</div>';
      }
      html += '</div>';
    }

    // Progression summary
    html += '<div class="aoh-section-title" style="margin-top:10px">Progresión de equipo</div>';
    equip.fases.forEach(function(phase) {
      var isCurrent = phase === rec.currentEquipPhase;
      var summary = '';
      if (phase.items && phase.items.length > 0) {
        summary = phase.items.filter(function(i) { return i.slot.indexOf('alt') === -1; }).map(function(i) { return i.nombre; }).join(' · ');
      }
      html += '<div class="aoh-mini-card' + (isCurrent ? ' aoh-mini-current' : '') + '">' +
        '<span class="aoh-fase-level">Nv ' + phase.nivel + '</span>' +
        '<span class="aoh-fase-spells">' + summary + '</span></div>';
    });
    return html;
  }

  function buildPoisContent(level, classId) {
    const rec = AO_DATA.getRecommendation(level, classId);
    let html = '<div class="aoh-section-title">Ciudades</div>';
    AO_DATA.pois.ciudades.forEach(function(city) {
      html += '<div class="aoh-mini-card">' +
        '<span class="aoh-poi-icon">' + city.icon + '</span>' +
        '<span class="aoh-poi-name">' + city.nombre + (city.segura ? '' : ' ⚠️') + '</span>' +
        '<span class="aoh-poi-detail">' + (city.mapa ? 'Mapa ' + city.mapa : '') + '</span></div>';
    });
    if (rec.relevantDungeons.length > 0) {
      html += '<div class="aoh-section-title" style="margin-top:10px">Dungeons para tu nivel</div>';
      rec.relevantDungeons.forEach(function(d) {
        html += '<div class="aoh-card"><div class="aoh-card-title">' + d.icon + ' ' + d.nombre + '</div>' +
          '<div class="aoh-card-detail"><span class="aoh-label">Mapa:</span> ' + (d.mapa || 'Variable') + '</div>' +
          '<div class="aoh-card-detail"><span class="aoh-label">Niveles:</span> ' + d.nivelMin + ' - ' + d.nivelMax + '</div>' +
          '<div class="aoh-card-tip">' + d.desc + '</div></div>';
      });
    }
    html += '<div class="aoh-section-title" style="margin-top:10px">Todos los dungeons</div>';
    AO_DATA.pois.dungeons.forEach(function(d) {
      var inRange = level >= d.nivelMin && level <= d.nivelMax;
      html += '<div class="aoh-mini-card' + (inRange ? ' aoh-mini-current' : '') + '">' +
        '<span class="aoh-poi-icon">' + d.icon + '</span>' +
        '<span class="aoh-poi-name">' + d.nombre + '</span>' +
        '<span class="aoh-poi-detail">Nv ' + d.nivelMin + '-' + d.nivelMax + (d.mapa ? ' · Mapa ' + d.mapa : '') + '</span></div>';
    });
    return html;
  }

  function buildFeedbackContent() {
    return '<div class="aoh-section-title">💡 Sugerencias y Pedidos</div>' +
      '<div class="aoh-card">' +
        '<div class="aoh-card-tip" style="margin-bottom:8px">¿Tenés ideas para mejorar AO Helper? ¿Querés pedir una feature nueva? ¡Escribí tu sugerencia y la recibimos al instante!</div>' +
        '<div class="aoh-feedback-form">' +
          '<select id="aoh-feedback-type" class="aoh-feedback-select">' +
            '<option value="sugerencia">💡 Sugerencia</option>' +
            '<option value="bug">🐛 Bug / Error</option>' +
            '<option value="feature">🚀 Pedido de feature</option>' +
            '<option value="datos">📊 Corrección de datos</option>' +
            '<option value="otro">💬 Otro</option>' +
          '</select>' +
          '<textarea id="aoh-feedback-text" class="aoh-feedback-textarea" rows="5" placeholder="Describí tu sugerencia, bug o pedido acá..."></textarea>' +
          '<button id="aoh-feedback-send" class="aoh-feedback-send">📨 Enviar sugerencia</button>' +
        '</div>' +
      '</div>' +
      '<div class="aoh-card" style="margin-top:10px">' +
        '<div class="aoh-card-title">Sobre AO Helper</div>' +
        '<div class="aoh-card-tip">Extensión de Chrome para Argentum Online Web (aoweb.app). Guía interactiva de leveleo, hechizos, equipamiento y mapa.</div>' +
        '<div class="aoh-card-detail" style="margin-top:6px">Versión 1.0.0</div>' +
        '<div class="aoh-card-detail">hecho con 💜 por <a href="https://www.juanpernumian.com.ar" target="_blank" rel="noopener" style="color:#ce93d8;text-decoration:underline">Juanpernu</a></div>' +
      '</div>';
  }

  // --- Update content ---
  function updateContent() {
    var contentEl = document.getElementById('aoh-content');
    if (!contentEl) return;
    var levelEl = document.getElementById('aoh-level');
    var classEl = document.getElementById('aoh-class');
    if (!levelEl || !classEl) return;
    var level = parseInt(levelEl.value) || 1;
    var classId = parseInt(classEl.value) || 1;
    var html = '';
    switch (currentTab) {
      case 'leveling': html = buildLevelingContent(level, classId); break;
      case 'spells':   html = buildSpellsContent(level, classId); break;
      case 'equip':    html = buildEquipContent(level, classId); break;
      case 'pois':     html = buildPoisContent(level, classId); break;
      case 'feedback': html = buildFeedbackContent(); break;
    }
    contentEl.innerHTML = html;

    // Bind feedback send button if on feedback tab
    if (currentTab === 'feedback') {
      var sendBtn = document.getElementById('aoh-feedback-send');
      if (sendBtn) {
        sendBtn.addEventListener('click', function() {
          var typeEl = document.getElementById('aoh-feedback-type');
          var textEl = document.getElementById('aoh-feedback-text');
          var tipo = typeEl ? typeEl.value : 'sugerencia';
          var texto = textEl ? textEl.value.trim() : '';
          if (!texto) {
            textEl.placeholder = '⚠️ Escribí algo antes de enviar...';
            textEl.style.borderColor = '#f44336';
            return;
          }
          // Disable button while sending
          sendBtn.disabled = true;
          sendBtn.textContent = '⏳ Enviando...';
          var tipoLabels = { sugerencia: 'Sugerencia', bug: 'Bug/Error', feature: 'Pedido de Feature', datos: 'Corrección de datos', otro: 'Otro' };
          var tipoLabel = tipoLabels[tipo] || tipo;

          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              access_key: 'TU_ACCESS_KEY_ACA',
              subject: '[AO Helper] ' + tipoLabel,
              from_name: 'AO Helper Feedback',
              tipo: tipoLabel,
              message: texto,
              source: 'AO Helper v1.0.0'
            })
          })
          .then(function(res) { return res.json(); })
          .then(function(data) {
            if (data.success) {
              textEl.value = '';
              textEl.placeholder = '✅ ¡Sugerencia enviada! Gracias por tu feedback.';
              textEl.style.borderColor = '#8bc34a';
              sendBtn.textContent = '✅ Enviado';
              setTimeout(function() {
                sendBtn.textContent = '📨 Enviar sugerencia';
                sendBtn.disabled = false;
              }, 3000);
            } else {
              throw new Error(data.message || 'Error al enviar');
            }
          })
          .catch(function(err) {
            textEl.style.borderColor = '#f44336';
            sendBtn.textContent = '❌ Error al enviar';
            sendBtn.disabled = false;
            console.error('[AO Helper] Error enviando feedback:', err);
            setTimeout(function() { sendBtn.textContent = '📨 Enviar sugerencia'; }, 3000);
          });
        });
      }
    }
  }

  // --- Events ---
  function attachEvents(panel) {
    panel.querySelectorAll('.aoh-tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        panel.querySelectorAll('.aoh-tab').forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentTab = tab.getAttribute('data-tab');
        updateContent();
      });
    });

    var classEl = panel.querySelector('#aoh-class');
    var levelEl = panel.querySelector('#aoh-level');
    classEl.addEventListener('change', function() { saveSettings(); updateContent(); });
    levelEl.addEventListener('input', function() { saveSettings(); updateContent(); });

    // Feedback button in footer
    var feedbackBtn = panel.querySelector('#aoh-feedback-btn');
    if (feedbackBtn) {
      feedbackBtn.addEventListener('click', function() {
        panel.querySelectorAll('.aoh-tab').forEach(function(t) { t.classList.remove('active'); });
        currentTab = 'feedback';
        updateContent();
      });
    }

    panel.querySelector('#aoh-minimize').addEventListener('click', function() {
      var body = panel.querySelector('#aoh-body');
      var resizeHandle = panel.querySelector('#aoh-resize-handle');
      panelCollapsed = !panelCollapsed;
      if (panelCollapsed) {
        panel.dataset.prevWidth = panel.style.width || panel.offsetWidth + 'px';
        body.style.display = 'none';
        if (resizeHandle) resizeHandle.style.display = 'none';
        panel.style.width = 'auto';
        panel.style.minWidth = '0';
        panel.querySelector('#aoh-minimize').textContent = '▶';
      } else {
        body.style.display = 'flex';
        if (resizeHandle) resizeHandle.style.display = '';
        panel.style.width = panel.dataset.prevWidth || '310px';
        panel.style.minWidth = '200px';
        panel.querySelector('#aoh-minimize').textContent = '◀';
      }
      saveSettings();
    });

    panel.querySelector('#aoh-close').addEventListener('click', function() {
      panel.style.display = 'none';
      createRestoreButton();
    });
  }

  // --- Restore button ---
  function createRestoreButton() {
    var existing = document.getElementById('aoh-restore');
    if (existing) existing.remove();
    var btn = document.createElement('button');
    btn.id = 'aoh-restore';
    btn.textContent = '🧙 AO Helper';
    btn.className = 'aoh-restore-btn';
    btn.addEventListener('click', function() {
      var panel = document.getElementById('ao-helper-panel');
      if (panel) panel.style.display = 'flex';
      btn.remove();
    });
    document.body.appendChild(btn);
  }

  // --- Resizable width ---
  function makeResizable(panel) {
    var handle = panel.querySelector('#aoh-resize-handle');
    var isResizing = false;
    var startX, startWidth;

    handle.addEventListener('mousedown', function(e) {
      isResizing = true;
      startX = e.clientX;
      startWidth = panel.offsetWidth;
      handle.classList.add('active');
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
      e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
      if (!isResizing) return;
      var newWidth = startWidth + (e.clientX - startX);
      newWidth = Math.max(200, Math.min(newWidth, window.innerWidth * 0.5));
      panel.style.width = newWidth + 'px';
    });

    document.addEventListener('mouseup', function() {
      if (isResizing) {
        isResizing = false;
        handle.classList.remove('active');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        saveSettings();
      }
    });
  }

  // --- Settings persistence ---
  function saveSettings() {
    try {
      var panel = document.getElementById('ao-helper-panel');
      var classEl = document.getElementById('aoh-class');
      var levelEl = document.getElementById('aoh-level');
      localStorage.setItem('ao-helper-settings', JSON.stringify({
        classId: classEl ? classEl.value : '1',
        level: levelEl ? levelEl.value : '1',
        tab: currentTab,
        collapsed: panelCollapsed,
        width: panel ? panel.style.width : null,
      }));
    } catch(e) {}
  }

  function loadSettings() {
    try {
      var saved = JSON.parse(localStorage.getItem('ao-helper-settings') || '{}');
      var classEl = document.getElementById('aoh-class');
      var levelEl = document.getElementById('aoh-level');
      var panel = document.getElementById('ao-helper-panel');

      if (saved.classId && classEl) classEl.value = saved.classId;
      if (saved.level && levelEl) levelEl.value = saved.level;
      if (saved.tab) {
        currentTab = saved.tab;
        document.querySelectorAll('.aoh-tab').forEach(function(t) {
          t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
        });
      }
      if (saved.width && panel && !saved.collapsed) panel.style.width = saved.width;
      if (saved.collapsed) {
        panelCollapsed = true;
        var body = document.getElementById('aoh-body');
        var resizeHandle = document.getElementById('aoh-resize-handle');
        if (body) body.style.display = 'none';
        if (resizeHandle) resizeHandle.style.display = 'none';
        if (panel) { panel.style.width = 'auto'; panel.style.minWidth = '0'; }
        if (panel) panel.dataset.prevWidth = saved.width || '310px';
        var minBtn = document.getElementById('aoh-minimize');
        if (minBtn) minBtn.textContent = '▶';
      }
      updateContent();
    } catch(e) {
      updateContent();
    }
  }

  // --- Keyboard shortcut Alt+H ---
  document.addEventListener('keydown', function(e) {
    if (e.altKey && (e.key === 'h' || e.key === 'H')) {
      var panel = document.getElementById('ao-helper-panel');
      if (panel) {
        var isHidden = panel.style.display === 'none';
        panel.style.display = isHidden ? 'flex' : 'none';
        if (isHidden) {
          var restore = document.getElementById('aoh-restore');
          if (restore) restore.remove();
        } else {
          createRestoreButton();
        }
      } else {
        createPanel();
      }
      e.preventDefault();
    }
  });

  // --- GO ---
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
