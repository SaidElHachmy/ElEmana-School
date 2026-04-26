// 🌍 DEFAULT LANGUAGE (MATCH YOUR HTML RTL)
window.currentLang = "ar";

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

  // ✅ Ensure correct direction from start
  document.body.dir = window.currentLang === "ar" ? "rtl" : "ltr";

  showSection("home");

  // 📅 Dynamic year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 📦 Load systems
  if (window.loadYears) loadYears();
  if (window.loadBooks) loadBooks();
  if (window.loadActivities) loadActivities();
  if (window.loadContact) loadContact();
  if (window.loadDeveloper) loadDeveloper();
  if (window.loadMediaActivities) loadMediaActivities();
}

//////////////////////////////////////////////////
// 🔥 RESET SCHOOL UI (CLEAN NAVIGATION)
//////////////////////////////////////////////////

function resetSchoolUI() {
  const classesContainer = document.getElementById("classesContainer");
  const studentsContainer = document.getElementById("studentsContainer");
  const detailsContainer = document.getElementById("studentDetailsContainer");

  if (classesContainer) classesContainer.innerHTML = "";
  if (studentsContainer) studentsContainer.innerHTML = "";
  if (detailsContainer) detailsContainer.innerHTML = "";

  // 🔁 Reset toggle states safely
  if (typeof openedYearId !== "undefined") openedYearId = null;
  if (typeof openedStudentId !== "undefined") openedStudentId = null;
}
