import { React, useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const booingFilter = bookings.filter(
      dataCustomer =>
        dataCustomer["firstName"].toLowerCase() == searchVal.toLowerCase() ||
        dataCustomer["surname"].toLowerCase() == searchVal.toLowerCase()
    );
    setBookings([...booingFilter]);
  };

  const [bookings, setBookings] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  //  bookings.length === [] ? setLoading(true) : setLoading(false);
  console.log(bookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        <SearchResults bookingData={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
