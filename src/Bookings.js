import React from "react";
import moment from "moment";
import Search from "./Search.js";
import SearchResults from "../src/Components/SearchResults/SearchResults";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
// import classes from "./";

const Bookings = props => {
  const [bookingsData, bookingHandler] = React.useState([]);
  const [searchingValue, searchHandler] = React.useState(bookingsData);
  const [selectedByIduser, selectByIdHandler] = React.useState([]);
  const [loadingID, loadingHandler] = React.useState(false);
  const [spinnerBookingLoading, loadingBookingHandler] = React.useState(false);
  const [errorLogic, errorHandler] = React.useState(false);

  const selectByIdFunction = (e, id) => {
    e.preventDefault();
    loadingHandler(true);

    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => {
        loadingHandler(false);
        return res.json();
      })
      .then(data => {
        console.log(data);
        selectByIdHandler(data);
      });
    // selectByIdHandler(data);
  };

  const tableTitle = [
    "ID",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room ID",
    "Check in date",
    "Check out date",
    "No. of nights",
    "More details"
  ];

  React.useEffect(() => {
    loadingBookingHandler(true);
    errorHandler(false);
    fetch("https://cyf-react.glitch.me/")
      .then(res => {
        loadingBookingHandler(false);
        return res.json();
      })
      .then(list => {
        const apiBooking = list.map(item => {
          const a = moment(item.checkOutDate);
          const b = moment(item.checkInDate);
          const noOfNights = a.diff(b, "day");

          return (item = {
            id: item.id,
            title: item.title,
            firstName: item.firstName,
            surname: item.surname,
            email: item.email,
            roomId: item.roomId,
            checkInDate: item.checkInDate,
            checkOutDate: item.checkOutDate,
            numberOfNights: noOfNights
          });
        });
        console.log(apiBooking);
        bookingHandler(apiBooking);
        searchHandler(apiBooking); //shortcut
      })
      .catch(err => {
        errorHandler(true);
      });
  }, []);

  const searchHandlerEvent = e => {
    // e.preventDefault();
    // console.log(e.target);
    // if (e.target === "button") return;
    const query = document.querySelector("#customerName");
    const copy = [...bookingsData];
    console.log(query.value);
    console.log(bookingsData);
    console.log(copy);

    if (query.value === "") searchHandler(copy);
    const found = copy.filter(item => {
      if (
        item.firstName.toLowerCase().includes(query.value.toLowerCase()) ||
        item.surname.toLowerCase().includes(query.value.toLowerCase())
      ) {
        return item;
      }
    });

    if (found === undefined) return;
    query.innerHTML = "";
    console.log(found);
    return searchHandler(found);
  };
  let spinner = null;
  if (loadingID) {
    spinner = <div className="Loader">Loading...</div>;
  }

  let spinnerBooking = null;
  if (spinnerBookingLoading) {
    spinnerBooking = <div className="Loader">Loading...</div>;
  }

  let errorMSG = null;
  if (errorLogic) {
    errorMSG = (
      <p style={{ color: "red" }}>Problem witch fetching data - error</p>
    );
  }

  // search = { search };
  return (
    <div className="App-content">
      <div className="container">
        <Search searchFunction={searchHandlerEvent} />
        {spinner}
        <div style={selectedByIduser.id ? null : { display: "none" }}>
          <ul className="inlineList">
            <li> ID: {selectedByIduser.id}</li>
            <li> Email: {selectedByIduser.email}</li>
            <li> Tel: {selectedByIduser.phoneNumber}</li>
          </ul>
        </div>
        <SearchResults
          selectIdHandlerFunction={selectByIdFunction}
          fakeBooking={searchingValue}
          tableHeader={tableTitle}
        />
        {spinnerBooking}
        {errorMSG}
      </div>
    </div>
  );
};

export default Bookings;
