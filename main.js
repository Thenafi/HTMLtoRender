const buttonElement = document.getElementById("button1");
const renderDivElement = document.getElementById("renderdiv");
const inputBoxElement = document.getElementById("inputbox");
const coppyButtonElement = document.getElementById("buttoncoppy");
const addingHtmlInDiv = function () {
  console.log("adding");
  renderDivElement.innerHTML = `${inputBoxElement.value}`;
};

function copyDivToClipboard() {
  var range = document.createRange();
  range.selectNode(renderDivElement);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}
buttonElement.addEventListener("click", addingHtmlInDiv);

coppyButtonElement.addEventListener("click", copyDivToClipboard);
