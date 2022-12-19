import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then(res => {
        if (!res.ok) {
          setIsLoad(false);
          setIsError(true);
          throw Error(
            `Could not fetch the data for that resource "Error: ${res.status}"`
          );
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setBookingData(data);
        setIsLoad(false);
        setIsError(null);
      })
      .catch(err => {
        setIsLoad(false);
        setIsError(err.message);
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
        {isError && <div>{isError}</div>}
      </div>
    </div>
  );
};

export default Bookings;
