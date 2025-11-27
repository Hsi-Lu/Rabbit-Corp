document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const bookBtn = document.getElementById("book-rabbit-btn");
  if (bookBtn) {
    bookBtn.addEventListener("click", (event) => {
      event.preventDefault();
      alert("This is an exercise demo by AI —— booking a rabbit isn't actually available.");
    });
  }
});


