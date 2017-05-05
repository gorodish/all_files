var Animal = require('./animals');

var Animals = function() {

}

Animals.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },

  all: function(callback){
    this.makeRequest('http://localhost:3000/api/animals', function() {
      if(this.status != 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var animals = Animals.prototype(results);
      callback(animals);
    })
  },