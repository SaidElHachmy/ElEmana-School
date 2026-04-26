// 🌍 Developer Section Dynamic Content + Portfolio Card

function loadDeveloper() {
  const section = document.getElementById("developer");
  if (!section) return;

  const titleEl = document.querySelector("[data-key='developer_title']");
  const textEl = document.querySelector("[data-key='developer_text']");

  const lang = window.currentLang || "en";

  const content = {
  en: {
    title: "Developer",
    titleName:"Said ElHachmy",
    
    text: "Created by Said ElHachmy — Frontend Developer & Teacher",
    role: "Frontend Developer & Teacher",
    portfolio: "https://saidelhachmy.github.io/#about",
    projects_title: "Projects",
    projects: [
      { name: "Said's Emoji Game", link: "https://saidelhachmy.github.io/Saids-emoji-game/" },
      { name: "Class Manager", link: "https://saidelhachmy.github.io/class-manager/" }
    ]
  },

  ar: {
    title: "المطور",
    titleName:"سعيد الهاشمي",
    
    text: "تم إنشاء الموقع بواسطة سعيد الهاشمي — مطور واجهات أمامية وأستاذ",
    role: "مطور واجهات أمامية وأستاذ",
    portfolio: "https://saidelhachmy.github.io/#about",
    projects_title: "المشاريع",
    projects: [
      { name: "لعبة الإيموجي الخاصة بسعيد", link: "https://saidelhachmy.github.io/Saids-emoji-game/" },
      { name: "مدير الفصل", link: "https://saidelhachmy.github.io/class-manager/" }
    ]
  },

  fr: {
    title: "Développeur",
    titleName:"Said ElHachmy",
    
    text: "Créé par Said ElHachmy — Développeur Frontend et Enseignant",
    role: "Développeur Frontend et Enseignant",
    portfolio: "https://saidelhachmy.github.io/#about",
    projects_title: "Projets",
    projects: [
      { name: "Jeu d’Emoji de Said", link: "https://saidelhachmy.github.io/Saids-emoji-game/" },
      { name: "Gestionnaire de classe", link: "https://saidelhachmy.github.io/class-manager/" }
    ]
  }
};

  const t = content[lang];

  // 📝 Update simple text
  if (titleEl) titleEl.textContent = t.title;
  if (textEl) textEl.textContent = t.text;

  // 🧱 Create / update portfolio card container
  let container = document.getElementById("developerCardContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "developerCardContainer";
    section.appendChild(container);
  }

  container.innerHTML = "";

  // 🎴 CARD
  const card = document.createElement("div");

  // 🎨 STYLE (JS ONLY)
  card.style.display = "flex";
  card.style.gap = "20px";
  card.style.alignItems = "center";
  card.style.background = "#ffffff";
  card.style.borderRadius = "15px";
  card.style.padding = "20px";
  card.style.marginTop = "20px";
  card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
  card.style.flexWrap = "wrap";

  // 🖼️ IMAGE
  const img = document.createElement("img");
img.src = "assets/images/me.jpg";

// ❌ if image not found → fallback
img.onerror = function () {
  this.onerror = null;
  this.src = "assets/images/error.png";
};
  img.style.width = "120px";
  img.style.height = "120px";
  img.style.borderRadius = "15px";
  img.style.objectFit = "cover";

  // 📄 INFO
  const info = document.createElement("div");
  info.style.flex = "1";

  const name = document.createElement("a");
name.textContent = t.titleName;
name.href = t.portfolio;
name.target = "_blank";

name.style.display = "inline-block";
name.style.fontSize = "20px";
name.style.fontWeight = "bold";
name.style.textDecoration = "none";
name.style.color = "#006400"; // Mauritania green

name.onmouseenter = () => name.style.textDecoration = "underline";
name.onmouseleave = () => name.style.textDecoration = "none";

  const role = document.createElement("p");
  role.textContent = t.role;

  const projectsTitle = document.createElement("h4");
  projectsTitle.textContent = t.projects_title;
  projectsTitle.style.marginTop = "10px";

  const list = document.createElement("ul");

t.projects.forEach(p => {
  const li = document.createElement("li");

  const link = document.createElement("a");
  link.textContent = p.name;
  link.href = p.link;
  link.target = "_blank";

  link.style.textDecoration = "none";
  link.style.color = "#b30000"; // Mauritania red

  link.onmouseenter = () => link.style.textDecoration = "underline";
  link.onmouseleave = () => link.style.textDecoration = "none";

  li.appendChild(link);
  list.appendChild(li);
});
  // 📦 APPEND
  info.appendChild(name);
  info.appendChild(role);
  info.appendChild(projectsTitle);
  info.appendChild(list);

  card.appendChild(img);
  card.appendChild(info);

  container.appendChild(card);
}
