let openedStudentId = null;

function loadStudentDetails(studentId) {
  const container = document.getElementById("studentDetailsContainer");
  if (!container) return;

  const student = window.students.find(
    s => Number(s.id) === Number(studentId)
  );

  if (!student) return;

  const lang = (window.currentLang || "en").toLowerCase();

  // 🧠 multilingual getter
  const get = (field) => {
    if (!field) return "N/A";
    if (typeof field === "object") {
      return field[lang] || field.en || field.fr || field.ar || "N/A";
    }
    return field;
  };

  // 🌍 LABEL SYSTEM (CLEAN FIX)
  const labels = {
    en: {
      id: "NIN",
      birth: "Birth Date",
      school: "School Number",
      phone: "Phone",
      address: "Address",
      level: "Level",
      cycle: "Cycle"
    },
    fr: {
      id: "NNI",
      birth: "Date de naissance",
      school: "Numéro scolaire",
      phone: "Téléphone",
      address: "Adresse",
      level: "Niveau",
      cycle: "Cycle"
    },
    ar: {
      id: "الرقم الوطني للتعريف",
      birth: "تاريخ الميلاد",
      school: "رقم المدرسة",
      phone: "الهاتف",
      address: "العنوان",
      level: "المستوى",
      cycle: "الدورة"
    }
  };

  const t = labels[lang] || labels.en;

  // 🔁 TOGGLE
  if (openedStudentId === studentId) {
    container.innerHTML = "";
    openedStudentId = null;
    return;
  }

  openedStudentId = studentId;

  const img = student.image || "assets/images/error.png";

  container.innerHTML = `
    <div class="student-profile-card" dir="${lang === "ar" ? "rtl" : "ltr"}">

      <img src="${img}" onerror="this.src='assets/images/error.png'">

      <h2>${get(student.name)}</h2>

      <div class="student-info">

        <p><span class="label" style="font-weight: bold;">${t.id}:</span> ${get(student.nationalId)}</p>

        <p><span class="label" style="font-weight: bold;">${t.birth}:</span> ${get(student.birthDate)}</p>

        <p><span class="label" style="font-weight: bold;">${t.school}:</span> ${get(student.schoolNumber)}</p>



        ${
  get(student.phone) !== "N/A"
    ? `<p>
        <span class="label" style="font-weight: bold;">${t.phone}:</span> 
        <a href="tel:+222${get(student.phone)}" style="color: inherit; text-decoration: none;">
          ${get(student.phone)}
        </a>
      </p>`
    : ""
}
        <p><span class="label" style="font-weight: bold;">${t.address}:</span> ${get(student.address)}</p>

        <p><span class="label" style="font-weight: bold;">${t.level}:</span> ${get(student.level)}</p>

        <p><span class="label" style="font-weight: bold;">${t.cycle}:</span> ${get(student.cycle)}</p>

      </div>

    </div>
  `;
}
