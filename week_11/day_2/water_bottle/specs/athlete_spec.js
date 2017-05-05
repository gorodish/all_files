var athlete = require('../athlete');
var bottle = require('../water_bottle');
var assert = require('assert');

describe("Athlete", function() {
  beforeEach(function() {
    athlete.hydration = 100;
    athlete.distance = 0;
    bottle.fill();
  });
  it('I am fresh as a daisy', function() {
    assert.equal(100, athlete.hydration);
  });
  it('Should have distance property starting at 0', function() {
    assert.equal(0, athlete.distance);
  });
  it('Should lose 10 hydration for every 1 run', function() {
    athlete.run(1);
    assert.equal(90, athlete.hydration);
    assert.equal(1, athlete.distance);
  });
  it('Should not move when running dehydrated', function() {
    athlete.run(10);
    assert.equal(10, athlete.distance);
  });
  it('Hydration should increase when drinking', function() {
    athlete.hydration = 0;
    athlete.drink(bottle);
    assert.equal(10, athlete.hydration);
  });
})