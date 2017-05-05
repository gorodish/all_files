DROP TABLE IF EXISTS bounties;

CREATE TABLE bounties(
  id SERIAL8 primary key,
  name varchar(255) not null,
  species varchar(255) not null,
  location varchar(255) not null,
  bounty INT2 not null
);