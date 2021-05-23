export class Header {
  constructor() {}
  get body() {
    return `<div class="header__container">
      <a href="/" class="header__LOGO">Groo</a>
      <button class="header__menubar">
          <i class="fas fa-bars"></i>
      </button>
  </div>`;
  }
}
