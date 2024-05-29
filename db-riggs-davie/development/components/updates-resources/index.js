function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { i as insertStyles } from '../../assets/scripts/insert-styles-46b31c24.js';
import { L as List } from '../../assets/scripts/index-d1acc8c7.js';

/* eslint-disable no-unused-vars */

var addFilteringEventsToButtons = function addFilteringEventsToButtons(list, componentElement) {
  var buttons = componentElement.querySelectorAll('[data-role="tabs-button"]');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      buttons.forEach(function (_ref) {
        var classList = _ref.classList;
        return classList.remove('js--active');
      });
      button.classList.add('js--active');
      var buttonNameAttribute = button.dataset.name;
      if (buttonNameAttribute) {
        list.filter(function (_ref2) {
          var elm = _ref2.elm;
          var arrayElements = _toConsumableArray(elm.querySelectorAll('.card__category'));
          var arrayNames = arrayElements.map(function (element) {
            return element.textContent;
          });
          return arrayNames.includes(buttonNameAttribute);
        });
      } else {
        list.filter();
      }
    });
  });
};
var initList = function initList(componentElement) {
  var page = window.innerWidth >= 1440 ? 6 : window.innerWidth > 768 ? 4 : 3;
  var list = new List('updates-resources', {
    valueNames: ['card'],
    page: page,
    pagination: true
  });
  addFilteringEventsToButtons(list, componentElement);
};
var style = "[data-component-id=updates-resources] .updates-resources__pagination .li .page {\n  padding-inline: 1.25rem;\n  padding-block: 1rem;\n}\n[data-component-id=updates-resources] .updates-resources__pagination .li.active {\n  border: 1px solid var(--color-accent-1);\n}\n[data-component-id=updates-resources] .updates-resources__pagination .li:hover {\n  background-color: var(--color-accent-1);\n}";
insertStyles(style);
var componentElement = document.querySelector('[data-component-id="updates-resources"]');
var fillMenu = function fillMenu() {
  var tabsMenuElement = componentElement.querySelector('[data-role="tabs-menu"]');
  var allWorksButtonsWrapperElement = componentElement.querySelector('[data-role="tab-button-wrapper"]');
  tabsMenuElement.prepend(allWorksButtonsWrapperElement);
};
var selectCorrectTab = function selectCorrectTab() {
  var urlParameters = new URLSearchParams(window.location.search);
  var urlParameterTag = urlParameters.get('category');
  if (urlParameterTag) {
    var decodedUrlParameterTag = decodeURIComponent(urlParameterTag);
    var buttonElement = componentElement.querySelector("[data-name=\"".concat(decodedUrlParameterTag, "\"]"));
    buttonElement.click();
    window.lenis.scrollTo(buttonElement.parentElement);
  }
};
if (componentElement) {
  fillMenu();
  initList(componentElement);
  selectCorrectTab();
}
