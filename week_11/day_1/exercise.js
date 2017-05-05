var name = function howdy(firstname, surname) {
  return "Howdy, I am " + firstname + " " + surname;
}

console.log(name("Steve", "Test"));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));

var arrayFirst = function (createArray) {
  return createArray[0];
}

console.log(arrayFirst(['cat', 'dog', 'jam']));

function nameList(arr) {
for(var name of arr) {
  console.log(name);
}
}

nameList(["Colin", "Ellen", "Ruth"])
