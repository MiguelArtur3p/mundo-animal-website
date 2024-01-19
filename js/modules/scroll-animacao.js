export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
  }

  animaScroll = () => {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  };

  addAnimaScrollEvent() {
    window.addEventListener("scroll", this.animaScroll);
  }

  init() {
      this.animaScroll();
      this.addAnimaScrollEvent();
    
    return this;
  }
}
