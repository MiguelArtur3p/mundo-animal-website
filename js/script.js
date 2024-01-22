import ScrollSuave from "./modules/scroll-suave.js";
import AnimacaoScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
const toolTip = new Tooltip("[data-tooltip]");
const animacaoScroll = new AnimacaoScroll('[data-anime="scroll"]');
const dropdownMenu = new DropdownMenu("[data-dropdown]");
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
scrollSuave.init();
accordion.init();
tabNav.init();
modal.init();
toolTip.init();
animacaoScroll.init();
dropdownMenu.init();
menuMobile.init();

initFuncionamento();
fetchAnimais("../animaisAPI.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
