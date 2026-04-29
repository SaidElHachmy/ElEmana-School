// 🧭 SECTION NAVIGATION SYSTEM
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => sec.classList.remove("active"));

  const target = document.getElementById(sectionId);

  if (target) {
    target.classList.add("active");
  }
  
  
  
    // 🔥 RESET when leaving years
  if (sectionId !== "years" && typeof resetSchoolUI === "function") {
    resetSchoolUI();
  }

  // 📚 LOAD LIBRARY WHEN OPENED
  if (sectionId === "library") {
    loadBooks();
  }
  
  if (sectionId === "schedule" && window.loadSchedule) {
  loadSchedule();
}

  if (sectionId === "staff" && window.loadStaff) {
  loadStaff();
}
  
  
  
}
