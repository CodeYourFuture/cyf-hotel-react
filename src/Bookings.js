import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    //console.log(bookings);
    setBookings(
      bookings.filter(({ firstName, surname }) => {
        return firstName.includes(searchVal) || surname.includes(searchVal);
      })
      //TODO: after first, search can get only filtered users not all users
    );
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed") //"https://cyf-react.glitch.me"
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => alert(err));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? <SearchResults results={bookings} /> : <div>Loading..</div>}
      </div>
    </div>
  );
};

export default Bookings;
