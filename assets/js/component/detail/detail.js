import { Habit } from "../localstorage/habit";

export class Detail {
  LIST = [];
  constructor(habit, comment, user) {
    this.habit = habit;
    this.comment = comment;
    this.user = user;
  }
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

    this.paintHabits(loadedHabits);

    this.handleAddHabitSubmit = this.handleAddHabitSubmit.bind(this);
    addHabitForm.addEventListener("submit", this.handleAddHabitSubmit);
  }

  paintHabits(habits) {
    for (let element of habits) {
      const habitList = document.querySelector(".detail__habit__list");

      const value = element.habit;
      const span = document.createElement("span");
      const li = document.createElement("li");
      const btn = document.createElement("button");
      const habitId = this.LIST.length;

      btn.innerText = "x";
      this.deleteHabit = this.deleteHabit.bind(this);
      btn.addEventListener("click", this.deleteHabit);

      span.innerHTML = value;

      li.appendChild(span);
      li.appendChild(btn);
      li.id = habitId;

      habitList.appendChild(li);

      const habitobj = {
        habit: value,
        id: habitId,
      };

      this.LIST.push(habitobj);
    }
    this.habit.saveHabits(this.LIST);
  }

  deleteHabit(event) {
    const temp = this.LIST;
    const delLi = event.target.parentNode;

    const newList = temp.filter((item) => item.id !== parseInt(delLi.id));
    this.LIST = newList;

    delLi.remove();
    this.habit.saveHabits(this.LIST);
  }

  handleAddHabitSubmit(event) {
    event.preventDefault();
    const addHabitForm = document.querySelector(".add__habit");
    const inputHabit = addHabitForm.querySelector("input");
    const newHabit = [
      {
        habit: inputHabit.value,
      },
    ];

    this.paintHabits(newHabit);
    inputHabit.value = "";
  }
}
