export class Home {
  #NONE = "none";
  _tree = {};
  firstVisitor = document.querySelector(".firstvisit");
  userConfirmation = document.querySelector(".userConfirmation");

  constructor(habit, comment, user, tree) {
    this.habit = habit;
    this.comment = comment;
    this.user = user;
    this.tree = tree;
  }
  get body() {
    return `<form class="firstvisit none">
      <input type="text" placeholder="What your name?"/>
  </form>
  <div class="userConfirmation none">
      <div class="home__habit__list">
          <form class="tree-watering" action="" method="post">
              <div class="load__habit__list">

              </div>
              <input type="image" src="view/img/bucket.png" alt="제출버튼">
          </form>
      </div>
      <div class="tree__container">
          <a href="/detail" data-href="/detail" class="tree__comment">나의 아이를 위해 나무를 키워야지 </a>
          <img src="view/img/tree.png" alt="">
          <h2 class="tree-info">20 Groo</h2>
      </div>
  </div>`;
  }
  paintInfo() {
    const loadedHabits = this.habit.loadHabits();
    const loadedUser = this.user.loadUser();
    const loadedCommnet = this.comment.loadComment();
    const loadedTree = this.tree.loadTree();

    if (!loadedUser) {
      localStorage.clear();
    }

    this.paintPage(loadedUser);
    this.paintHabits(loadedHabits);
    this.paintComment(loadedCommnet);
    this.paintTree(loadedTree);

    const treeWatering = document.querySelector(".tree-watering");
    treeWatering.addEventListener("submit", (evt) => {
      this.handleTreeWatering(evt);
    });
  }

  paintHabits(habits) {
    const loadHabitList = document.querySelector(".load__habit__list");

    for (const item of habits) {
      const input = document.createElement("input");
      input.type = "button";
      input.value = item.habit;
      input.classList.add("habit__btn");

      input.addEventListener("click", (evt) => this.handleClickhabits(evt));
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
    this.firstVisitor.classList.remove(this.#NONE);
    this.userConfirmation.classList.add(this.#NONE);
    this.firstVisitor.addEventListener("submit", (evt) =>
      this.handleSaveUser(evt)
    );
  }
  paintComment(comment) {
    const treeComment = document.querySelector(".tree__comment");
    treeComment.innerHTML = comment;
  }
  paintTree(treeInfo) {
    const treeDOM = document.querySelector(".tree-info");

    if (!treeInfo) {
      treeDOM.innerHTML = "1 Groo";
      this._tree.groo = 1;
      this._tree.watering = 0;
      this._tree.cnt = 0;
      this.tree.saveTree(this._tree);
      return;
    }
    this._tree = { ...treeInfo };
    treeDOM.innerHTML = this._tree.groo + " Groo";
    this.tree.saveTree(this._tree);
  }
  handleTreeWatering(event) {
    event.preventDefault();
    let cnt = 0;

    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].classList.contains("check")) cnt++;
    }
    let obg = { ...this._tree };
    obg.watering += 1;
    obg.cnt += cnt;

    if (obg.watering * obg.cnt > 40) {
      obg.groo += 1;
      obg.watering = 0;
      obg.cnt = 0;
    }
    for (let i = 0; i < event.target.length; i++) {
      event.target[i].classList.remove("check");
    }

    this.paintTree(obg);
    this.tree.dataModify(obg);
  }
}
