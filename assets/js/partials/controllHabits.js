const habitsContainer = document.querySelector(".detail__habits");
const addHabitForm = document.querySelector(".add__habit");
const habitList = document.querySelector(".detail__habit__list");
const inputHabit = addHabitForm.querySelector("input");

let LIST = [];

function deleteHabit(event) {
  const delLi = event.target.parentNode;

  const newList = LIST.filter((item) => item.id !== parseInt(delLi.id));
  LIST = newList;

  delLi.remove();
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
}

function handleAddHabitSubmit(event) {
  event.preventDefault();
  paintHabit(inputHabit.value);
  inputHabit.value = "";
}

function init() {
  addHabitForm.addEventListener("submit", handleAddHabitSubmit);
}

if (habitsContainer) {
  init();
}
