const btnOch = document.querySelector("#btn");
const clos = document.querySelector("#closeBtn");
const seidbar = document.querySelector("#sidebar");
const overlay = document.querySelector("#overlay");

btnOch.addEventListener("click", () => {
  seidbar.style.left = 0;
  overlay.classList.remove("hidden");
});

clos.addEventListener("click", () => {
  sidebar.style.left = "-250px"; // sidebar yopiladi
  overlay.classList.add("hidden"); // overlay yashiriladi
});

// Overlay bosilganda ham yopilsin
overlay.addEventListener("click", () => {
  sidebar.style.left = "-250px";
  overlay.classList.add("hidden");
});
