var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var getUrl = function(query){
  var url = "https://api.spotify.com/v1/search?q=";
  url += 'christmas';
  url += "&type=album";
  return url;
};

var processResults = function(){
  var responseString = this.responseText;
  var albums = JSON.parse(responseString).albums.items;

  var albumObjects = albums.map(function(item){
    var albumName = item.name;
    var artist = item.artists.map(function(artist){ return artist.name }).join(" / ");
    var albumCover = item.images[0].url;

    return new Album(albumName, artist, albumCover);
  }); 

};


var app = function(columnChart){
  
}

window.onload = app;