// Complete Gunasthan App Data and Functions
// Just copy all of this into your app.js file

// Gunasthan Data
const gunasthansData = {
  1: {
    nameHi: "मिथ्यात्व",
    nameEn: "Mithyatva", 
    english: "False Belief",
    description: "The soul possesses wrong belief and is bound by all karmas.",
    color: "#EF4444"
  },
  2: {
    nameHi: "सासादन",
    nameEn: "Sasadan",
    english: "Downfall", 
    description: "Temporary stage when a soul falls from right belief back to wrong belief.",
    color: "#F87171"
  },
  3: {
    nameHi: "मिश्र",
    nameEn: "Mishra",
    english: "Mixed Belief",
    description: "The soul has mixed right and wrong beliefs simultaneously.",
    color: "#FB923C"
  },
  4: {
    nameHi: "अविरत सम्यग्दृष्टि",
    nameEn: "Avirat Samyagdrishti",
    english: "Right Belief without Conduct",
    description: "Soul has right belief but has not yet adopted right conduct.",
    color: "#FBBF24"
  },
  5: {
    nameHi: "देशविरत",
    nameEn: "Deshvirat",
    english: "Partial Vows",
    description: "Soul adopts partial vows and begins practicing limited self-restraint.",
    color: "#A3E635"
  },
  6: {
    nameHi: "प्रमत्तविरत",
    nameEn: "Pramattavirat",
    english: "Careless Conduct",
    description: "Soul has taken complete vows but is still careless in observance.",
    color: "#4ADE80"
  },
  7: {
    nameHi: "अप्रमत्तविरत",
    nameEn: "Apramattavirat",
    english: "Careful Conduct",
    description: "Soul observes vows with complete care and attention.",
    color: "#10B981"
  },
  8: {
    nameHi: "अपूर्वकरण",
    nameEn: "Apurvakarana",
    english: "Unprecedented Thought-activity",
    description: "Soul experiences unprecedented spiritual transformation.",
    color: "#14B8A6"
  },
  9: {
    nameHi: "अनिवृत्तिकरण",
    nameEn: "Anivrittikarana",
    english: "Subtle Passion",
    description: "Only subtle forms of passion remain; gross passions eliminated.",
    color: "#06B6D4"
  },
  10: {
    nameHi: "सूक्ष्मसांपराय",
    nameEn: "Sukshmasamparaya",
    english: "Subtle Greed",
    description: "Only the most subtle form of greed (lobha) remains.",
    color: "#3B82F6"
  },
  11: {
    nameHi: "उपशांत मोह",
    nameEn: "Upashanta Moha",
    english: "Subsided Delusion",
    description: "All deluding karmas are temporarily subsided but not destroyed.",
    color: "#6366F1"
  },
  12: {
    nameHi: "क्षीणमोह",
    nameEn: "Kshina Moha",
    english: "Destroyed Delusion",
    description: "All deluding karmas are permanently destroyed. No return to lower stages.",
    color: "#8B5CF6"
  },
  13: {
    nameHi: "सयोगकेवली",
    nameEn: "Sayogakevali",
    english: "Omniscient with Activity",
    description: "Soul achieves omniscience but still has bodily activities.",
    color: "#EC4899"
  },
  14: {
    nameHi: "अयोगकेवली",
    nameEn: "Ayogakevali",
    english: "Omniscient without Activity",
    description: "Final stage before liberation. No mental, verbal, or physical activities.",
    color: "#F59E0B"
  }
};

// 24 Thanas Data
const thanasData = [
  { nameHi: "गति", nameEn: "Gati", english: "State of Existence", total: 4, icon: "🌍" },
  { nameHi: "इन्द्रिय", nameEn: "Indriya", english: "Senses", total: 5, icon: "👁️" },
  { nameHi: "काय", nameEn: "Kaya", english: "Body", total: 6, icon: "🧘" },
  { nameHi: "योग", nameEn: "Yoga", english: "Activity", total: 15, icon: "⚡" },
  { nameHi: "वेद", nameEn: "Veda", english: "Gender-inclination", total: 3, icon: "⚊" },
  { nameHi: "कषाय", nameEn: "Kashaya", english: "Passions", total: 25, icon: "🔥" },
  { nameHi: "ज्ञान", nameEn: "Gyan", english: "Knowledge", total: 8, icon: "🧠" },
  { nameHi: "संयम", nameEn: "Samyam", english: "Self-restraint", total: 7, icon: "🛡️" },
  { nameHi: "दर्शन", nameEn: "Darshan", english: "Perception", total: 4, icon: "👀" },
  { nameHi: "लेश्या", nameEn: "Leshya", english: "Aura", total: 6, icon: "🌈" },
  { nameHi: "भव्य", nameEn: "Bhavya", english: "Capability", total: 2, icon: "✨" },
  { nameHi: "सम्यक्त्व", nameEn: "Samyaktva", english: "Right Belief", total: 6, icon: "💎" },
  { nameHi: "संज्ञी", nameEn: "Sangyi", english: "Consciousness", total: 2, icon: "🧩" },
  { nameHi: "आहारक", nameEn: "Aaharaka", english: "Assimilator", total: 2, icon: "🍃" },
  { nameHi: "गुणस्थान", nameEn: "Gunasthan", english: "Spiritual Stages", total: 14, icon: "📶" },
  { nameHi: "जीवसमास", nameEn: "Jivasamas", english: "Life Classes", total: 19, icon: "🌱" },
  { nameHi: "पर्याप्ति", nameEn: "Paryapti", english: "Developmental Stages", total: 6, icon: "🌿" },
  { nameHi: "प्राण", nameEn: "Pran", english: "Vitalities", total: 10, icon: "💨" },
  { nameHi: "संज्ञा", nameEn: "Sangya", english: "Instincts", total: 4, icon: "🎯" },
  { nameHi: "उपयोग", nameEn: "Upayog", english: "Conscious Manifestation", total: 12, icon: "🔮" },
  { nameHi: "ध्यान", nameEn: "Dhyana", english: "Meditation", total: 16, icon: "🧘‍♀️" },
  { nameHi: "आस्रव", nameEn: "Ashrav", english: "Influx of Karma", total: 57, icon: "⬇️" },
  { nameHi: "जाति", nameEn: "Jati", english: "Species", total: 84, icon: "🦋" },
  { nameHi: "कुल", nameEn: "Kula", english: "Family", total: 199.5, icon: "👥" }
];

// Matrix data - counts for each Gunasthan-Thana combination
const matrixData = {
  1: [4,5,6,13,3,25,3,1,2,6,2,1,2,2,1,19,6,10,4,5,8,55,84,199.5],
  2: [4,1,1,13,3,25,3,1,2,6,1,1,1,2,1,1,6,10,4,5,8,50,26,108.5],
  3: [4,1,1,10,3,21,2,1,2,6,1,1,1,1,1,1,6,10,4,5,9,43,26,108.5],
  4: [4,1,1,13,3,21,3,1,3,6,1,3,1,2,1,1,6,10,4,6,10,46,26,108.5],
  5: [2,1,1,9,3,17,3,1,3,3,1,3,1,1,1,1,6,10,4,6,11,37,18,57.5],
  6: [1,1,1,11,3,13,4,3,3,3,1,3,1,1,1,1,6,10,4,7,7,24,14,14],
  7: [1,1,1,9,3,13,4,3,3,3,1,3,1,1,1,1,6,10,3,7,4,22,14,14],
  8: [1,1,1,9,3,13,4,2,3,1,1,2,1,1,1,1,6,10,3,7,1,22,14,14],
  9: [1,1,1,9,3,7,4,2,3,1,1,2,1,1,1,1,6,10,2,7,1,16,14,14],
  10: [1,1,1,9,0,1,4,1,3,1,1,2,1,1,1,1,6,10,1,7,1,10,14,14],
  11: [1,1,1,9,0,0,4,1,3,1,1,2,1,1,1,1,6,10,0,7,1,9,14,14],
  12: [1,1,1,9,0,0,4,1,3,1,1,1,1,1,1,1,6,10,0,7,1,9,14,14],
  13: [1,1,1,7,0,0,1,1,1,1,1,1,0,2,1,1,6,4,0,2,1,7,14,14],
  14: [1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,6,1,0,2,1,0,14,14]
};

// Transition rules
const transitionRules = {
  1: { canGoTo: [3, 4, 5], description: "Can progress to mixed belief, right belief, or partial vows" },
  2: { canGoTo: [1], description: "Falls back to false belief" },
  3: { canGoTo: [1, 4], description: "Can fall to false belief or progress to right belief" },
  4: { canGoTo: [1, 2, 3, 5, 7], description: "Multiple paths including direct jump to complete vows" },
  5: { canGoTo: [1, 4, 6], description: "Can fall back or progress to monastic life" },
  6: { canGoTo: [5, 7, 8], description: "Can progress to careful conduct or spiritual ladder" },
  7: { canGoTo: [6, 8], description: "Can become careless or progress further" },
  8: { canGoTo: [7, 9], description: "Can fall back or continue ascending" },
  9: { canGoTo: [7, 10], description: "Can fall back or reach subtle greed stage" },
  10: { canGoTo: [7, 11, 12], description: "Can fall, subside, or destroy delusion" },
  11: { canGoTo: [1, 12, 13], description: "Can fall completely, switch paths, or achieve omniscience" },
  12: { canGoTo: [13], description: "Progresses to omniscience" },
  13: { canGoTo: [14], description: "Final transition to liberation" },
  14: { canGoTo: [], description: "Liberation (Moksha) - No further transitions" }
};

// Initialize app
let currentTab = 'overview';

// Service Worker for offline functionality
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// Tab switching
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });
  
  // Remove active class from all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(`${tabName}-content`).classList.remove('hidden');
  
  // Add active class to selected tab
  event.target.classList.add('active');
  
  // Load content if needed
  if (tabName === 'overview' && !document.getElementById('gunasthan-list').innerHTML) {
    loadOverview();
  } else if (tabName === 'matrix' && !document.getElementById('matrix-table').innerHTML) {
    loadMatrix();
  } else if (tabName === 'transitions' && !document.getElementById('transitions-list').innerHTML) {
    loadTransitions();
  }
  
  currentTab = tabName;
}

// Load Overview
function loadOverview() {
  const container = document.getElementById('gunasthan-list');
  let html = '';
  
  for (let i = 1; i <= 14; i++) {
    const g = gunasthansData[i];
    html += `
      <div class="gunasthan-card" onclick="showGunasthanDetail(${i})">
        <div style="display: flex; align-items: center;">
          <span class="gunasthan-number" style="background: ${g.color}">${i}</span>
          <div style="flex: 1;">
            <div class="gunasthan-name">${g.nameHi}</div>
            <div class="gunasthan-sanskrit">${g.nameEn} - ${g.english}</div>
          </div>
        </div>
      </div>
    `;
  }
  
  container.innerHTML = html;
}

// Load Matrix
function loadMatrix() {
  const container = document.getElementById('matrix-table');
  let html = '<table class="matrix-table"><thead><tr><th class="thana-header">Thana</th>';
  
  // Header
  for (let i = 1; i <= 14; i++) {
    html += `<th>G${i}</th>`;
  }
  html += '</tr></thead><tbody>';
  
  // Data rows
  thanasData.forEach((thana, index) => {
    html += `<tr><td class="thana-header">${thana.icon} ${thana.nameHi}</td>`;
    
    for (let g = 1; g <= 14; g++) {
      const count = matrixData[g][index];
      const total = thana.total;
      const percentage = (count / total) * 100;
      const color = getProgressColor(percentage);
      
      html += `
        <td onclick="showCellDetail(${g}, ${index})">
          <div>${count}/${total}</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${percentage}%; background: ${color}"></div>
          </div>
        </td>
      `;
    }
    
    html += '</tr>';
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

// Load Transitions
function loadTransitions() {
  const container = document.getElementById('transitions-list');
  let html = '<div class="info-section"><div class="info-title">Spiritual Progression Paths</div>' +
    '<div>Explore possible transitions between Gunasthans. Each stage has specific paths forward or backward.</div></div>';
  
  for (let i = 1; i <= 14; i++) {
    const g = gunasthansData[i];
    const rule = transitionRules[i];
    
    html += `
      <div class="gunasthan-card">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <span class="gunasthan-number" style="background: ${g.color}">${i}</span>
          <div style="flex: 1;">
            <div class="gunasthan-name">${g.nameHi}</div>
          </div>
        </div>
        <div style="margin-left: 44px;">
          <div style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">${rule.description}</div>
    `;
    
    if (rule.canGoTo.length > 0) {
      html += '<div style="display: flex; flex-wrap: wrap; gap: 8px;">';
      rule.canGoTo.forEach(target => {
        html += `
          <div class="transition-card" style="display: inline-block;">
            → G${target}: ${gunasthansData[target].nameHi}
          </div>
        `;
      });
      html += '</div>';
    } else {
      html += '<div style="color: #f59e0b; font-weight: 600;">🎯 Liberation (Moksha)</div>';
    }
    
    html += '</div></div>';
  }
  
  container.innerHTML = html;
}

// Search functionality
function searchThanas(searchTerm) {
  const results = document.getElementById('search-results');
  
  if (!searchTerm) {
    results.innerHTML = '<div class="loading">Enter a search term...</div>';
    return;
  }
  
  const term = searchTerm.toLowerCase();
  let html = '';
  let found = false;
  
  thanasData.forEach((thana, index) => {
    if (thana.nameHi.includes(searchTerm) || 
        thana.nameEn.toLowerCase().includes(term) ||
        thana.english.toLowerCase().includes(term)) {
      found = true;
      html += `
        <div class="gunasthan-card">
          <div style="font-size: 18px; margin-bottom: 4px;">${thana.icon} ${thana.nameHi}</div>
          <div style="color: #6b7280; margin-bottom: 8px;">${thana.nameEn} - ${thana.english}</div>
          <div style="font-size: 14px;">Total subcategories: ${thana.total}</div>
        </div>
      `;
    }
  });
  
  if (!found) {
    html = '<div class="loading">No results found...</div>';
  }
  
  results.innerHTML = html;
}

// Show details
function showGunasthanDetail(gunasthanId) {
  const g = gunasthansData[gunasthanId];
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  
  title.innerHTML = `G${gunasthanId}: ${g.nameHi}`;
  
  let html = `
    <div style="color: #6b7280; margin-bottom: 12px;">${g.nameEn} - ${g.english}</div>
    <div style="margin-bottom: 16px;">${g.description}</div>
    <div class="info-section">
      <div class="info-title">24 Thana Summary</div>
  `;
  
  thanasData.forEach((thana, index) => {
    const count = matrixData[gunasthanId][index];
    const percentage = (count / thana.total * 100).toFixed(1);
    html += `<div style="margin: 4px 0;">${thana.icon} ${thana.nameHi}: ${count}/${thana.total} (${percentage}%)</div>`;
  });
  
  html += '</div>';
  
  const rule = transitionRules[gunasthanId];
  if (rule.canGoTo.length > 0) {
    html += `
      <div class="info-section" style="background: #eff6ff; border-color: #93c5fd;">
        <div class="info-title" style="color: #2563eb;">Possible Transitions</div>
    `;
    rule.canGoTo.forEach(target => {
      html += `<div>→ G${target}: ${gunasthansData[target].nameHi}</div>`;
    });
    html += '</div>';
  }
  
  body.innerHTML = html;
  modal.classList.remove('hidden');
}

function showCellDetail(gunasthanId, thanaIndex) {
  const g = gunasthansData[gunasthanId];
  const t = thanasData[thanaIndex];
  const count = matrixData[gunasthanId][thanaIndex];
  const percentage = (count / t.total * 100).toFixed(1);
  
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  
  title.innerHTML = `${t.icon} ${t.nameHi} in G${gunasthanId}`;
  
  body.innerHTML = `
    <div style="color: #6b7280; margin-bottom: 8px;">${t.nameEn} - ${t.english}</div>
    <div style="color: #6b7280; margin-bottom: 16px;">In ${g.nameHi} (${g.english})</div>
    
    <div class="info-section">
      <div class="info-title">Statistics</div>
      <div style="font-size: 24px; font-weight: bold; margin: 8px 0;">${count} / ${t.total}</div>
      <div style="margin-bottom: 8px;">Completion: ${percentage}%</div>
      <div class="progress-bar" style="height: 8px; width: 100%;">
        <div class="progress-fill" style="width: ${percentage}%; background: ${getProgressColor(percentage)}"></div>
      </div>
    </div>
    
    <div style="margin-top: 16px; padding: 12px; background: #f3f4f6; border-radius: 8px;">
      <div style="font-weight: 600; margin-bottom: 4px;">About ${t.nameHi}</div>
      <div style="font-size: 14px; color: #6b7280;">
        This category has ${t.total} total subcategories. In ${g.nameHi} stage, ${count} of these are present.
        ${percentage < 50 ? 'Most subcategories are absent in this spiritual stage.' : 'Most subcategories are present in this spiritual stage.'}
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function closeModal(event) {
  if (!event || event.target.id === 'modal') {
    document.getElementById('modal').classList.add('hidden');
  }
}

function getProgressColor(percentage) {
  if (percentage === 0) return '#9CA3AF';
  if (percentage < 25) return '#10B981';
  if (percentage < 50) return '#F59E0B';
  if (percentage < 75) return '#F97316';
  return '#EF4444';
}

// Initialize on load
window.onload = function() {
  loadOverview();
};
