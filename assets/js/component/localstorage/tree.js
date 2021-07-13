import { LocalStorage } from "./localstorage";

export class Tree extends LocalStorage {
  _TREE = "tree";
  constructor() {
    super();
  }
  loadTree() {
    const tree = this.load(this._TREE);
    let parseTree = "";

    if (tree) parseTree = JSON.parse(tree);

    return parseTree;
  }
  saveTree(value) {
    this.save(this._TREE, JSON.stringify(value));
  }
}
