import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setBookingData(data);
        setIsLoad(false);
      });
  }, []);

  const search = searchVal => {
    setBookings(
      bookingData.filter(item =>
        item.firstName.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults searchResultBookings={bookings} />
        {isLoad && (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Loading...</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Bookings;
