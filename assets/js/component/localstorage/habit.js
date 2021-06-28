import { LocalStorage } from "./localstorage";

export class Habit extends LocalStorage {
  #HABIT_LIST = "habits";
  constructor() {
    super();
  }
  loadHabits() {
    const habits = this.load(this.#HABIT_LIST);
    let parseHabits = "";

    console.log(habits);

    if (habits) {
      parseHabits = JSON.parse(habits);
    }

    return parseHabits;
  }
  saveHabits(value) {
    this.save(this.#HABIT_LIST, JSON.stringify(value));
  }
}
