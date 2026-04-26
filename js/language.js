window.currentLang = "ar"; // ✅ Arabic is now DEFAULT

window.translations = {
  en: {
    home: "Home",
    years: "School Years",
    library: "Library",
    activities: "Activities",
    contact: "Contact",
    developer: "Developer",

    home_title: "Welcome to El Emana School",
    home_text: "This is a modern website for school management.",

    years_title: "School Years",
    library_title: "Library",
    activities_title: "Activities",
    contact_title: "Contact",
    developer_title: "Developer",

    search_placeholder: "Search...",
    search_button: "Search",

    footer_text: "El Emana School"
  },

  ar: {
    home: "الرئيسية",
    years: "السنوات الدراسية",
    library: "المكتبة",
    activities: "الأنشطة",
    contact: "اتصل بنا",
    developer: "المطور",

    home_title: "مرحباً بكم في مدرسة الأمانة",
    home_text: "هذا موقع حديث لإدارة المدرسة",

    years_title: "السنوات الدراسية",
    library_title: "المكتبة",
    activities_title: "الأنشطة",
    contact_title: "اتصل بنا",
    developer_title: "المطور",

    search_placeholder: "ابحث...",
    search_button: "بحث",

    footer_text: "مدرسة الأمانة"
  },

  fr: {
    home: "Accueil",
    years: "Années scolaires",
    library: "Bibliothèque",
    activities: "Activités",
    contact: "Contact",
    developer: "Développeur",

    home_title: "Bienvenue à l’école El Emana",
    home_text: "Ceci est un site moderne pour la gestion de l’école",

    years_title: "Années scolaires",
    library_title: "Bibliothèque",
    activities_title: "Activités",
    contact_title: "Contact",
    developer_title: "Développeur",

    search_placeholder: "Rechercher...",
    search_button: "Chercher",

    footer_text: "Ecole El Emana"
  }
};


function changeLanguage(lang) {
  window.currentLang = lang;

  const elements = document.querySelectorAll("[data-key]");

  elements.forEach(el => {
    const key = el.getAttribute("data-key");

    if (
      window.translations[lang] &&
      window.translations[lang][key]
    ) {
      el.textContent = window.translations[lang][key];
    }
  });

  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  if (window.loadYears) loadYears();
  if (window.loadBooks) loadBooks();
  if (window.loadActivities) loadActivities();
  if (window.loadContact) loadContact();
  // 🔥 ADD THIS
  if (window.loadDeveloper) loadDeveloper();
  
  if (window.loadMediaActivities) loadMediaActivities();
  
  
  
}
