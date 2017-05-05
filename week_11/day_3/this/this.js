// make = 'Honda';

// var car = {
//   make: 'Nissan',

// };

// var getMake = function() {
//   console.log(this.make);
// };

// car.getMake = getMake;

// car.getMake();

// getMake();

// console.log(car.make);
// content = "I'm in the globl scope";

// function simpleCall() {
//   console.log(this.content);
// }

// simpleCall();


// var message = {
//   content: "I'm a javascript ninja",
//   showContent: function() {
//     console.log(this.content);
//   }
// }

// message.showContent();

// function Message(content){
//   this.content = content;
//   this.showContent = function() {
//     console.log(this.content);
//   };
// }

// var message = new Message("This is driving me nuts");

// message.showContent();


var Animal = function(type, legs){
  this.type = type;
  this.legs = legs;
  this.loginfo = function(){
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
};

var myCat = new Animal('Cat', 4);
setTimeout(myCat.loginfo.bind(myCat), 3000);