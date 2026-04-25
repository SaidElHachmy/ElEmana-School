let openedStudentId = null;

function loadStudentDetails(studentId) {
  const container = document.getElementById("studentDetailsContainer");
  if (!container) return;

  const student = window.students.find(s => Number(s.id) === Number(studentId));
  if (!student) return;

  const lang = window.currentLang || "en";

  // helper for multilingual fields
  const get = (field) => {
    if (!field) return "N/A";
    if (typeof field === "object") return field[lang] || field.en || field.fr || field.ar || "N/A";
    return field;
  };

  // 🔁 TOGGLE LOGIC
  if (openedStudentId === studentId) {
    container.innerHTML = "";
    openedStudentId = null;
    return;
  }

  openedStudentId = studentId;

  const img = student.image || "assets/images/error.png";

  container.innerHTML = `
    <div class="student-profile-card">

      <img src="${img}" onerror="this.src='assets/images/error.png'">

      <h2>${get(student.name)}</h2>


      
              <p><strong>${lang === "ar" ? "الرقم المعرف": "ID"}:</strong> ${get(student.nationalId || "N/A")}</p>

      
      
      <p><strong>${lang === "ar" ? "تاريخ الميلاد" : "Birth Date"}:</strong> ${student.birthDate || "N/A"}</p>
      <p><strong>${lang === "ar" ? "رقم المدرسة" : "School Number"}:</strong> ${student.schoolNumber || "N/A"}</p>
      <p><strong>${lang === "ar" ? "الهاتف" : "Phone"}:</strong> ${student.phone || "N/A"}</p>
      <p><strong>${lang === "ar" ? "العنوان" : "Address"}:</strong> ${student.address || "N/A"}</p>
      <p><strong>${lang === "ar" ? "المستوى" : "Level"}:</strong> ${get(student.level)}</p>
      <p><strong>${lang === "ar" ? "الدورة" : "Cycle"}:</strong> ${get(student.cycle)}</p>
      <p><strong>${lang === "ar" ? "الحضور" : "Attendance"}:</strong> ${student.attendance || "N/A"}</p>

    </div>
  `;
}