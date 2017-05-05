var bottle = require('../water_bottle');
var assert = require('assert');

describe('Water Bottle', function() {
  beforeEach(function() {
    bottle.volume = 0;
  })
  it('should be empty at start', function(){
    assert.equal(0, bottle.volume);
  });
  it('should go to 100 when filled', function() {
    assert.equal(100, bottle.fill());
  });
  it('should go down by 10', function() {
    bottle.fill();
    bottle.drink();
    assert.equal(90, bottle.volume);
  });
  it('should go to 0 when emptied', function() {
    bottle.fill();
    bottle.empty();
    assert.equal(0, bottle.volume);
  });
  it('should not go below 0', function() {
    bottle.empty();
    bottle.drink();
    assert.equal(0, bottle.volume);
  });
});