import { Header } from "./component/header/header";
import { Sidebar } from "./component/sidebar/sidebar";
import { Router } from "./router";

function init() {
  initHeader();
  initSidebar();

  let router = new Router();
  router.init();
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
