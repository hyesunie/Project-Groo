import { Habit } from "../localstorage/habit";

export class Detail {
  habit = new Habit();
  LIST = [];
  constructor() {}
  get body() {
    return `<div class="detail__habits__container">
    <p>Habit List</p>
    <div class="habit__management">
        <form class="add__habit">
            <input type="text" placeholder="add habits"/>
        </form>
        <ul class="detail__habit__list">
            
        </ul>
    </div> 
</div>
<div class="comment__container">
    <p>Comment</p>
    <input type="text" class="user__comment" value="Comment" disabled></input>
    <button>edit</button>      
</div>`;
  }

  paintInfo() {
    const addHabitForm = document.querySelector(".add__habit");
    const loadedHabits = this.habit.loadHabits();

    this.loadHaibtList(loadedHabits);
    addHabitForm.addEventListener("submit", this.handleAddHabitSubmit);
  }

  loadHaibtList(habits) {
    for (const element of habits) {
      this.paintHabit(element);
    }
  }

  paintHabit(element) {
    const habitList = document.querySelector(".detail__habit__list");

    const value = element.habit;
    const span = document.createElement("span");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const habitId = this.LIST.length;

    btn.innerText = "x";
    btn.addEventListener("click", this.deleteHabit);

    span.innerHTML = value;

    li.appendChild(span);
    li.appendChild(btn);
    li.id = habitId;

    habitList.appendChild(li);

    const habitobj = {
      value,
      id: habitId,
    };

    this.LIST.push(habitobj);

    this.habit.saveHabits(this.LIST);
  }

  deleteHabit(event) {
    const habit = new Habit();
    const temp = this.LIST;

    const delLi = event.target.parentNode;

    console.log(temp);

    const newList = temp.filter((item) => item.id !== parseInt(delLi.id));
    this.LIST = newList;

    delLi.remove();
    habit.saveHabits(this.LIST);
  }

  handleAddHabitSubmit(event) {
    const addHabitForm = document.querySelector(".add__habit");
    const inputHabit = addHabitForm.querySelector("input");
    const detail = new Detail();
    
    event.preventDefault();
    detail.paintHabit(inputHabit.value);
    inputHabit.value = "";
  }
}
