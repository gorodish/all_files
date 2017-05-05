// function print() {
//   console.log("inside the callback function");
// };
// //making var = function is an anonymous function so needs to be in the right order

// setTimeout(print, 2000);

// var logRed = function() {
//   console.log("It's red");
// }

// var logNotRed = function() {
//   console.log("It's NOT red");
// }

// var redChecker = function(colour, logRed, logNotRed) {
//   if(colour === "red") {
//     logRed();
//   } else {
//     logNotRed();
//   }
// }

// redChecker("red", logRed, logNotRed);

function publish(item, author, callback){
  console.log(item + " " + author);
  var date = new Date();
  callback(author, date);
}

function messages(author, date) {
  var sendTime = date.toLocaleTimeString();
  console.log("Sent from " + author + " at " + sendTime);
}

function articleDetails(author, date) {
  var pubDate = date.toDateString();
  console.log("Written by " + author);
  console.log("Published on" + pubDate);

}

publish("My article", "Ruth", articleDetails);