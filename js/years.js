let openedYearId = null;

function loadYears() {
  const container = document.getElementById("yearsContainer");
  if (!container) return;

  container.innerHTML = "";

  window.yearsData.forEach(year => {
    const div = document.createElement("div");
    div.className = "card";

    const lang = window.currentLang || "en";
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

      // reset lower levels
      studentsContainer.innerHTML = "";
      detailsContainer.innerHTML = "";

      showSection("years");
      loadClasses(year.id);
    };

    container.appendChild(div);
  });
}