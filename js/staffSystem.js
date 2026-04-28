// 🌍 LANGUAGE CONTENT
const staffLang = {
  en: {
    title: "School Staff",
    teacher: "Teacher",
    principal: "Principal",
    director: "Director"
  },
  fr: {
    title: "Personnel scolaire",
    teacher: "Enseignant",
    principal: "Directeur",
    director: "Administration"
  },
  ar: {
    title: "الطاقم المدرسي",
    teacher: "أستاذ",
    principal: "مدير",
    director: "الإدارة"
  }
};

// 👨‍🏫 STAFF DATA
window.staffData = [
  {
    image: "assets/images/teacher1.jpg",
    name: {
      en: "Ahmed Mohamed",
      fr: "Ahmed Mohamed",
      ar: "أحمد محمد"
    },
    role: {
      en: "Teacher",
      fr: "Enseignant",
      ar: "أستاذ"
    },
    subject: {
      en: "Math",
      fr: "Mathématiques",
      ar: "رياضيات"
    },
    phone: "47324534"
  },

  {
    image: "assets/images/teacher2.jpg",
    name: {
      en: "Fatima Zahra",
      fr: "Fatima Zahra",
      ar: "فاطمة الزهراء"
    },
    role: {
      en: "Teacher",
      fr: "Enseignante",
      ar: "أستاذة"
    },
    subject: {
      en: "English & Arabic",
      fr: "Anglais & Arabe",
      ar: "إنجليزي و عربي"
    },
    phone: "47320000"
  },

  {
    image: "assets/images/principal.jpg",
    name: {
      en: "Mohamed Salem",
      fr: "Mohamed Salem",
      ar: "محمد سالم"
    },
    role: {
      en: "Principal",
      fr: "Directeur",
      ar: "مدير"
    },
    phone: "47324534"
  }
];


// 🚀 LOAD STAFF
function loadStaff() {
  const container = document.getElementById("staffContainer");
  const title = document.getElementById("staffTitle");

  if (!container || !title) return;

  const lang = window.currentLang || "en";
  const t = staffLang[lang];

  title.textContent = t.title;

  container.innerHTML = "";

  window.staffData.forEach(person => {
    const name =
      typeof person.name === "object"
        ? person.name[lang]
        : person.name;

    const roleLabel =
  typeof person.role === "object"
    ? person.role[lang]
    : person.role;

    const card = document.createElement("div");
    card.className = "staff-card";

    card.innerHTML = `
  <img src="${person.image}" onerror="this.src='assets/images/error.png'">

  <h3>${name}</h3>

  <p><strong>${roleLabel}</strong></p>

${person.subject
  ? `<p>${
      typeof person.subject === "object"
        ? person.subject[lang]
        : person.subject
    }</p>`
  : ""}
  ${
    person.phone
      ? `<p><a href="tel:${person.phone}" style="text-decoration:none; color:inherit;">
           ${person.phone}
         </a></p>`
      : ""
  }
`;

    container.appendChild(card);
  });

  applyStaffStyles();
}


// 🎨 STYLE (JS ONLY)
function applyStaffStyles() {
  if (document.getElementById("staffStyles")) return;

  const style = document.createElement("style");
  style.id = "staffStyles";

  style.innerHTML = `
  #staffContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 18px;
    margin-top: 20px;
  }

  .staff-card {
    background: #f5f5f5;
    padding: 18px;
    border-radius: 14px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);

    /* ✅ MAKE CARD LONGER */
    min-height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .staff-card img {
    width: 100%;
    height: 220px;   /* ✅ BIGGER IMAGE SPACE */
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .staff-card h3 {
    margin: 6px 0;
    font-size: 17px;
  }

  .staff-card p {
    margin: 4px 0;
    font-size: 14px;
  }
`;
  document.head.appendChild(style);
}