const loadHabitList = document.querySelector(".load__habit__list");

const HABIT_LIST = "habits";

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
      console.log(typeof element.habit);
      paintHomeHabits(element.habit);
    });
  }
}

function init() {
  loadHomeHabits();
}

if (loadHabitList) {
  init();
}
