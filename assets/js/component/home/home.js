import { Habit } from "../localstorage/habit";
import { User } from "../localstorage/user";
import { Comment } from "../localstorage/comment";

export class Home {
  #NONE = "none";
  firstVisitor = document.querySelector(".firstvisit");
  userConfirmation = document.querySelector(".userConfirmation");

  constructor(habit, comment, user) {
    this.habit = habit;
    this.comment = comment;
    this.user = user;
  }
  get body() {
    return `<form class="firstvisit none">
      <input type="text" placeholder="What your name?"/>
  </form>
  <div class="userConfirmation none">
      <div class="home__habit__list">
          <form action="" method="post">
              <div class="load__habit__list">

              </div>
              <input type="image" src="view/img/bucket.png" alt="제출버튼">
          </form>
      </div>
      <div class="tree__container">
          <a href="/detail" data-href="/detail" class="tree__comment">나의 아이를 위해 나무를 키워야지 </a>
          <img src="view/img/tree.png" alt="">
          <h2>20 Groo</h2>
      </div>
  </div>`;
  }
  paintInfo() {
    const loadedHabits = this.habit.loadHabits();
    const loadedUser = this.user.loadUser();
    const loadedCommnet = this.comment.loadComment();

    if (!loadedUser) {
      localStorage.clear();
    }

    this.paintPage(loadedUser);
    this.paintHabits(loadedHabits);
    this.paintComment(loadedCommnet);
  }

  paintHabits(habits) {
    const loadHabitList = document.querySelector(".load__habit__list");
    this.handleClickhabits = this.handleClickhabits.bind(this);

    for (const item of habits) {
      const input = document.createElement("input");
      input.type = "button";
      input.value = item.habit;
      input.classList.add("habit__btn");

      input.addEventListener("click", this.handleClickhabits);
      loadHabitList.appendChild(input);
    }
  }
  handleClickhabits(event) {
    const { target } = event;
    target.classList.toggle("check");
  }

  handleSaveUser(event) {
    event.preventDefault();
    const username = this.firstVisitor.querySelector("input");
    const name = username.value;
    this.user.saveUser(name);
    this.paintPage(name);
  }
  paintPage(name) {
    if (name) {
      this.firstVisitor.classList.add(this.#NONE);
      this.userConfirmation.classList.remove(this.#NONE);
      return;
    }
    console.log(this.firstVisitor.classList);
    this.firstVisitor.classList.remove(this.#NONE);
    this.userConfirmation.classList.add(this.#NONE);
    this.handleSaveUser = this.handleSaveUser.bind(this);
    this.firstVisitor.addEventListener("submit", this.handleSaveUser);
  }
  paintComment(comment) {
    const treeComment = document.querySelector(".tree__comment");
    treeComment.innerHTML = comment;
  }
}
