DROP TABLE bites CASCADE;
DROP TABLE victims CASCADE;
DROP TABLE zombies CASCADE;


CREATE TABLE zombies (
  id SERIAL8 primary key,
  name VARCHAR(255),
  type VARCHAR(255)
);

CREATE TABLE victims (
  id SERIAL8 primary key,
  name VARCHAR(255) not null,
  run_speed INT2 not null
);

CREATE TABLE bites (
  id SERIAL8 primary key,
  victim_id INT8 REFERENCES victims(id),
  zombie_id INT8 REFERENCES zombies(id),
  infected_on DATE not null
);

INSERT INTO zombies (name, type) VALUES ('Dave', 'Bearded');

INSERT INTO zombies (name, type) VALUES ('Graham', 'Walker');

INSERT INTO zombies (name, type) VALUES ('Samuel', 'Crawler');

INSERT INTO zombies (name, type) VALUES ('Elvis', 'Runner');

INSERT INTO victims (name, run_speed) VALUES ('Olaf', 45);

INSERT INTO victims (name, run_speed) VALUES ('Podar', 70);

INSERT INTO victims (name, run_speed) VALUES ('Linus', 2);

INSERT INTO victims (name, run_speed) VALUES ('Alphonse', 22);

INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (1, 1, 'Jan 12 2017');

INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (2, 2, 'Jan 20 2017');


INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (3, 3, 'Jan 23 2017');

INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (1, 2, 'Jan 12 2017');

SELECT * FROM zombies where name = 'Dave';

SELECT victim_id FROM bites WHERE zombie_id = 1;

SELECT name FROM victims WHERE id IN(1, 2);
