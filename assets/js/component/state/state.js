export class State {
  constructor() {
    this.listeners = [];
  }
  addEventListener(listener) {
    this.listeners.push(listener);
  }
  notify(data) {
    this.listeners.forEach((listener) => listener(data));
  }
}
