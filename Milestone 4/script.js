const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});