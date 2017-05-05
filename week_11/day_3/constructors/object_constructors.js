//Literal natation

var myObject = {};

myObject.shape = 'circle';
myObject.radius = 10;

console.log(myObject);

var myOtherObject = new Object();
myOtherObject.size = 6;
myOtherObject.colour = 'red';

console.log(myOtherObject);


var house1 = {
  sqfeet: 8000,
  bathrooms: 4,
  bedrooms: 6
};

var house2 = {
  sqfeet: 5000,
  bathrooms: 1,
  bedrooms: 2
};

var house3 = {
  sqfeet: 2000,
  bathrooms: 2,
  bedrooms: 25
};

var House = function(sqfeet, bathrooms, bedrooms) {
  this.sqfeet = sqfeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
  this.clean = function() {
    console.log('Your house was a disgrace but I\'ve cleaned it');
  }
};

var house1 = new House(100, 3, 4);
var house2 = new House(2000, 1, 2);
var house3 = new House(4000, 2, 2);

console.log(house1.sqfeet);
console.log(house2.bedrooms);
house1.clean();

var Office = function(desks, meetingRooms) {
  this.desks = desks;
  this.meetingRooms = meetingRooms;
  this.averageDeskPerMeetingRoom = function() {
    return this.desks / this.meetingRooms;
  }
};

var office1 = new Office(100, 10);
var office2 = new Office(60, 5);
var office3 = new Office(130, 111);

console.log(office1);
console.log(office1.averageDeskPerMeetingRoom());
