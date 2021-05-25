import { LocalStorage } from "./localstorage";

export class User extends LocalStorage {
  #USER = "user";
  #NONE = "none";
  constructor() {
    super();
  }

  loadUser() {
    const currentUser = this.load(this.#USER);

    if (!currentUser) {
      currentUser = createUser();
    }

    return currentUser;
  }

  createUser() {
    const firstVisitor = document.querySelector(".firstvisit");

    firstVisitor.classList.remove(this.#NONE);
    firstVisitor.addEventListener("submit", this.handleSaveUser);
  }

  handleSaveUser(event) {
    event.preventDefault();
    const username = firstVisitor.querySelector("input");
    const name = username.value;

    // loaduser로 리턴하게 해야함!! (paintpage 이용을 위해서)

    this.save(this.#USER, name);
  }
}
