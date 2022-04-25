import React, { useEffect, useState } from "react";
import Search from "./Search.js";
// import ourBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(({ firstName, surname }) => {
      if (firstName === searchVal || surname === searchVal) {
        return true;
      } else {
        return false;
      }
    });
    setBookings(filteredBookings);
  };

  useEffect(() => {
    setIsLoaded(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setIsLoaded(false);
      });
  }, []); // only run once, after the first render

  if (isLoaded) {
    return <div className="loading">"Loading bookings.."</div>;
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
