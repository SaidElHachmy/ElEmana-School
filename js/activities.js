// 🎉 Activities Section Dynamic Content

function loadActivities() {
  const titleEl = document.querySelector("[data-key='activities_title']");
  const textEl = document.querySelector("[data-key='activities_text']");

  if (!titleEl || !textEl) return;

  const lang = window.currentLang || "en";

  const content = {
    en: {
      title: "Activities",
      text: "Photos, videos, and school events will appear here."
    },
    ar: {
      title: "الأنشطة",
      text: "ستظهر هنا الصور والفيديوهات والأنشطة المدرسية."
    },
    fr: {
      title: "Activités",
      text: "Les photos, vidéos et événements scolaires apparaîtront ici."
    }
  };

  titleEl.textContent = content[lang].title;
  textEl.textContent = content[lang].text;
}