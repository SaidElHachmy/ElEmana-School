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

      <p> <span style="font-weight: bold;">🆔 ${lang === "ar" ? "الرقم المعرف" : lang === "fr" ? "ID" : "ID"}:</span> ${get(student.nationalId)}</p>

      <p> <span style="font-weight: bold;">🎂 ${lang === "ar" ? "تاريخ الميلاد" : lang === "fr" ? "Date de naissance" : "Birth Date"}:</span> ${get(student.birthDate)}</p>

      <p> <span style="font-weight: bold;">🏫 ${lang === "ar" ? "رقم المدرسة" : lang === "fr" ? "Numéro scolaire" : "School Number"}:</span> ${get(student.schoolNumber)}</p>

      <p> <span style="font-weight: bold;">📞 ${lang === "ar" ? "الهاتف" : lang === "fr" ? "Téléphone" : "Phone"}:</span> ${get(student.phone)}</p>

      <p> <span style="font-weight: bold;">📍 ${lang === "ar" ? "العنوان" : lang === "fr" ? "Adresse" : "Address"}:</span> ${get(student.address)}</p>

      <p> <span style="font-weight: bold;">🎓 ${lang === "ar" ? "المستوى" : lang === "fr" ? "Niveau" : "Level"}:</span> ${get(student.level)}</p>

      <p> <span style="font-weight: bold;">📚 ${lang === "ar" ? "الدورة" : lang === "fr" ? "Cycle" : "Cycle"}:</span> ${get(student.cycle)}</p>

    </div>

  </div>
`;
  
}
