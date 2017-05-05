var Album = function(albumName, artist){
  this.albumName = albumName;
  this.albumPopularity = popularity;
};

Album.prototype = {
  getHtml: function(){
    var wrapper = this.getDivWrapper();
    var albumName = this.getAlbumPara();
    var albumPopularity = this.getPopularityPara();

    wrapper.appendChild(album);
    wrapper.appendChild(albumPopularity);
    
    return wrapper;
  },
  getDivWrapper: function(){
    return document.createElement('div');
  },
  getArtistPara: function(){
    var p = document.createElement('p');
    p.innerText = this.artist;
    return p;
  },
  getAlbumNamePara: function(){
    var p = document.createElement('p');
    p.innerText = this.albumName;
    return p;
  },
  getCoverImg: function(){
    var img = document.createElement('img');
    img.src = this.coverImg;
    return img;
  }
};