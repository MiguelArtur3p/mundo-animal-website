import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(element, events) {
    this.dropdownMenus = document.querySelectorAll(element);
    this.activeClass = "active";
    this.mouseEvents = events || ["touchstart", "click"];
  }

  activeDropdownMenu = (event) => {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.mouseEvents, () => {
      element.classList.remove(this.activeClass);
    });
  };

  addEventsDropdownMenu() {
    this.dropdownMenus.forEach((menu) => {
      this.mouseEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEventsDropdownMenu();
    }
    return this;
  }
}
