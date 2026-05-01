// 🌍 Developer Section (6-SIDE STRUCTURE + FIXED BUTTONS)

function loadDeveloper() {
  const section = document.getElementById("developer");
  if (!section) return;

  const lang = window.currentLang || "en";

  const content = {
    en: {
      titleName: "Said ElHachmy",
      role: "Frontend Developer & Teacher",
      description:
        "Passionate about building educational tools and interactive experiences that make learning simple, fun, and accessible for everyone.",
      email: "medsaidmdelhachmy@gmail.com",
      phone: "47324534",
      skills: ["HTML", "CSS", "JavaScript"],
      projects: [
        { name: "Said's Emoji Game", link: "https://saidelhachmy.github.io/Saids-emoji-game/" },
        { name: "El Emana School", link: "https://saidelhachmy.github.io/ElEmana-School/" },
        { name: "Class Manager", link: "https://saidelhachmy.github.io/class-manager/" }
      ],

      btnEmail: "Email",
      btnWhatsApp: "WhatsApp"
    },

    ar: {
      titleName: "سعيد الهاشمي",
      role: "مطور واجهات أمامية وأستاذ",
      description:
        "شغوف ببناء أدوات تعليمية وتجارب تفاعلية تجعل التعلم بسيطًا وممتعًا ومتاحًا للجميع.",
      email: "medsaidmdelhachmy@gmail.com",
      phone: "47324534",
      skills: ["HTML", "CSS", "JavaScript"],
      projects: [
        { name: "لعبة الإيموجي الخاصة بسعيد", link: "https://saidelhachmy.github.io/Saids-emoji-game/" },
        { name: "مدرسة الأمانة", link: "https://saidelhachmy.github.io/ElEmana-School/" },
        { name: "مدير الصف", link: "https://saidelhachmy.github.io/class-manager/" }
      ],

      btnEmail: "بريد إلكتروني",
      btnWhatsApp: "واتساب"
    },

    fr: {
      titleName: "Said ElHachmy",
      role: "Développeur Frontend et Enseignant",
      description:
        "Passionné par la création d’outils éducatifs et d’expériences interactives pour rendre l’apprentissage simple et accessible à tous.",
      email: "medsaidmdelhachmy@gmail.com",
      phone: "47324534",
      skills: ["HTML", "CSS", "JavaScript"],
      projects: [
        { name: "Jeu d’Emoji de Said", link: "https://saidelhachmy.github.io/Saids-emoji-game/" },
        { name: "École El Emana", link: "https://saidelhachmy.github.io/ElEmana-School/" },
        { name: "Gestionnaire de classe", link: "https://saidelhachmy.github.io/class-manager/" }
      ],

      btnEmail: "Email",
      btnWhatsApp: "WhatsApp"
    }
  };

  const t = content[lang];

  let container = document.getElementById("developerCardContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "developerCardContainer";
    section.appendChild(container);
  }

  container.innerHTML = "";

  // 🧱 CARD GRID
  const card = document.createElement("div");

  card.style.display = "grid";
  card.style.gridTemplateColumns = "1fr 1fr";
  card.style.gridTemplateRows = "auto auto auto";
  card.style.gap = "15px";
  card.style.background = "#fff";
  card.style.borderRadius = "15px";
  card.style.padding = "20px";
  card.style.marginTop = "20px";
  card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";

  // 🖼️ IMAGE
  const img = document.createElement("img");
  img.src = "assets/images/me.jpg";
  img.onerror = () => (img.src = "assets/images/error.png");

  img.style.width = "100%";
  img.style.height = "160px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "12px";

  // 👤 NAME
  const nameBox = document.createElement("div");

  const name = document.createElement("h2");
  name.textContent = t.titleName;
  name.style.margin = "0";
  name.style.color = "#006400";

  const role = document.createElement("p");
  role.textContent = t.role;
  role.style.margin = "5px 0 0 0";
  role.style.opacity = "0.8";

  nameBox.appendChild(name);
  nameBox.appendChild(role);

  // 📝 DESCRIPTION
  const descBox = document.createElement("div");

  const descTitle = document.createElement("h4");
  descTitle.textContent = lang === "ar" ? "الوصف" : lang === "fr" ? "Description" : "Description";

  const desc = document.createElement("p");
  desc.textContent = t.description;
  desc.style.opacity = "0.8";

  descBox.appendChild(descTitle);
  descBox.appendChild(desc);

  // 🛠️ SKILLS
  const skillsBox = document.createElement("div");

  const skillsTitle = document.createElement("h4");
  skillsTitle.textContent = lang === "ar" ? "المهارات" : lang === "fr" ? "Compétences" : "Skills";

  const skills = document.createElement("p");
  skills.textContent = t.skills.join(" • ");

  skillsBox.appendChild(skillsTitle);
  skillsBox.appendChild(skills);

  // 📚 PROJECTS
  const projectBox = document.createElement("div");

  const projTitle = document.createElement("h4");
  projTitle.textContent = lang === "ar" ? "المشاريع" : lang === "fr" ? "Projets" : "Projects";

  const list = document.createElement("ul");

  t.projects.forEach(p => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = p.name;
    a.href = p.link;
    a.target = "_blank";

    a.style.textDecoration = "none";
    a.style.color = "#b30000";

    li.appendChild(a);
    list.appendChild(li);
  });

  projectBox.appendChild(projTitle);
  projectBox.appendChild(list);

  // 📞 CONTACT BUTTONS
  const contactBox = document.createElement("div");

  contactBox.style.display = "flex";
  contactBox.style.gap = "10px"; // ✅ FIX: spacing between buttons
  contactBox.style.flexWrap = "wrap";

  const emailBtn = document.createElement("a");
  emailBtn.href = `mailto:${t.email}`;
  emailBtn.textContent = t.btnEmail;

  emailBtn.style.padding = "8px 12px";
  emailBtn.style.background = "#007BFF";
  emailBtn.style.color = "#fff";
  emailBtn.style.borderRadius = "8px";
  emailBtn.style.textDecoration = "none";

  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = `https://wa.me/222${t.phone}`;
  whatsappBtn.target = "_blank";
  whatsappBtn.textContent = t.btnWhatsApp;

  whatsappBtn.style.padding = "8px 12px";
  whatsappBtn.style.background = "#25D366";
  whatsappBtn.style.color = "#fff";
  whatsappBtn.style.borderRadius = "8px";
  whatsappBtn.style.textDecoration = "none";

  contactBox.appendChild(emailBtn);
  contactBox.appendChild(whatsappBtn);

  // 📦 PLACE IN GRID
  card.appendChild(img);
  card.appendChild(nameBox);
  card.appendChild(descBox);
  card.appendChild(skillsBox);
  card.appendChild(projectBox);
  card.appendChild(contactBox);

  container.appendChild(card);
    }
