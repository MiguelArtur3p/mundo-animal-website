import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    this.eventos = eventos || ["click", "touchstart"];
  }

  openMenu = (event) => {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  };

  addEventosMenuMobile() {
    if (this.menuButton) {
      this.eventos.forEach((evento) =>
        this.menuButton.addEventListener(evento, this.openMenu)
      );
    }
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventosMenuMobile();
    }
    return this;
  }
}
