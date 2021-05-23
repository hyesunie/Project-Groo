import { Header } from "./component/header/header";
import { Sidebar } from "./component/sidebar/sidebar";

function init() {
  initHeader();
  initSidebar();
}

function initHeader() {
  let header = new Header();
  let headerContainer = document.querySelector("header");

  headerContainer.innerHTML = header.body;
}

function initSidebar() {
  let sidebar = new Sidebar();
  let sidebarContainer = document.querySelector("aside");

  sidebarContainer.innerHTML = sidebar.body;
  sidebar.initaddEventListener();
}

window.addEventListener("DOMContentLoaded", () => {
  init();
});
