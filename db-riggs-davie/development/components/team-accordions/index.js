import { i as insertStyles } from '../../assets/scripts/insert-styles-46b31c24.js';
import { C as CLASSES } from '../../assets/scripts/classes-299f4de0.js';
var initAccordions = function initAccordions(_ref) {
  var triggers = _ref.triggers;
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      if (trigger.parentElement.classList.contains(CLASSES.OPEN)) {
        trigger.parentElement.classList.remove(CLASSES.OPEN);
      } else {
        triggers.forEach(function (_trigger) {
          return _trigger.parentElement.classList.remove(CLASSES.OPEN);
        });
        trigger.parentElement.classList.add(CLASSES.OPEN);
      }
    });
  });
};
var style = "[data-component-id=team-accordions] [data-role=accordion] {\n  grid-template-rows: max-content 0fr;\n}\n[data-component-id=team-accordions] [data-role=accordion] [data-role=body] {\n  overflow: hidden;\n}\n[data-component-id=team-accordions] [data-role=accordion].js--open {\n  grid-template-rows: max-content 1fr;\n}\n[data-component-id=team-accordions] [data-role=accordion].js--open [data-role=vertical-line] {\n  transform: rotate(0deg);\n}\n[data-component-id=team-accordions] [data-role=accordion]:last-child {\n  border-bottom: none;\n  padding-block-end: 0;\n}";
insertStyles(style);
var component = document.querySelector('[data-component-id="team-accordions"]');
var triggers = component.querySelectorAll('[data-role="action-trigger"]');
if (component) {
  initAccordions({
    triggers: triggers
  });
}
