// 🌍 Developer Section Dynamic Content

function loadDeveloper() {
  const titleEl = document.querySelector("[data-key='developer_title']");
  const textEl = document.querySelector("[data-key='developer_text']");

  if (!titleEl || !textEl) return;

  const lang = window.currentLang || "en";

  const content = {
    en: {
      title: "Developer",
      text: "Created by Said ElHachmy — Frontend Developer & Teacher"
    },
    ar: {
      title: "المطور",
      text: "تم إنشاء الموقع بواسطة سعيد الهاشمي — مطور واجهات أمامية وأستاذ"
    },
    fr: {
      title: "Développeur",
      text: "Créé par Said ElHachmy — Développeur Frontend et Enseignant"
    }
  };

  titleEl.textContent = content[lang].title;
  textEl.textContent = content[lang].text;
}