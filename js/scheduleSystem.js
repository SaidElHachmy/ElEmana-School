// 🌍 DAYS TRANSLATION
const scheduleDaysLang = {
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  fr: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  ar: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
};

// 📅 AUTO SCHOOL YEAR
function getSchoolYear() {
  const now = new Date();
  const year = now.getFullYear();

  return now.getMonth() >= 8
    ? `${year} - ${year + 1}`
    : `${year - 1} - ${year}`;
}


function loadSchedule() {
  const container = document.getElementById("scheduleContainer");
  const title = document.getElementById("scheduleTitle");

  if (!container || !title) return;

  const lang = window.currentLang || "en";

  const labels = {
    en: { title: "School Timetable", time: "Time" },
    fr: { title: "Emploi du temps", time: "Heure" },
    ar: { title: "الجدول الدراسي", time: "الوقت" }
  };

  const t = labels[lang];

  title.textContent = `${t.title} (${getSchoolYear()})`;

  container.innerHTML = "";

  const { days, classes, hours, data } = window.scheduleData;

  days.forEach((day, index) => {
  const translatedDay = scheduleDaysLang[lang][index];
    let html = `<table class="schedule-table">`;

    html += `<caption>${translatedDay}</caption>`;

    html += `<tr><th>${t.time}</th>`;
    classes.forEach(c => html += `<th>${c}</th>`);
    html += `</tr>`;

    hours.forEach((hour, i) => {
      html += `<tr>`;
      html += `<td class="time-cell">${hour}</td>`;

      data[day][i].forEach(cell => {
        html += `<td>${cell === "/" ? "❌" : cell}</td>`;
      });

      html += `</tr>`;
    });

    html += `</table>`;

    container.innerHTML += html;
  });

  applyScheduleStyles();
}



function applyScheduleStyles() {
  if (document.getElementById("scheduleStyles")) return;

  const style = document.createElement("style");
  style.id = "scheduleStyles";

  style.innerHTML = `
    .schedule-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      font-size: 12px;
    }

    .schedule-table th,
    .schedule-table td {
      border: 1px solid #ccc;
      padding: 6px;
      text-align: center;
    }

    .schedule-table th {
      background: #f0f0f0;
    }

    .schedule-table caption {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .time-cell {
      font-weight: bold;
    }
  `;

  document.head.appendChild(style);
}