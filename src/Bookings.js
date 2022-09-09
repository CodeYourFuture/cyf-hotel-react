import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const search = searchVal => {
    setBookings(
      bookings.filter(booking => {
        return `${booking.firstName} ${booking.surname}`
          .toLocaleLowerCase()
          .includes(searchVal.toLowerCase());
      })
    );
  };
  const [bookings, setBookings] = useState([]);
  const [loadingInProgress, setLoadingInProgress] = useState(false);
  useEffect(() => {
    setLoadingInProgress(true);
    fetch(`https://cyf-react.glitch.me`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        return null;
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.log("The error is " + error);
        setBookings(null);
      })
      .finally(() => {
        setLoadingInProgress(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={Bookings} /> */}
        <SearchResults
          Bookings={bookings}
          LoadingInProgress={loadingInProgress}
        />
      </div>
    </div>
  );
};
export default Bookings;
