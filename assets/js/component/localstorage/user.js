import { LocalStorage } from "./localstorage";

export class User extends LocalStorage {
  #USER = "user";
  constructor() {
    super();
  }

  loadUser() {
    let currentUser = this.load(this.#USER);

    return currentUser;
  }

  saveUser(value) {
    this.save(this.#USER, value);
  }
}
