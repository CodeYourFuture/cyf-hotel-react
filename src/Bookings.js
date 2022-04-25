import React, { useEffect, useState } from "react";
import Search from "./Search.js";
// import ourBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [wasError, setWasError] = useState(false);

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
    fetch("https://cyf-react.glitch.me/error")
      .then(res => {
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })

      .then(data => {
        setBookings(data);
        setIsLoaded(false);
      })
      .catch(() => {
        setIsLoaded(false);
        setWasError(true);
      });
  }, []); // only run once, after the first render

  if (isLoaded) {
    return <div className="loading">"Loading bookings.."</div>;
  }

  if (wasError) {
    return <p>Error occured whilst fetching the booking information</p>;
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
