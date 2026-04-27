let openedYearId = null;

function loadYears() {
  const container = document.getElementById("yearsContainer");
  if (!container) return;

  container.innerHTML = "";

  const lang = window.currentLang || "en";

  window.yearsData.forEach(year => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerText = year.name[lang];

    div.onclick = () => {
      const classesContainer = document.getElementById("classesContainer");
      const studentsContainer = document.getElementById("studentsContainer");
      const detailsContainer = document.getElementById("studentDetailsContainer");

      // 🔁 TOGGLE LOGIC
      if (openedYearId === year.id) {
        classesContainer.innerHTML = "";
        studentsContainer.innerHTML = "";
        detailsContainer.innerHTML = "";
        openedYearId = null;
        return;
      }

      openedYearId = year.id;

      studentsContainer.innerHTML = "";
      detailsContainer.innerHTML = "";

      showSection("years");
      loadClasses(year.id);
    };

    container.appendChild(div);
  });

  // 🔥 FIX: refresh classes when language changes
  if (openedYearId !== null) {
    loadClasses(openedYearId);
  }
}
