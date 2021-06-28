import { LocalStorage } from "./localstorage";

export class Comment extends LocalStorage {
  #COMMENT = "comment";

  constructor() {
    super();
  }

  loadComment() {
    const currentComment = this.load(this.#COMMENT);
    return currentComment;
  }
  saveComment(value) {
    this.save(this.#COMMENT, value);
  }
}
