export class Sidebar {
  constructor(tree) {
    this.tree = tree;
  }
  get body() {
    return `<div class="sidebar__profile">
        <img src="" href="/detail.html" class="user__profile">
        <h4 class="watering-cnt">10번 물을 주셨네요.</h4>
    </div>
    <ul class="sidebar__page">
        <li>
            <a href="/detail" data-href="/detail" class="sidebar__detail">Detail</a>
        </li>
        <li>
            <a href="" class="sidebar__info">Information</a>
        </li>
    </ul>`;
  }
  changeData(data) {
    this.paintWateringCnt(data);
  }
  paintInfo() {
    let loadedTree = this.tree.loadTree();
    this.paintWateringCnt(loadedTree);
  }
  initaddEventListener() {
    const menubar = document.querySelector(".header__menubar");
    const sidebarContainer = document.querySelector("aside");

    menubar.addEventListener("click", () => {
      sidebarContainer.classList.toggle("none");
    });
  }

  paintWateringCnt(data) {
    const wateringCnt = document.querySelector(".watering-cnt");

    wateringCnt.innerHTML = data.watering + "번 물을 주셨네요.";
  }
}
