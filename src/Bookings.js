import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errMessage, setErrmessage] = useState("");

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let searchResults = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );

    setBookings(searchResults);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setIsLoaded(true);
      });
  }, [isLoaded]);

  if (isLoaded) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Please wait. The booking data is being loaded.</p>
      </div>
    );
  }
  // return isLoaded ? (
  //   <div className="App-content">
  //     <div className="container">
  //       <Search search={search} />
  //       <SearchResults results={bookings} />
  //     </div>
  //   </div>
  // ) : (
  //   <div>
  //     <p>Please wait. The booking data is being loaded.</p>
  //   </div>
  // );
};

export default Bookings;
