import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // const [bookings, setBookings] = useState(FakeBookings);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        console.log(response);
        if (response.status >= 200 && response.status < 200) {
          throw new Error("this site is not avaliable for now");
        }
        return response.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const search = searchVal => {
    let newbookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );
    setBookings(newbookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? "loading" : <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
