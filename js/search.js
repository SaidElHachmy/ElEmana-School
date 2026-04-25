function search() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
}