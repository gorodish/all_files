var app = function(){
  // var button = document.querySelector('button');
  // button.onclick = handleButtonClick;

  // var input = document.querySelector('input');
  // input.onkeyup = handleKeyPress;

  var select = document.querySelector('select');
  select.onchange = handleSelectChanged;
}

var handleSelectChanged = function() {
  var pTag = document.querySelector('#select-result');
  pTag.innerText = this.value + ", excellent!!!!!";
  console.log(this);
}


// var buttonCounter = 0;

// var handleButtonClick = function() { //can pass event as a parameter if req'd
//   var pTag = document.querySelector('#button-result');
//   buttonCounter += 1;
//   pTag.innerText = "Woah Dude totally been clicked " + buttonCounter + " times, man."
// }

// var handleKeyPress = function() {
//   var pTag = document.querySelector('#text-result');
//   pTag.innerText = this.value;
// }

window.onload = app;
