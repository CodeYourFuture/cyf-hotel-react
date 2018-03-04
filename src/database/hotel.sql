create table invoices (
    id                  integer primary key,
    reservation_id      integer not null,
    total               number,
    surcharges          number,
    invoice_date_time   datetime not null,
    paid                boolean default false
);

insert into invoices (reservation_id, total, invoice_date_time, paid) values (24, 3444.50, '01/01/2017', 1);
insert into invoices (reservation_id, total, invoice_date_time, paid) values (25, 344.50, '01/02/2017', 1);
insert into invoices (reservation_id, total, invoice_date_time)       values (35, 3445.50, '02/01/2017');
insert into invoices (reservation_id, total, invoice_date_time, paid) values (24, 3444.50, '01/01/2017', 1);
insert into invoices (reservation_id, total, invoice_date_time, paid) values (28, 153.50, '01/08/2017', 1);
insert into invoices (reservation_id, total, invoice_date_time, paid) values (24, 354.50, '01/01/2015', 1);
insert into invoices (reservation_id, total, invoice_date_time)       values (444, 250.50, '02/01/2017');
insert into invoices (reservation_id, total, invoice_date_time)       values (250, 431.50, '03/01/2017');
insert into invoices (reservation_id, total, invoice_date_time, paid) values (574, 300.50, '04/01/2017', 1);
insert into invoices (reservation_id, total, invoice_date_time, paid) values (546, 284.35, '04/01/2017', 1);

create table reservations (
    id             integer primary key,
    customer_id    integer not null,
    room_id        integer not null,
    check_in_date  datetime not null,
    check_out_date datetime,
    price          integer,
    foreign key(id) references invoices(reservation_id)
);

insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (1, 34, '01/01/2017','08/01/2017' ,105);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (2, 65, '02/02/2014', '11/11/2015',375);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (3, 374, '01/05/2017','08/04/2018' ,205);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (4, 625, '02/02/2016','11/11/2018',275);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (5, 348, '01/01/2017','08/11/2017' ,500);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (6, 658, '10/12/2010', '11/11/2015',200);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (7, 654, '01/12/2010', '11/11/2015',300);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (8, 656, '22/12/2010', '11/11/2015',305);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (9, 659, '13/12/2010', '11/11/2015',175);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price) values (10,158, '11/11/2011', '11/11/2015',275);


create table customers (
    id              integer primary key,
    title           varchar,
    firstname       varchar,
    surname         varchar,
    email           varchar,
    foreign key(id) references reviews(customer_id),
    foreign key(id) references reservations(customer_id)
);

insert into customers (title, firstname, surname, email) values ('Mr', 'Donald', 'Trump', 'DonaldTrump@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Mohsen', 'Moradi', 'mohsen000069@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mrs', 'Nona', 'Karimi', 'Nonakarimi@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mrs', 'Mona', 'Azimi', 'Monaazimi@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Miran', 'Ahmadi', 'Miranahmadi@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Mohsen', 'Moradi', 'Mohsenmoradi@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Kash', 'Akarimi', 'Kashkarimi@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mrs', 'Lola', 'siran', 'lolasiran@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Ashkan', 'karim', 'Ashkankarim@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Serva', 'rashid', 'sevarshid@gmail.com');

create table rooms (
    id                  integer primary key,
    room_tipe_id        integer not null,
    sea_view            integer,
    foreign key(id) references reservations(room_id)
);

insert into rooms (room_tipe_id, sea_view) values (21,'MSC Yacht Club Royal Suite');
insert into rooms (room_tipe_id, sea_view) values (22,'MSC Yacht Club Deluxe Suite');
insert into rooms (room_tipe_id, sea_view) values (23,'MSC Yacht Club Interior Suite');
insert into rooms (room_tipe_id, sea_view) values (24,'Cabins for families');
insert into rooms (room_tipe_id, sea_view) values (25,'Two-Bedroom Grand Suite');
insert into rooms (room_tipe_id, sea_view) values (26,'Grand Suite');
insert into rooms (room_tipe_id, sea_view) values (27,'Suite with whirlpool bath');
insert into rooms (room_tipe_id, sea_view) values (28,'Suite');
insert into rooms (room_tipe_id, sea_view) values (29,'Balcony');
insert into rooms (room_tipe_id, sea_view) values (30,'Ocean View');
insert into rooms (room_tipe_id, sea_view) values (31,'Inside');

create table reviews (
    id                  integer primary key,
    customer_id         integer,
    room_tipe_id        integer,
    comment             integer,
    review_date         datetime not null
);

insert into reviews (comment, review_date) values ('ok','08/04/2018');
insert into reviews (comment, review_date) values ('ok','08/04/2018');
insert into reviews (comment, review_date) values ('ok','08/04/2018');
insert into reviews (comment, review_date) values ('ok','08/04/2018');


create table room_tipes (
    id                  integer primary key,
    type_name           varchar,
    original_price      integer,
    current_price       integer,
    foreign key(id) references rooms(room_type_id),
    foreign key(id) references reviews(room_type_id)
);

insert into room_tipes(type_name, original_price, current_price) values ('Superior Room', 60, 55);
insert into room_tipes(type_name, original_price, current_price) values ('Executive Room', 59, 65);
insert into room_tipes(type_name, original_price, current_price) values ('Pacific Room', 85, 80);
insert into room_tipes(type_name, original_price, current_price) values ('Pacific Suite', 100, 90);
insert into room_tipes(type_name, original_price, current_price) values ('Deluxe Suite', 67, 60);
insert into room_tipes(type_name, original_price, current_price) values ('Executive Suite', 90, 80);
insert into room_tipes(type_name, original_price, current_price) values ('Presidential Suite', 152, 140);
insert into room_tipes(type_name, original_price, current_price) values ('Pacific Room && Executive Suite', 290, 250);
insert into room_tipes(type_name, original_price, current_price) values ('Executive Room && Executive Suite', 280, 220);
insert into room_tipes(type_name, original_price, current_price) values ('Superior Room && Executive Suite', 90, 80);


