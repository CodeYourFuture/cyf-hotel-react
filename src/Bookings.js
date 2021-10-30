import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [display, setDisplay] = useState(true);

  const search = searchVal => {
    if (searchVal === "") {
      setBookings(bookings);
    } else {
      let bookingFinds = bookings.filter(booking => {
        return (
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      });
      setBookings(bookingFinds);
    }
  };

  const [bookings, setBookings] = useState([]);
  //const [filteredBookings, setFilterBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Page Uploaded");
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        // if there is error throw this text
        if (!response.ok) {
          throw Error("We could not fetch the data for that resource");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // when data is fetched without errors update bookings state
        setBookings(data);
        // when data is fetched without errors update display state to false (Loading won't be displayed)
        setDisplay(false);
        // when data is fetched without errors update error state to null (for sure)
        setError(null);
      })
      .catch(err => {
        // catch is used to catch thrown message
        console.log("error message: ", err.message);
        // when there is error in fetching, update error state to the message we wrote
        setError(err.message);
        // when there is error in fetching, update display state to false, so stop displaying everything
        setDisplay(false);
      });
  }, []);
  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me/delayed")
  //     .then(res => res.json())
  //     .then(data => {
  //       setDisplay(false);
  //
  //     });
  // }, []);

  return (
    <div className="App-content">
      {display && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {bookings && (
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
