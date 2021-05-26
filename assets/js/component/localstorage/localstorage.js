export class LocalStorage {
  constructor() {}
  save(id, value) {
    localStorage.setItem(id, value);
  }
  load(id) {
    return localStorage.getItem(id);
  }
}
