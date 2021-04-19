import React, { useState, useEffect } from "react";
import AddCustomers from "./AddCustomers.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  const adding = element => {
    setBookings(bookings.concat(element));
  };

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    bookings.map(el => {
      if (
        searchVal.toLowerCase() == el.firstName.toLowerCase() ||
        searchVal.toLowerCase() == el.surname.toLowerCase()
      ) {
        setBookings([el]);
      }
    });
  };

  if (bookings.length > 0) {
    return (
      <div className="App-content">
        <div className="container">
          <AddCustomers addingNew={adding} />
          <Search search={search} />

          {<SearchResults results={bookings} />}
        </div>
      </div>
    );
  } else {
    return <h1>Loadding...</h1>;
  }
};

export default Bookings;
