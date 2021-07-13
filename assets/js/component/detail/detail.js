export class Detail {
  #list = [];

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
    <button class="comment-edit">edit</button>      
    </div>`;
  }

  paintInfo() {
    const addHabitForm = document.querySelector(".add__habit");

    const loadedHabits = this.habit.loadHabits();
    const loadedComment = this.comment.loadComment();

    this.paintHabits(loadedHabits);
    this.paintComment(loadedComment);

    addHabitForm.addEventListener("submit", (evt) =>
      this.handleAddHabitSubmit(evt)
    );
  }

  paintHabits(habits) {
    for (let element of habits) {
      const habitList = document.querySelector(".detail__habit__list");

      const value = element.habit;
      const span = document.createElement("span");
      const li = document.createElement("li");
      const btn = document.createElement("button");
      const habitId = this.#list.length;

      btn.innerText = "x";
      btn.addEventListener("click", (evt) => this.deleteHabit(evt));

      span.innerHTML = value;

      li.appendChild(span);
      li.appendChild(btn);
      li.id = habitId;

      habitList.appendChild(li);

      const habitobj = {
        habit: value,
        id: habitId,
      };

      this.#list.push(habitobj);
    }
    this.habit.saveHabits(this.#list);
  }

  deleteHabit(event) {
    const temp = this.#list;
    const delLi = event.target.parentNode;

    const newList = temp.filter((item) => item.id !== Number(delLi.id));
    this.#list = newList;

    delLi.remove();
    this.habit.saveHabits(this.#list);
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

  paintComment(cmt) {
    const inputComment = document.querySelector(".user__comment");
    const editButton = document.querySelector(".comment-edit");
    if (cmt) {
      inputComment.value = cmt;
    }
    editButton.addEventListener("click", (evt) =>
      this.handleClickCommentEdit(evt)
    );
  }

  handleClickCommentEdit(evt) {
    const inputComment = document.querySelector(".user__comment");

    inputComment.toggleAttribute("disabled");

    if (inputComment.getAttribute("disabled") !== null) {
      this.comment.saveComment(inputComment.value);
    }
  }
}
