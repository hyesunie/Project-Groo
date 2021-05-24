import { Habit } from "../localstorage/habit";
import { User } from "../localstorage/user";

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
          <a href="/detail" class="tree__comment">나의 아이를 위해 나무를 키워야지 </a>
          <img src="view/img/tree.png" alt="">
          <h2>20 Groo</h2>
      </div>
  </div>`;
  }
  initaddEventListener() {
    const habit = new Habit();
    const user = new User();

    const currentUser = user.loadUser();

    this.paintPage(currentUser);
  }
  paintPage(name) {
    const firstVisitor = document.querySelector(".firstvisit");
    const userConfirmation = document.querySelector(".userConfirmation");
    firstVisitor.classList.add(this.#NONE);
    userConfirmation.classList.remove(this.#NONE);
  }
}
