create table book(
    id SERIAL PRIMARY KEY,
    link VARCHAR(255),
    cover VARCHAR(255),
    title VARCHAR(255),
    subtitle VARCHAR(255),
    authors VARCHAR(255)[],
    description VARCHAR(255),
    price INTEGER
);

create table meProfile(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    gender VARCHAR(50),
    intro VARCHAR(500)
)