const buttonElement = document.getElementById("button1");
const renderDivElement = document.getElementById("renderdiv");
const inputBoxElement = document.getElementById("inputbox");
const coppyButtonElement = document.getElementById("buttoncoppy");
// functions
const addingHtmlInDiv = function () {
  const regexp = /(\d+)/g;
  renderDivElement.innerHTML = `[${inputBoxElement.value.match(regexp)}]`;
};

const copyDivToClipboard = function () {
  var range = document.createRange();
  range.selectNode(renderDivElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

// event listeners
buttonElement.addEventListener("click", addingHtmlInDiv);
coppyButtonElement.addEventListener("click", copyDivToClipboard);
