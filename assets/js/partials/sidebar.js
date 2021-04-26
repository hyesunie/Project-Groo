const menubar = document.querySelector(".header__menubar");
const sidebarContainer = document.querySelector(".sidebar__container");

function handleMenubarClick() {
  sidebarContainer.classList.toggle("none");
}

function init() {
  menubar.addEventListener("click", handleMenubarClick);
}

if (sidebarContainer) {
  init();
}
