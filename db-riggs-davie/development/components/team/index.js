function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { L as List } from '../../assets/scripts/index-d1acc8c7.js';

/* eslint-disable no-unused-vars */

var addFilteringEventsToButtons = function addFilteringEventsToButtons(list, componentElement, initLoadMoreButton) {
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
          var arrayElements = _toConsumableArray(elm.querySelectorAll('.our-team__item-category-name'));
          var arrayNames = arrayElements.map(function (element) {
            return element.textContent;
          });
          return arrayNames.includes(buttonNameAttribute);
        });
      } else {
        list.filter();
      }
      initLoadMoreButton(componentElement);
    });
  });
};
var initList = function initList(componentElement, initLoadMoreButton) {
  var list = new List('team-list', {
    valueNames: ['our-team__item-wrapper']
  });
  addFilteringEventsToButtons(list, componentElement, initLoadMoreButton);
};

/* eslint-disable no-param-reassign */
var initLoadMoreButton = function initLoadMoreButton(componentElement) {
  var articleList = componentElement.querySelector('[data-role="grid-list"]');
  var cards = _toConsumableArray(articleList.querySelectorAll('[data-role="grid-item"]'));
  var itemsToShow = 0;
  if (window.innerWidth >= 992) {
    itemsToShow = 9;
  } else if (window.innerWidth >= 480) {
    itemsToShow = 4;
  } else {
    itemsToShow = 3;
  }
  var itemsPerLoad = 0;
  if (window.innerWidth >= 992) {
    itemsPerLoad = 9;
  } else if (window.innerWidth >= 480) {
    itemsPerLoad = 4;
  } else {
    itemsPerLoad = 3;
  }
  var loadMoreButton = componentElement.querySelector('[data-role="load-more"]');
  var hiddenItems = cards.slice(itemsToShow);
  hiddenItems.forEach(function (hiddenItem) {
    hiddenItem.style.display = 'none';
    hiddenItem.style.opacity = '0';
    // eslint-disable-next-line unicorn/prefer-dom-node-dataset
    hiddenItem.getAttribute('data-a-type');
  });
  loadMoreButton.style.display = hiddenItems.length ? 'flex' : 'none';
  loadMoreButton.addEventListener('click', function () {
    var nextItems = hiddenItems.slice(0, itemsPerLoad);
    if (nextItems.length) {
      nextItems.forEach(function (nextItem) {
        var opacity = 0;
        nextItem.style.display = 'flex';
        var fadeEffect = setInterval(function () {
          if (opacity <= 1) {
            opacity += 0.1;
            nextItem.style.opacity = opacity;
          } else {
            clearInterval(fadeEffect);
          }
        }, 30);
      });
    }
    hiddenItems = hiddenItems.slice(itemsPerLoad);
    if (!hiddenItems.length) {
      loadMoreButton.style.display = 'none';
    }
  });
};
var componentElement = document.querySelector('[data-component-id="team"]');
initLoadMoreButton(componentElement);
initList(componentElement, initLoadMoreButton);
var previousWidth = window.innerWidth;
window.addEventListener('resize', function () {
  var screenWidth = window.innerWidth;
  if (previousWidth >= 1440 && screenWidth < 1440 || previousWidth >= 992 && previousWidth < 1440 && (screenWidth < 992 || screenWidth >= 1440) || previousWidth >= 768 && previousWidth < 992 && (screenWidth < 768 || screenWidth >= 992)) {
    initLoadMoreButton(componentElement);
  }
  previousWidth = screenWidth;
});
var fillMenu = function fillMenu() {
  var tabsMenuElement = componentElement.querySelector('[data-role="tabs-menu"]');
  var allWorksButtonsWrapperElement = componentElement.querySelector('[data-role="tab-button-wrapper"]');
  tabsMenuElement.prepend(allWorksButtonsWrapperElement);
};
fillMenu();
