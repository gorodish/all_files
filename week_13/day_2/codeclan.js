use codeclan

db.createCollection("Students", {capped: true, size: 16});

db.Students.insert([{
  name: "John",
  favouriteFood: "Quiche"
},
{name: "Daniel",
favouriteFood: "Quesadillas"
},
{name: "Chris",
favouriteFood: "Jam"
}
]);

db.Students.find().pretty();

db.createCollection("Instructors");

db.Instructors.insert([
{name:"John",
favouriteFood: "Jam"},
{name: "Ally",
favouriteFood: "Potatoes"},
{name: "Alan",
favouriteFood: "Meat"
}])

db.Instructors.find().pretty();
show collections;
db.Instructors.explain();
db.Instructors.count();
db.Instructors.latencyStats({ histograms: false });


db.dropDatabase();