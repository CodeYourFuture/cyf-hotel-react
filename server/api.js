const express = require('express');
const router = express.Router();
const filename = './database/database.sqlite';
const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database(filename);

router.get('/customers', function(req, res) {
    // TODO comment out response above and uncomment the below
    db.serialize(function() {
        const sql = 'SELECT * from customers';
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err)
            } else {
                res.status(200).json({
                    customers: rows
                });
            }
        });
    });

});
router.post('/customers', function(req, res) {
    // TODO read req.body.customer and insert into DB
    const {
        title,
        firstname,
        surname,
        email
    } = req.body.customer;

    const sqlSelect = `SELECT email FROM customers
                WHERE email = ?`;
    db.all(sqlSelect, [`${email}`], (err, response) => {
        if (err) {
            console.error(err)
        } else if (response.length > 0) {
            res.status(200).json({ message: `A customer with the email address ${response[0].email} is already registerd with us. if that is You please, log in` });
        } else {
            const sqlInsert = `INSERT INTO customers (title,firstname,surname,email) 
        VALUES (?,?,?,?)`;
            db.run(sqlInsert, [`${title}`, `${firstname}`, `${surname}`, `${email}`], function(err) {
                if (err) {
                    res.status(200).json({
                        message: "error: " + err
                    });
                } else {
                    res.status(200).json({ message: "You have registered with us successfully!!!" });
                }
            });
        }
    });



});
router.get('/room-types', function(req, res) {
    // TODO return DB row here
    //to avoid missing trailing zeros while converting the price form int to its original floating 
    //point representation
    function checkForTrailingZeros(price) {
        if ((price) % 100 !== 0) {
            return (price / 100).toFixed(2);

        } else {
            return (price / 100);
        }
    }
    db.serialize(function() {
        const sql = 'select * from room_types ORDER BY original_price ASC';
        db.all(sql, [], (err, rows) => {
            let temp = [];
            rows.forEach((element) => {
                let price;
                if (element.original_price === element.current_price) {
                    price = '£' + checkForTrailingZeros(element.original_price);
                } else {
                    price = `<span style = 'text-decoration:line-through'>
                            £${checkForTrailingZeros(element.original_price)}</span>
                            £${checkForTrailingZeros(element.current_price)}`;
                }
                temp.push({
                    id: element.id,
                    name: element.type_name,
                    price: price
                });
            })
            res.status(200).json({
                roomtypes: temp
            });
        });
    });
});

router.get('/discount', (req, res) => {
    //TODO populate the id field with data from the server
    const sqlSelectRoomIds = `SELECT type_name FROM room_types`;
    db.all(sqlSelectRoomIds, [], (err, data) => {
        if (err) {
            console.error(err)
        } else {
            res.status(200).json({ data: data });
        }
    });
});
router.put('/discount', function(req, res) {
    // TODO read roomId from req.query.id and update discount
    const sqlSelect = `SELECT * from room_types 
                WHERE type_name = ?`;
    //req.query.id => to get the id that is passed as part of the url
    db.get(sqlSelect, [req.query.type_name], (err, currentPrice) => {

        //assumption: the discount is given in % as 10 means 10% and the discount is done on the 
        //the current price if the current and the original price are equal it is a new discount on the original price else
        // it is it is a further reduction on the current_price
        let newPrice,
            current_price = currentPrice.current_price,
            discountRate = req.body.discount;

        newPrice = Math.floor(current_price - (current_price * (discountRate / 100)));
        const updateSql = `UPDATE room_types
                        SET  current_price = ?
                        WHERE type_name = ?`;
        db.run(updateSql, [`${newPrice }`, `${req.query.type_name}`], (err) => {
            if (err) {
                res.status(200).json({
                    message: "error: " + err
                });
            } else {

                res.status(200).json({ message: "Record updated successfully" });
            }

        })
    });

});

router.get('/reservations', (req, res) => {
    //TODO populate the id field with data from the server
    const sqlSelectRoomIds = `SELECT type_name FROM room_types`;
    let responseData = {};
    //get all rooms type name
    db.all(sqlSelectRoomIds, [], (err, data) => {
        if (err) {
            console.error(err)
        } else {
            responseData.type_name = data;
        }
    });
    //get all customers name
    const sqlSelectCustomerName = `SELECT firstname, surname FROM customers`;
    db.all(sqlSelectCustomerName, [], (err, data) => {
        if (err) {
            console.error(err)
        } else {
            //construct the full name of each customer
            let customersName = [];
            data.forEach((element) => {
                customersName.push({
                    fullName: element.firstname + " " + element.surname
                });
            });
            responseData.customers_name = customersName;
            res.status(200).send(responseData);
        }
    });
});
router.post('/reservations', function(req, res) {
    // TODO read req.body.reservation, look up price by room id and insert reservation into DB
    const {
        customerName,
        roomTypeName,
        checkInDate,
        checkOutDate
    } = req.body.reservation;

    const sqlSelectCheckRoom = `SELECT * FROM reservations 
                INNER JOIN room_types
                ON reservations.room_id = room_types.id
                WHERE type_name = ? AND 
                julianday(?) BETWEEN julianday(check_in_date) AND julianday(check_out_date) AND
                julianday(?) <> julianday(check_out_date)`;
    db.all(sqlSelectCheckRoom, [`${ roomTypeName }`, `${checkInDate}`, `${checkInDate}`], (err, record) => {
        if (record.length > 0) {
            res.status(200).json({
                message: `Sorry, the room is alrady booked from ${record[0].check_in_date} till ${record[0].check_out_date}`
            });
        } else {
            //
            const sqlSelectACustomerId = `SELECT id FROM customers 
                                         WHERE surname = ?`;
            //get the surname from the passed fullname
            const surname = `${customerName}`.split(" ")[1];
            let customerID;
            //get the customer id with the given surname
            db.get(sqlSelectACustomerId, [surname], (err, data) => {
                if (err) {
                    console.error(err)
                } else {
                    customerID = data.id;
                }
            });
            //get the room id the its current price
            const sql = `SELECT current_price,id from room_types
                            WHERE type_name = ? `;
            db.get(sql, [`${ roomTypeName }`], (err, data) => {
                let price = data.current_price;
                let roomId = data.id;

                const reservationSql = `
                            INSERT INTO reservations(customer_id, room_id, check_in_date, check_out_date, room_price)
                            VALUES( ? , ? , ? , ? , ? )
                            `;
                db.run(reservationSql, [customerID, roomId, `${checkInDate }`, `${ checkOutDate }`, price], (err) => {
                    if (err) {
                        res.status(200).json({
                            message: "error: " + err
                        });
                    } else {
                        res.status(200).json({ message: "Your reservation has been made successfully" });
                    }
                });

            });
        }
    });

});
router.get('/search', function(req, res) {
    // TODO read req.query.name or req.query.id to look up reservations and return
    // the search by name is done through using surname

    const sql = `SELECT title, firstname, surname, email,
               room_id AS roomId, check_in_date AS checkInDate, check_out_date AS checkOutDate
               FROM customers
               INNER JOIN reservations 
               on customers.id = reservations.customer_id
               WHERE customers.id = ? OR customers.surname = ?`;
    //a customer can have more than one reservation
    //get the surname from the full name, if there is a passed one
    let surname;
    if (req.query.customerName !== undefined)
        surname = req.query.customerName.split(" ")[1];
    db.all(sql, [req.query.id, surname], (err, reservation) => {
        if (err) {
            console.error(err)
        } else {
            res.status(200).json({ reservations: reservation });
        }
    });
});

router.get('/reservations/date-from/:dateFrom', function(req, res) {
    // TODO read req.params.dateFrom to look up reservations and return
    const sql = `SELECT customers.title,customers.firstname,customers.surname,customers.email,
               reservations.room_id AS roomId,reservations.check_in_date AS checkInDate,reservations.check_out_date AS checkOutDate
               FROM customers
               INNER JOIN reservations 
               on customers.id = reservations.customer_id
               WHERE check_in_date BETWEEN date(?) AND date(?,'+30 day')
               ORDER BY julianday(check_in_date)`;

    db.all(sql, [req.params.dateFrom, req.params.dateFrom], (err, reservations) => {
        if (err) {
            console.error(err)
        } else {
            res.status(200).json({ reservations: reservations });
        }

    });

});
router.get('/invoice', (req, res) => {
    //TODO populate the id field with data from the server
    //to calculate the number of days the customer stayed
    const sqlSelectReservationId = `SELECT id,julianday(check_out_date) - julianday(check_in_date) AS numberOfStay,room_price FROM reservations`;
    db.all(sqlSelectReservationId, [], (err, data) => {
        if (err) {
            console.error(err)
        } else {
            let responseData = [];
            data.forEach(element => {
                responseData.push({
                    id: element.id,
                    roomCharge: (element.numberOfStay * element.room_price) / 100
                });
            });
            res.status(200).json({ data: responseData });
        }
    });
});
router.put('/invoice', function(req, res) {
    // TODO read req.query.reservationId and req.body.invoice and insert into DB
    const reservationId = req.query.reservationId;
    const {
        surcharges,
        total,
        paid
    } = req.body.invoice;
    const sqlInsert = `INSERT INTO invoices (reservation_id,surcharges,total,invoice_date_time,paid)
               VALUES(?,?,?,date('now'),?)`;

    db.run(sqlInsert, [reservationId, `${surcharges}`, `${total}`, `${paid}`], (err, invoice) => {
        if (err) {
            res.status(200).json({
                message: "error: " + err
            });
        } else {
            res.status(200).json({ message: "The Invoice has been recorded successfully!" });
        }
    });

});

router.post('/reviews', function(req, res) {
    // TODO read req.body.review
    const {
        customerId,
        roomTypeName,
        rating,
        comment
    } = req.body.review;
    //get the room_type_id
    const sql = `SELECT id from room_types
    WHERE type_name = ? `;
    db.get(sql, [`${ roomTypeName }`], (err, data) => {
        let room_type_id = data.id;
        const sqlInsert = `INSERT INTO reviews (customer_id,room_type_id,rating,comment,review_date)
                        VALUES(?,?,?,?,date('now'))`;
        db.run(sqlInsert, [`${customerId}`, room_type_id, `${rating}`, `${comment}`], (err, invoice) => {
            if (err) {
                res.status(200).json({
                    message: "error: " + err
                });
            } else {
                res.status(200).json({ message: "Your review has been submited successfully!" });
            }
        });
    });
});
router.get('/reviews', function(req, res) {
    // TODO comment out response above and uncomment the below
    db.serialize(function() {
        //concatenate firstname and surname and return them as fullname
        const sqlSelect = `SELECT firstname|| " " ||surname AS fullName , type_name AS roomType, rating, comment, review_date FROM room_types 
                          INNER JOIN reviews 
                          ON room_types.id = reviews.room_type_id
                          LEFT JOIN customers
                          ON customers.id = reviews.customer_id
                          ORDER BY roomtype`;
        db.all(sqlSelect, [], (err, rows) => {
            res.status(200).json({
                reviews: rows
            });
        });
    });

});
module.exports = router;