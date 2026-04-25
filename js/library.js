function loadBooks() {
  const container = document.getElementById("booksContainer");
  if (!container) return;

  container.innerHTML = "";

  if (!window.books || window.books.length === 0) {
    container.innerHTML = `<p>No books available yet</p>`;
    return;
  }

  window.books.forEach(book => {
    const div = document.createElement("div");
    div.className = "card";

    const title = book.title[window.currentLang || "en"];

    div.innerHTML = `
      <h3>${title}</h3>
      <button class="download-btn">Download PDF</button>
    `;

    const btn = div.querySelector("button");

    // ✅ attach event properly (NO inline onclick issues)
    btn.addEventListener("click", () => {
      downloadPDF(book.file);
    });

    container.appendChild(div);
  });
}
function downloadPDF(file) {
  console.log("Trying to download:", file);

  if (!file) {
    alert("File not found");
    return;
  }

  // ✅ Try opening first (to confirm file exists)
  const test = window.open(file, "_blank");

  if (!test) {
    alert("Popup blocked or file not accessible");
    return;
  }

  // ✅ Then force download
  const link = document.createElement("a");
  link.href = file;
  link.setAttribute("download", file.split("/").pop());
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}