var athlete = {
  hydration: 100,
  distance: 0,
  run: function(distance) {
    for(var i = 0; i < distance; i++)
      if(this.hydration !== 0) {
        this.hydration -= (distance * 10);
        this.distance += distance;
      }
    },
    drink: function(bottle) {
      this.hydration += bottle.drink();
    }
  }

module.exports = athlete;