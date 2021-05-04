const homeContainer = document.querySelector(".userConfirmation");
const loadHabitList = document.querySelector(".load__habit__list");
const treeComment = document.querySelector(".tree__comment");

const HABIT_LIST = "habits";
const COMMENT = "comment";

function handleClickhabits(event) {
  const { target } = event;
  target.classList.toggle("check");
}

function paintHomeHabits(habit) {
  const input = document.createElement("input");
  input.type = "button";
  input.value = habit;
  input.classList.add("habit__btn");
  input.addEventListener("click", handleClickhabits);
  loadHabitList.appendChild(input);
}

function loadHomeHabits() {
  const habits = localStorage.getItem(HABIT_LIST);

  if (habits) {
    const parseHabits = JSON.parse(habits);

    parseHabits.forEach((element) => {
      paintHomeHabits(element.habit);
    });
  }
}

function loadHomeComment() {
  const comment = localStorage.getItem(COMMENT);

  if (comment) {
    treeComment.innerHTML = comment;
  }
}

function init() {
  loadHomeHabits();
  loadHomeComment();
}

if (homeContainer) {
  init();
}
