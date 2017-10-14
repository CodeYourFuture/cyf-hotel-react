DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    id        INTEGER       PRIMARY KEY AUTOINCREMENT,
    title     VARCHAR(10),
    firstname VARCHAR (50),
    surname   VARCHAR (50),
    email     VARCHAR (255) 
);

DROP TABLE IF EXISTS invoices;

CREATE TABLE invoices (
    id        INTEGER       PRIMARY KEY AUTOINCREMENT,
    reservation_id    INTEGER,
    total             INTEGER,
    surcharges        INTEGER,
    invoice_date_time DATETIME,
    paid              BOOLEAN  DEFAULT false
);

DROP TABLE IF EXISTS room_types;

CREATE TABLE room_types (
    id        INTEGER       PRIMARY KEY AUTOINCREMENT,
    type_name      VARCHAR (50),
    original_price INTEGER,
    current_price  INT
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
    id        INTEGER       PRIMARY KEY AUTOINCREMENT,
    room_type_id INTEGER,
    sea_view     BOOLEAN
);

INSERT INTO customers (title, firstname, surname, email) VALUES ('Mr.', 'Tom', 'Jones', 'tom@jones.com');