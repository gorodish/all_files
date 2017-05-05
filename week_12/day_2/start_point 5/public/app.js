var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;

  populate(list, state);
}

var populate = function(list, state){

}
  //for each item in the state, invoke addItem

var addItem = function(list, item){

  //add an item to the list
  var newItem = document.createElement('li');
  newItem.innerText = item;
  list.appendChild(newItem);
}

var handleClick = function(){
  //get the value of the input box
  var input = document.querySelector('#new-item');
  console.log(input.value);

  //get the "todo-list" element from the DOM
var list = document.querySelector('#todo-list');
  //invoke addItem

addItem(list, input.value);
  //invoke save

input.value = "";
}

var save = function(item){
  //save the item to localStorage 
  var data = JSON.stringify();

  localStorage.setItem("item", data);

  //NOTE You'll have to use JSON.stringify
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
