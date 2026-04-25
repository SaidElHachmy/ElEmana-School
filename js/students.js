function loadStudents(classId) {
  const container = document.getElementById("studentsContainer");
  const detailsContainer = document.getElementById("studentDetailsContainer");

  if (!container || !detailsContainer) {
    console.log("❌ Missing containers");
    return;
  }

  container.innerHTML = "";
  detailsContainer.innerHTML = "";

  const lang = window.currentLang || "en";

  if (!window.students || !Array.isArray(window.students)) {
    console.log("❌ students data not loaded");
    return;
  }

  const filtered = window.students.filter(
    s => Number(s.classId) === Number(classId)
  );

  if (filtered.length === 0) {
    const msg =
      window.translations?.[lang]?.no_students ||
      (lang === "ar"
        ? "لا يوجد طلاب"
        : lang === "fr"
        ? "Aucun étudiant trouvé"
        : "No students found");

    container.innerHTML = `<div class="empty-message">${msg}</div>`;
    return;
  }

  filtered.forEach(student => {
    const div = document.createElement("div");
    div.className = "student-card";

    const img = student.image || "assets/images/error.png";

    const name =
      typeof student.name === "object"
        ? student.name?.[lang]
        : student.name;

    const level =
      typeof student.level === "object"
        ? student.level?.[lang]
        : student.level;

    div.innerHTML = `
      <img src="${img}" onerror="this.src='assets/images/error.png'">
      <h3>${name || "N/A"}</h3>
      <p>${level || "N/A"}</p>
    `;

    div.addEventListener("click", function () {
      console.log("CLICK STUDENT:", student.id);
      loadStudentDetails(student.id);
    });

    container.appendChild(div);
  });
}

function loadStudentDetails(id) {

  const container = document.getElementById("studentDetailsContainer");

  if (!container) {
    console.log("❌ container missing");
    return;
  }

  const student = window.students?.find(
    s => Number(s.id) === Number(id)
  );

  console.log("FOUND STUDENT:", student);

  if (!student) {
    const lang = window.currentLang || "en";
    const msg =
      lang === "ar"
        ? "الطالب غير موجود"
        : lang === "fr"
        ? "Étudiant introuvable"
        : "Student not found";

    container.innerHTML = `<div class="empty-message">${msg}</div>`;
    return;
  }

  const lang = window.currentLang || "en";

  // 🔥 FIXED SMART GET (THIS IS THE IMPORTANT PART)
  function getField(field, lang) {
  if (!field) return "N/A";

  if (typeof field === "object") {
    return field[lang] || field.en || field.fr || field.ar || "N/A";
  }

  return field;
}
  const img = student.image || "assets/images/error.png";

  container.style.display = "block";

  container.innerHTML = `
    <div class="student-profile-card">

      <img src="${img}" onerror="this.src='assets/images/error.png'">

      <h2>${get(student.name)}</h2>

      <div class="student-info">


        <p><strong>${lang === "ar" ? "الرقم المعرف": "ID"}:</strong> ${get(student.nationalId)}</p>

        <p><strong>${lang === "ar" ? "تاريخ الولادة" : "Birth Date"}:</strong> ${get(student.birthDate)}</p>

        <p><strong>${lang === "ar" ? "الرقم المدرسي" : "School Number"}:</strong> ${get(student.schoolNumber)}</p>

        <p><strong>${lang === "ar" ? "الهاتف" : "Phone"}:</strong> ${get(student.phone)}</p>

        <p><strong>${lang === "ar" ? "العنوان" : "Address"}:</strong> ${get(student.address)}</p>

        <p><strong>${lang === "ar" ? "المستوى" : "Level"}:</strong> ${get(student.level)}</p>

        <p><strong>${lang === "ar" ? "الدورة" : "Cycle"}:</strong> ${get(student.cycle)}</p>

        <p><strong>${lang === "ar" ? "الحضور" : "Attendance"}:</strong> ${get(student.attendance)}</p>

      </div>

    </div>
  `;
}