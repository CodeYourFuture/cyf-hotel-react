import React, { useState, useEffect } from "react";
import moment from "moment";
//import "./Bookings.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newBooking, setNewBooking] = useState({
    id: null,
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: null,
    checkInDate: "",
    checkOutDate: ""
  });

  console.log(newBooking);
  useEffect(() => {
    fetch("https://nawal-hotel-server.glitch.me/bookings")
      //    fetch("https://cyf-react.glitch.me/delayed")
      //fetch("https://cyf-react.glitch.me/error")
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw data;
        }
        console.log(data);
        setBookings(data);
        setLoading(false);
      })
      .catch(error => setError(error));
    console.log("500 HTTP error");
  }, []);
  const search = searchVal => {
    let getResource;
    const term = searchVal.toLowerCase();
    if (searchVal) {
      getResource = fetch(
        `https://nawal-hotel-server.glitch.me/bookings/search?term=${term}`
      );
    }

    if (moment(term, "YYYY-MM-DD", true).isValid()) {
      getResource = fetch(
        `https://nawal-hotel-server.glitch.me/bookings/search?date=${term}`
      );
    }

    return getResource
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  const onDeleteBooking = id => {
    fetch(`https://nawal-hotel-server.glitch.me/bookings/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => setBookings(data));
  };
  /*
  body: JSON.stringify({
        firstName: newBooking.firstName,
        surname: newBooking.surname,
        email: newBooking.email,
        roomId: newBooking.roomId,
        checkInDate: newBooking.checkInDate,
        checkOutDate: newBooking.checkOutDate
      })
  */

  // const schema = yup.object.shape({
  //   firstName: yup.string().required('firstname is not valid'),
  //   surname:  yup.string().required(),
  //   email: yup.string().email(),
  //   roomId: yup.number(),
  //   checkInDate: yup.string().test('is-valid-check-in-date', 'check in date is not valid', checkValidStateDate),
  //   checkOutDate: yup.string().test('is-valid-check-in-date', '', checkValidEndDate),
  // })

  // schema.validate(bookings)

  const addCustomer = customer => {
    fetch("https://nawal-hotel-server.glitch.me/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: newBooking.firstName,
        surname: newBooking.surname,
        email: newBooking.email,
        roomId: newBooking.roomId,
        checkInDate: newBooking.checkInDate,
        checkOutDate: newBooking.checkOutDate
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    customer.id = bookings.length + 1;
    setBookings([...bookings, customer]);
  };

  if (loading && !error) {
    return <div> Loading...</div>;
  }
  if (error == null) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} deleteBooking={onDeleteBooking} />
          <div>
            <BookingForm
              addCustomer={addCustomer}
              newBooking={newBooking}
              setNewBooking={setNewBooking}
            />
          </div>
        </div>
      </div>
    );
  } else {
    console.log(error);
    return <div>{error.error}</div>;
  }
};
export default Bookings;
