var functionCaller = function(myCallback, x){
  return myCallback(x);
};

functionCaller(console.log, 5);

var increment = function(number) {
  return number + 1;
};

var square = function(number) {
  return number * number;
};

var doSomeMathsForMe = function(callback, value) {
  console.log(callback(value));
};

doSomeMathsForMe(increment, 3);

//OR:
//