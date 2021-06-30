import { Home } from "./component/home/home";
import { Detail } from "./component/detail/detail";
import { Habit } from "./component/localstorage/habit";
import { Comment } from "./component/localstorage/comment";
import { User } from "./component/localstorage/user";

export class Router {
  #routes = [
    { path: "/", pageobj: () => new Home(this.habit, this.comment, this.user) },
    {
      path: "/detail",
      pageobj: () => new Detail(this.habit, this.comment, this.user),
    },
  ];
  constructor() {
    this.habit = new Habit();
    this.comment = new Comment();
    this.user = new User();
  }

  init() {
    document.addEventListener("click", (e) => {
      const target = e.target;

      if (!target.matches("[data-href]")) {
        return;
      }
      e.preventDefault();

      if (location.href !== target.href) {
        history.pushState(null, null, target.href);
      }

      this.route();
    });
    this.route();
  }

  route() {
    const page = this.#routes.find((item) => {
      if (item.path === location.pathname) return true;
    });

    const section = document.querySelector("section");
    section.innerHTML = page.pageobj().body;

    page.pageobj().paintInfo();
  }
}
