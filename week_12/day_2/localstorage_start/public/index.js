var faveFoods = [];


var setSpanText = function(text){
  var span = document.querySelector('#fav-food')
  span.innerText = text;
}

var handleButtonClick = function(){
  var input = document.querySelector('input');
  setSpanText(input.value);
  localStorage.setItem("selection", input.value);
  faveFoods.push(input.value);
  var data = JSON.stringify(faveFoods);
  localStorage.setItem("faveFoods", data);
  input.value = "";
  input.style.backgroundColor = "orange";
};

var setFaveFoods = function(faveFoods){
  var foodsSpan = document.querySelector("#allMyFavouriteFoods span");
  foodsSpan.innerText = faveFoods.join(", ");
}

var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var saved = localStorage.getItem("selection");
  setSpanText(saved);

  var savedFoods = localStorage.getItem("faveFoods") || [];
  faveFoods = JSON.parse(savedFoods);

setFaveFoods(faveFoods);
  // faveFoods.forEach(function(item){
  //   console.log(item);
  // })
}

window.onload = app;
