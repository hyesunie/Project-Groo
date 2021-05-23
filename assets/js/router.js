import { Home } from "./component/home/home";
import { Detail } from "./component/detail/detail";

export class Router {
  #routes = [
    { path: "/", pageobj: () => new Home() },
    { path: "/detail", pageobj: () => new Detail() },
  ];
  constructor() {}

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
    const page = this.#routes.find((item, index) => {
      if (item.path === location.pathname) return true;
    });

    const section = document.querySelector("section");
    section.innerHTML = page.pageobj().body;
  }
}
