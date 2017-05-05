DROP TABLE lightsabers;

DROP TABLE jedi;

CREATE TABLE jedi (
  id SERIAL8 primary key,
  name VARCHAR(255),
  age INT2,
  darkside BOOLEAN
);

CREATE TABLE lightsabers (
  id SERIAL8 primary key,
  colour VARCHAR(255) not null,
  hilt_metal VARCHAR(255) not null,
  owner_id INT8 REFERENCES jedi(id)
);

INSERT INTO jedi (name, age, darkside) VALUES ('Luke', 21, false);

INSERT INTO jedi (name, age, darkside) VALUES ('Vader', 100, true);

INSERT INTO jedi (name, age) VALUES ('Obiwan', 33);

INSERT INTO jedi (name, age, darkside) VALUES ('Anakin', 22, false);


UPDATE jedi SET darkside = true;

UPDATE jedi SET darkside = false  WHERE name = 'Luke' OR name = 'Obiwan';

UPDATE jedi SET age = 23, darkside = true  WHERE name = 'Anakin';

DELETE FROM jedi WHERE name = 'Luke';

INSERT INTO jedi (name, age, darkside) VALUES ('Obiwan', 32, false);

UPDATE jedi SET age = 33 WHERE name = 'Obiwan' AND age = 32;

INSERT INTO lightsabers (colour, hilt_metal, owner_id) VALUES ('green', 'palladium', 2);

INSERT INTO lightsabers (colour, hilt_metal, owner_id) VALUES ('green', 'gold', 3);

INSERT INTO lightsabers (colour, hilt_metal, owner_id) VALUES ('green', 'gold', 6);


SELECT * FROM lightsabers;