import { Home } from "./component/home/home";
import { Detail } from "./component/detail/detail";

export class Router {
  #routes = [
    {
      path: "/",
      pageobj: () => new Home(this.habit, this.comment, this.user, this.tree),
    },
    {
      path: "/detail",
      pageobj: () => new Detail(this.habit, this.comment, this.user),
    },
  ];
  constructor(tree, habit, comment, user) {
    this.habit = habit;
    this.comment = comment;
    this.user = user;
    this.tree = tree;
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
