// var accounts = [{name: "Dave", accno: 1234}, {name: "Andy", accno: 1235}, {name: "Booboo", accno: 1236}, {name: "Yogi", accno: 1237}]

// var iteration = function(accounts, callback) {
//   this.accounts.for(var item of accounts) {
//     callback(item);
//   }
// };

// console.log(accounts);

var Bank = function(name, value, type) {
  this.name = name;
  this.value = value;
  this.type = type;
  this.accounts = [];
};

Bank.prototype = {
  // findByName: function() {}
  // this.accounts.forEach(function(account) {
  //   this.total += account;
};

module.exports = Bank;
