const firstVisitor = document.querySelector(".firstvisit");
const userConfirmation = document.querySelector(".userConfirmation");
const username = firstVisitor.querySelector("input");

const USER = "user";
const NONE = "none";

function saveName(name) {
  localStorage.setItem(USER, name);
}

function handleSaveUser(event) {
  event.preventDefault();
  const name = username.value;
  paintPage(name);
  saveName(name);
}

function paintPage(name) {
  firstVisitor.classList.add(NONE);
  userConfirmation.classList.remove(NONE);
}

function createUser() {
  firstVisitor.classList.remove(NONE);
  firstVisitor.addEventListener("submit", handleSaveUser);
}

function loadName() {
  const currentUser = localStorage.getItem(USER);

  if (!currentUser) {
    createUser();
    return;
  }
  paintPage(currentUser);
}

function init() {
  loadName();
}

if (firstVisitor) {
  init();
}
