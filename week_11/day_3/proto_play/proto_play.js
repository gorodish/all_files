// var wisePerson = {
//   wisdom: function() {
//     console.log("Commit often");
//   }
// }

// var myPerson = Object.create(wisePerson);
// myPerson.walk = function() {
//   console.log("left right left right");
// };

// myPerson.walk();
// myPerson.wisdom();

var Fish = function(name, colour) {
  this.name = name;
  this.colour = colour;
};

Fish.prototype = {
  swim: function() {
    console.log("splash");
  },
  eat: function(plankton) {
    this.belly.push(plankton);
  },
  belly:[]
};

var myFish = new Fish('nemo', 'orange');
myFish.eat('im a plankton');
console.log(myFish.belly);
// console.log(myFish.__proto__);
// myFish.swim();
// myFish.eat();

var myFish2 = new Fish("swimmy", "im a dolphin");
console.log(myFish2.swim());
