import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./component/SearchResults.jsx";
import CreateNewCusForm from "./component/CreateNewCusForm.jsx";

// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (!res.ok) {
          setIsLoading(false);
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        {isLoading && <div>is loading...</div>}
        {error && <div>{error}</div>}
        <Search search={search} />
        <SearchResults results={bookings} />
        <CreateNewCusForm setBookings={setBookings} id={bookings.id} />
      </div>
    </div>
  );
};

export default Bookings;
