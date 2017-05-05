// Section 1

// What types are these?

/* 1.1 */ 1; number
/* 1.2 */ "cat"; string
/* 1.3 */ true; boolean
/* 1.4 */ []; object
/* 1.5 */ {}; object
/* 1.6 */ 1.1; number
/* 1.7 */ var myVariable; undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; true
/* 2.2 */ "cat"; true
/* 2.3 */ true; true
/* 2.4 */ NaN; false
/* 2.5 */ []; true but maybe false - inconsistent
/* 2.6 */ {}; true but maybe false
/* 2.7 */ undefined; false
/* 2.8 */ ""; false
/* 2.9 */ 0; false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var num = 6;

// 3.2 Assign a variable that is a string
var str = "hello";

// 3.3 Assign a variable that is a boolean
var bool = true;

// 3.4 Assign a variable that is an object
var obj = {}


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

if( 1 < 2 ? "hello" : "bye");

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable

var first = animals[0];

// 5.2. Assign the last element to a variable

var last = animals[animals.length -1];

// 5.3. Assign the length of an array to a variable

var len = animals.length;

// 5.4. Add an item to the end of the array

animals.push("rabbit");

// 5.5. Add an item to the start of the array

animals.unshift("kangaroo");

// 5.6. Assign the index of hedgehog to a variable

 animals.indexOf("hedgehog");


// Section 6

// 6.1 Create an array of 5 vegetables

var veg = ["cabbage", "carrot", "turnip", "potato", "asparagus"];

// 6.2 Loop over the array and write to the console using a "while"

var l = 0;

while(l < veg.length){
  console.log("veg " + veg[l]);
  l ++;
}

// 6.3 Loop again using a "for" with a counter
var i = 0;

for(var i = 0; i < veg.length; i++){
  console.log(veg[i]);
}

// 6.4 Loop again using a "for of"

for(var veg of veg){
  console.log(veg);
}

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
total = 0;
for(acc of accounts) {
  total += acc.amount;
}
console.log(total);

var totalCash = function(accounts) {
  for(acc of accounts) {
    total += acc.amount;
}

use for of with arrays (uses the value)
use for in with objects (uses the key)

// console.log(accounts[0].amount);

// 7.2 Find the amount of money in the account with the largest balance

var findLargest = function(accounts) {
  var highest = 0;
  for(var account of accounts) {
    if(account.amount > highest) {
      highest = account.amount;
    }
  }

  return highest;
}

// 7.3 Find the name of the account with the smallest balance

var smallestBalance = function(accounts) {
  var pauper = accounts[0];
  for(account of accounts){
    if(account.amount < pauper.amount) {
      pauper = account
    }
  }
  return pauper.name;
}
// 7.4 Calculate the average bank account value

total = 0;
for(var acc of accounts) {
  total += acc.amount;
}
var ave = total / accounts.length;
console.log(ave.toFixed(2));

// 7.5 Find the value of marcs bank account

var findUserBalance = function(name, accounts) {
  for(var account of accounts) {
    if(account.name === name) {
      return account.amount;
    }
  }
}
console.log(findUserBalance("marc", accounts));

// 7.6 Find the holder of the largest bank account

var findHolderOfLargest = function(accounts) {
  var poshest = accounts[0];
  for(var account of accounts) {
    if(account.amount > poshest.amount) {
      poshest = account;
    }
  }
  return poshest;
}

console.log(findHolderOfLargest(accounts));

// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "John",
  height: "lanky",
  favouriteFood: "jam",
  eat: function() {
    console.log("Nom nom");//- don't call the function here
  }
};