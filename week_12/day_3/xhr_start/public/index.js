var makeRequest = function(url, callback){
  //create a new HMLHTTPrequest object
  var request = new XMLHttpRequest();

  //set type of request, and the url
  request.open("GET", url);

  //set the callback th`t we want to use when the request is comlete
  request.onload = callback;

//write an onerror function too

  //send the request
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200){
    return;
  }

  // grab the respomse text
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  // console.log(countries.length);
  // var country = countries[0];
  populateList(countries);
}

var populateList = function(countries){
  var ul = document.getElementById("country-list");

  countries.forEach(function(country){
    var li = document.createElement('li');
    var aLink = document.createElement('a');
    aLink.href = country.flag;
    aLink.innerText = country.name;
    li.appendChild(aLink);
    ul.appendChild(li);
  });
};


var app = function(){

  var url = "https://restcountries.eu/rest/v2";
  // makeRequest(url, requestComplete);
  var button = document.querySelector('button');
  button.onclick = function(){
    makeRequest(url, requestComplete);
  }
};

window.onload = app;