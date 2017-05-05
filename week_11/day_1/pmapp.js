// var myName = "Matthew";

// if(myName === "Matthew"){
//   console.log("yo my name is ", myName);
// }

// var counter = 1;

// if(counter > 0) {
//   console.log("The counter is greater than 0");
// } else {
//   console.log("The counter is less than or equal to 0");
// }

// var counter = -1;

// if(counter > 0) {
//   console.log("The counter is greater than 0");
// } else if(counter < 0) {
//   console.log("The counter is less than or equal to 0");
// } else {
//   console.log("The counter is zero");
// }


// var pet = "cat";

// switch(pet) {
//   case "cat":
//   console.log("soft kitty, warm kitty");
//   break;
//   case "dog":
//   console.log("Who let the dogs out?");
//   break;
//   default:
//   console.log("No pet, sad");
// }

// console.log(1 + 1 === 2 ? "yay maths" : "noes, maths is broken");

  var pets = ["dog", "cat", "pika"];

  for(var i = 0; i < pets.length; i++){
    console.log(pets[i]);
  }

  for(var pet of pets){
    console.log(pet);
  }

  var obj = {student1: 3, student2: 12, student4: 30};

for(var key in obj){
  console.log("obj." + key + " = " + obj[key]);
}

var x = 0;

while(x < 10){
  console.log("loop" + x);
  x ++;
}

