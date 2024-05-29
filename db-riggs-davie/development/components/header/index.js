function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { C as CLASSES } from '../../assets/scripts/classes-299f4de0.js';
import { i as insertStyles } from '../../assets/scripts/insert-styles-46b31c24.js';
var BREAKPOINTS = {
  MOBILE_SM: 340,
  MOBILE_MD: 480,
  TABLET_SM: 768,
  TABLET_MD: 992,
  DESKTOP_SM: 1280,
  DESKTOP_MD: 1440,
  DESKTOP_LG: 1920
};
var styles = "/**\n* Highly recommend using css variables instead of sass variables where it is possible.\n* The reasons why:\n* 1. You can not edit a value of sass variable, but you can edit css variable value on media queries.\n*    Example: change color value if theme is dark or --padding-base on small screens.\n* 2. You can read and write css variables using javascript.\n*    Example: use --js-scrollbar-width to set body padding when scroll is locked.\n* 3. You don't have to import css variables to other files to use it.\n* */\n[data-component-id=header].js--active .header__navigation {\n  grid-template-rows: 1fr;\n  opacity: 1;\n}\n[data-component-id=header] .header__navigation {\n  max-height: unset;\n  grid-template-rows: 0fr;\n  opacity: 0;\n  transition-property: grid-template-rows, opacity;\n  transition-duration: 300ms;\n  transition-timing-function: ease;\n}\n@media screen and (min-width: 992px) {\n  [data-component-id=header] .header__navigation {\n    max-height: 90vh;\n  }\n}\n[data-component-id=header] [data-role=list-wrapper] {\n  scrollbar-width: none;\n}\n[data-component-id=header] [data-role=list-wrapper]::-webkit-scrollbar {\n  width: 0;\n}\n[data-component-id=header].js--scrolled {\n  background-color: var(--color-background);\n}\n[data-component-id=header] [data-role=link].js--disabled {\n  opacity: 0;\n}";

/* eslint-disable no-param-reassign */

insertStyles(styles);
var _document = document,
  body = _document.body;
var componentElement = body.querySelector('[data-component-id="header"]');
var buttonElement = componentElement.querySelector('[data-role="button"]');
var burgerLines = _toConsumableArray(buttonElement.querySelectorAll('[data-role="line"]'));
var navigationElement = componentElement.querySelector('[data-role="navigation"]');
var navigationElementSubstrate = componentElement.querySelector('[data-role="navigation-substrate"]');
var closeMenu = function closeMenu() {
  componentElement.classList.remove(CLASSES.ACTIVE);
  navigationElement.setAttribute('inert', '');
  buttonElement.setAttribute('aria-expanded', 'false');
  if (window.innerWidth < BREAKPOINTS.TABLET_MD) body.classList.remove(CLASSES.LOCKED);
  window.focusLock.unlock();
  window.lenis.start();
  burgerLines.forEach(function (line) {
    line.style.backgroundColor = 'var(--changeable-header-color)';
  });
  navigationElementSubstrate.style.pointerEvents = 'none';
  navigationElementSubstrate.style.opacity = '0';
};
buttonElement.addEventListener('click', function () {
  if (componentElement.classList.contains(CLASSES.ACTIVE)) {
    closeMenu();
  } else {
    componentElement.classList.add(CLASSES.ACTIVE);
    navigationElement.removeAttribute('inert');
    buttonElement.setAttribute('aria-expanded', 'true');
    if (window.innerWidth < BREAKPOINTS.TABLET_MD) body.classList.add(CLASSES.LOCKED);
    window.focusLock.lock('[data-role="navigation-wrapper"]');
    window.lenis.stop();
    navigationElementSubstrate.style.pointerEvents = 'auto';
    navigationElementSubstrate.style.opacity = '1';
  }
});
navigationElementSubstrate.addEventListener('click', function () {
  return buttonElement.click();
});
