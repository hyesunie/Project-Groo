export class LocalStorage {
  constructor() {
    this.listeners = [];
  }
  save(id, value) {
    localStorage.setItem(id, value);
  }
  load(id) {
    return localStorage.getItem(id);
  }
  registerListener(listener) {
    this.listeners.push(listener);
    console.log(this.listeners);
  }
  dataModify(data) {
    this.listeners.forEach((listener) => listener(data));
  }
}
