import { Header } from "./component/header/header";
import { Sidebar } from "./component/sidebar/sidebar";
import { Router } from "./router";
import { Tree } from "./component/localstorage/tree";
import { Habit } from "./component/localstorage/habit";
import { Comment } from "./component/localstorage/comment";
import { User } from "./component/localstorage/user";
import { State } from "./component/state/state";

function init() {
  let tree = new Tree();
  let habit = new Habit();
  let comment = new Comment();
  let user = new User();
  let state = new State();

  tree.registerListener((data) => state.notify(data));

  initHeader();
  initSidebar(state, tree);

  let router = new Router(tree, habit, comment, user);
  router.init();
}

function initHeader() {
  let header = new Header();
  let headerContainer = document.querySelector("header");

  headerContainer.innerHTML = header.body;
}

function initSidebar(state, tree) {
  let sidebar = new Sidebar(tree);
  state.addEventListener((data) => sidebar.changeData(data));
  let sidebarContainer = document.querySelector("aside");

  sidebarContainer.innerHTML = sidebar.body;
  sidebar.initaddEventListener();
  sidebar.paintInfo();
}

window.addEventListener("DOMContentLoaded", () => {
  init();
});
