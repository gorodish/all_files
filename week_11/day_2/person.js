var myPerson = {
  name: "James",
  age: 79,
  weapon: "walking stick",
  eat: function() {
    console.log("Om nom nom");
  },

talk: function() {
  console.log("Hi my name is " + this.name);
}
}

myPerson.talk();

var myDog = Object.create(null);

myDog.smell = "terrible";
myDog.talk = function() {
  console.log("I am a dog and I smell " + this.smell);
}

console.log("myDog", myDog);
myDog.talk();

var guineapig = Object.create(null);
var killerGuineapig = Object.create(guineapig);

