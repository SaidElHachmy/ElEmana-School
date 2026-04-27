let lastHistoryResults = [];

// 🌍 TRANSLATIONS FOR SEARCH UI
const historyTranslations = {
  en: {
    placeholder: "Search student...",
    search: "Search",
    clear: "Clear",
    alert: "Please type a name",
    noResults: "No results",
    year: "Year",
    class: "Class",
    cycle: "Cycle"
  },
  ar: {
    placeholder: "ابحث عن طالب...",
    search: "بحث",
    clear: "مسح",
    alert: "يرجى إدخال اسم",
    noResults: "لا يوجد نتائج",
    year: "السنة",
    class: "القسم",
    cycle: "الدورة"
  },
  fr: {
    placeholder: "Rechercher un élève...",
    search: "Chercher",
    clear: "Effacer",
    alert: "Veuillez saisir un nom",
    noResults: "Aucun résultat",
    year: "Année",
    class: "Classe",
    cycle: "Cycle"
  }
};

// 🔄 UPDATE UI LANGUAGE
function updateHistorySearchUI() {
  const lang = window.currentLang || "en";
  const t = historyTranslations[lang];

  const input = document.getElementById("historySearchInput");
  const searchBtn = document.getElementById("historySearchBtn");
  const clearBtn = document.getElementById("historyClearBtn");

  if (input) input.placeholder = t.placeholder;
  if (searchBtn) searchBtn.textContent = t.search;
  if (clearBtn) clearBtn.textContent = t.clear;
}

// 🔍 HANDLE SEARCH BUTTON
function handleHistorySearch() {
  const input = document.getElementById("historySearchInput");
  const clearBtn = document.getElementById("historyClearBtn");

  if (!input) return;

  const value = input.value.trim();
  const lang = window.currentLang || "en";
  const t = historyTranslations[lang];

  if (!value) {
    alert(t.alert);
    return;
  }

  // 🔍 LOAD + SAVE RESULTS
  loadStudentHistory(value);

  // ✅ CLEAR INPUT
  input.value = "";

  // ✅ SHOW CLEAR BUTTON
  if (clearBtn) clearBtn.style.display = "inline-block";
}

// 🧹 CLEAR RESULTS
function clearHistoryResults() {
  const container = document.getElementById("historyResults");
  const clearBtn = document.getElementById("historyClearBtn");

  if (container) container.innerHTML = "";

  // 🧠 RESET STORED RESULTS
  lastHistoryResults = [];

  // ✅ HIDE BUTTON
  if (clearBtn) clearBtn.style.display = "none";
}

// 📚 MAIN FUNCTION
function loadStudentHistory(nameInput) {
  const lang = window.currentLang || "en";

  const matches = window.students.filter(s => {
    const name =
      typeof s.name === "object"
        ? s.name[lang]
        : s.name;

    return name?.toLowerCase().includes(nameInput.toLowerCase());
  });

  // 💾 SAVE RESULTS (VERY IMPORTANT)
  lastHistoryResults = matches;

  // 🎯 RENDER
  renderHistoryResults();
}

// 🎨 RENDER FUNCTION (KEY FIX)
function renderHistoryResults() {
  const container = document.getElementById("historyResults");
  if (!container) return;

  const lang = window.currentLang || "en";
  const t = historyTranslations[lang];

  container.innerHTML = "";

  if (!lastHistoryResults || lastHistoryResults.length === 0) {
    container.innerHTML = `
      <div class="empty-message">${t.noResults}</div>
    `;
    return;
  }

  lastHistoryResults.forEach(student => {
    const img = student.image || "assets/images/error.png";

    const name =
      typeof student.name === "object"
        ? student.name[lang]
        : student.name;

    const level =
      typeof student.level === "object"
        ? student.level[lang]
        : student.level;

    const cycle =
      typeof student.cycle === "object"
        ? student.cycle[lang]
        : student.cycle;

    // 🏫 CLASS → YEAR
    const classObj = window.classes?.find(
      c => Number(c.id) === Number(student.classId)
    );

    const yearObj = window.yearsData?.find(
      y => Number(y.id) === Number(classObj?.yearId)
    );

    const yearName = yearObj
      ? (typeof yearObj.name === "object" ? yearObj.name[lang] : yearObj.name)
      : "N/A";

    const card = document.createElement("div");
    card.className = "history-card";

    card.innerHTML = `
      <img src="${img}" onerror="this.src='assets/images/error.png'">

      <div>
        <h3>${name}</h3>

        <p><strong>${t.year}:</strong> ${yearName}</p>
        <p><strong>${t.class}:</strong> ${level || "N/A"}</p>
        <p><strong>${t.cycle}:</strong> ${cycle || "N/A"}</p>
      </div>
    `;

    container.appendChild(card);
  });
}