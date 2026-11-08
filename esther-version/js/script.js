const button = document.querySelector("#menu-toggle");
const nav = document.querySelector("#main-nav");

button.addEventListener("click", function () {
  nav.classList.toggle("open");
});