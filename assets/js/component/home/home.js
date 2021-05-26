import { Habit } from "../localstorage/habit";
import { User } from "../localstorage/user";
import { Comment } from "../localstorage/comment";

export class Home {
  #NONE = "none";

  constructor() {}
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
    const habit = new Habit();
    const user = new User();
    const comment = new Comment();

    const loadedHabits = habit.loadHabits();
    const loadedUser = user.loadUser();
    const loadedCommnet = comment.loadComment();

    this.paintPage(loadedUser);
    this.paintHabits(loadedHabits);
    this.paintComment(loadedCommnet);
  }

  paintHabits(habits) {
    const loadHabitList = document.querySelector(".load__habit__list");

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
  paintPage(name) {
    const firstVisitor = document.querySelector(".firstvisit");
    const userConfirmation = document.querySelector(".userConfirmation");
    firstVisitor.classList.add(this.#NONE);
    userConfirmation.classList.remove(this.#NONE);
  }
  paintComment(comment) {
    const treeComment = document.querySelector(".tree__comment");

    treeComment.innerHTML = comment;
  }
}
