import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] =useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
    .then(response => response.json())
    .then(json => {setBookings(json)
                  setIsLoading(false);
    })
    .catch((error) => {console.log("Error fetching data:", error);
                    setError("Error fetching data. Please try again later.");
                    setIsLoading(false);
          });
  }, []); 

  var search = searchVal => {
    const filteredBookings = bookings.filter(booking => 
      booking.firstName.includes(searchVal) || booking.surname.includes(searchVal)
    );
    setBookings(filteredBookings)
  };

  return (
    <div className="App-content">
      {isLoading ? (
        <h1>Loading...Please Wait</h1>
      ) : error ? (
        <h1>{error}</h1> ) : (
        <div className="container">
        <Search search={search} />
        {<SearchResults bookings={bookings} />}
      </div>
      )}
    </div>
  );
};

export default Bookings;