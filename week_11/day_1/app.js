// var number = 5; // ES5

// let number = 6; //ES6
// const number = 5; //ES6

// function hello(name) {
//   console.log("Hello " + name);
// }

// hello("Alan");


// var myString = "Ally";
// hello(myString);

// var a = 1;
// var b = 2;
// var c = 2.5;
// var d = Math.floor(a / b);

// console.log(a + b);
// c - b;
// a * c;

// console.log(d);


// var myString = "a nice string we have created";
// var age = 1;
// console.log(typeof(age));
// age = "not a string";
// console.log(typeof(age));

// console.log(myString);
// console.log(myString.length);
// console.log(myString.toUpperCase());


// console.log(3 + "hello");
// console.log("route" + 6 + 6);
// console.log(6 + 6 + "route");

// console.log(1 > 2);
// console.log(2 == 2);
// console.log(2 == "2");
// console.log(2 === "2"); //includes type in comparison
// console.log(2 != 2); //false
// console.log(2 !== "2"); //like using ===

// console.log((1 + 1 === 2) && (1 + 1 === 4));
// console.log((1 + 1 === 2) || (1 + 1 === 4));

// if(true)console.log("true");
// if(false)console.log("true"); //prints nothing
// if(0)console.log("true"); //prints nothing
// if(2)console.log("true"); //prints true
// //if undefined, null, empty string or zero; will return nothing, otherwise true
// if(parseInt('2')) console.log("true"); //true

// var guitars = ["Fender", "Gibson", "Gretsch"];
// console.log("Guitars", guitars);

// var drums = new Array();
// drums.push("Pearl");
// drums.push("Yamaha");

// console.log("Drums", drums);

// console.log(drums[0]);

// drums[1] = "Gretsch";

// console.log("Drums", drums);

// var last = drums.pop();
// console.log(last);
// var first = drums.shift();
// console.log(first);

// drums.splice(2, 0, "Zildjan");
// console.log("Drums", drums);

// var copy = guitars.slice(0, 1);
// console.log("Copy", copy);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.splice(2, 2));
// console.log(numbers);

// console.log(guitars.concat(numbers));


// var myPerson = {
//   name: "Ally",
//   age: 32,
//   language: "Java's my language"
// };

// console.log(myPerson);
// var propertyLanguage = 'language';

// console.log("person's age", myPerson['age']);
// console.log("person's age", myPerson.age);
// console.log("person's age", myPerson[propertyLanguage]);

// myPerson.pet = "Parrot";
// myPerson.age = 38;

// console.log('myPerson', myPerson);

var myPerson = {
  name: "Ally",
  age: 32,
  language: "Java's my language",
  address: {street: 'Trongate', postcode: 'G2 7JD'}
};

console.log('myPerson', myPerson);