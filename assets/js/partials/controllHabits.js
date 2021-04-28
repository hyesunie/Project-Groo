const habitsContainer = document.querySelector(".detail__habits");
const addHabitForm = document.querySelector(".add__habit");
const habitList = document.querySelector(".detail__habit__list");
const inputHabit = addHabitForm.querySelector("input");

let LIST = [];
const HABIT_LIST = "habits";

function deleteHabit(event) {
  const delLi = event.target.parentNode;

  const newList = LIST.filter((item) => item.id !== parseInt(delLi.id));
  LIST = newList;

  delLi.remove();
  saveHabits();
}

function saveHabits() {
  localStorage.setItem(HABIT_LIST, JSON.stringify(LIST));
}

function paintHabit(habit) {
  const span = document.createElement("span");
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const habitId = LIST.length;

  btn.innerText = "x";
  btn.addEventListener("click", deleteHabit);

  span.innerHTML = habit;

  li.appendChild(span);
  li.appendChild(btn);
  li.id = habitId;

  habitList.appendChild(li);

  const habitobj = {
    habit,
    id: habitId,
  };

  LIST.push(habitobj);

  saveHabits();
}

function handleAddHabitSubmit(event) {
  event.preventDefault();
  paintHabit(inputHabit.value);
  inputHabit.value = "";
}

function loadHabits() {
  const habits = JSON.parse(localStorage.getItem(HABIT_LIST));

  if (habits) {
    habits.forEach((element) => {
      console.log(element.habit);
      paintHabit(element.habit);
    });
  }
}

function init() {
  loadHabits();
  addHabitForm.addEventListener("submit", handleAddHabitSubmit);
}

if (habitsContainer) {
  init();
}
