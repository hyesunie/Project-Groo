export class Sidebar {
  constructor() {}
  get body() {
    return `<div class="sidebar__profile">
        <img src="" href="/detail.html" class="user__profile">
        <h4> 오늘 10번 물을 주셨네요.</h4>
    </div>
    <ul class="sidebar__page">
        <li>
            <a href="/detail" class="sidebar__detail">Detail</a>
        </li>
        <li>
            <a href="" class="sidebar__info">Information</a>
        </li>
    </ul>`;
  }

  initaddEventListener() {
    const menubar = document.querySelector(".header__menubar");
    const sidebarContainer = document.querySelector("aside");

    menubar.addEventListener("click", () => {
      sidebarContainer.classList.toggle("none");
    });
  }
}
