function loadClasses(yearId) {
  const container = document.getElementById("classesContainer");
  const studentsContainer = document.getElementById("studentsContainer");
  const detailsContainer = document.getElementById("studentDetailsContainer");

  if (!container || !studentsContainer || !detailsContainer) return;

  container.innerHTML = "";
  studentsContainer.innerHTML = "";
  detailsContainer.innerHTML = "";

  const filtered = window.classes.filter(
    c => Number(c.yearId) === Number(yearId)
  );

  filtered.forEach(cls => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerText = cls.name[window.currentLang];

    div.onclick = () => loadStudents(cls.id);

    container.appendChild(div);
  });
}