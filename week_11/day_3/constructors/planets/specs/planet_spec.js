var Planet = require('../planet');
var assert = require('assert');

describe("Planet", function() {

  var planet1;

  beforeEach(function() {
    planet1 = new Planet('Venus');
    planets = new SolarSystem();

  });
  it('Can get name', function() {
    assert.equal('Venus', planet1.name);
  });
  it('Empty planet array', function() {
    assert.equal(0, planets.name);
  });
});