var insertStyles = function insertStyles(styles) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.head;
  parent.insertAdjacentHTML('beforeend', "<style>".concat(styles, "</style>"));
};
export { insertStyles as i };
