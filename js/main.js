window.currentLang = "en";

// 🌍 TRANSLATIONS (BASE STRUCTURE)
window.translations = {
  en: {},
  ar: {},
  fr: {}
};

// 🚀 SAFE START
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  console.log("App started");

  showSection("home");

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (window.loadYears) loadYears();
}

//////////////////////////////////////////////////
// 🔥 ADD THIS PART HERE (IMPORTANT)
//////////////////////////////////////////////////

function resetSchoolUI() {
  const classesContainer = document.getElementById("classesContainer");
  const studentsContainer = document.getElementById("studentsContainer");
  const detailsContainer = document.getElementById("studentDetailsContainer");

  if (classesContainer) classesContainer.innerHTML = "";
  if (studentsContainer) studentsContainer.innerHTML = "";
  if (detailsContainer) detailsContainer.innerHTML = "";

  // reset toggles safely
  if (typeof openedYearId !== "undefined") openedYearId = null;
  if (typeof openedStudentId !== "undefined") openedStudentId = null;
}