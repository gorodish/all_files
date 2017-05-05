// function hello() {
//   return "Hello everyone";
// }

// console.log(hello());


// function mood(name, mood, weather) {
//   return name + ": you are " + mood + " and it is " + weather;
// }

// console.log(mood("John", "happy", "rainy")); //missing out 2nd argument gives undefined wihout error


// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2, 3)); //still gives the right result ; 3


// function add() {
//   var i;
//   var total = 0;
//   for(i = 0; i < arguments.length; i++){
//     total = arguments[i];
//   }

// return total;
// }

// console.log(add(1, 2, 3, 4, 5, 6));

// var hello = function() {
//   console.log("hello world");
// }

// hello();

var mood = function(name, mood, weather) {
  return name + ": you are " + mood + " and it is " + weather;
}

console.log(mood("John", "happy", "snowy"));

var add = function(a, b){
  return a + b;
}

var log = function(functionToInvoke){
  console.log(functionToInvoke(2, 1));
}

log(add);