var componentElement = document.querySelector('[data-component-id="navigation"]');
if (componentElement) {
  var tabsMenuElement = componentElement.querySelector('[data-role="tabs-menu"]');
  var allWorksButtonsWrapperElement = componentElement.querySelector('[data-role="tab-button-wrapper"]');
  tabsMenuElement.prepend(allWorksButtonsWrapperElement);
}
