import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import BookingForm from "./BookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchedBookings, setSearchedBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const search = searchVal => {
    if (searchVal.length > 0) {
      fetch(
        `https://cbaggini-hotel-server.glitch.me/bookings/search?term=${searchVal}`
      )
        .then(response => response.json())
        .then(data => setSearchedBookings(data))
        .catch(e => console.log(e));
    } else {
      console.log("No search value");
      setSearchedBookings(bookings);
    }
  };

  useEffect(() => {
    fetch("https://cbaggini-hotel-server.glitch.me/bookings")
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setIsError(true);
          setIsLoading(false);
        } else {
          setBookings(data);
          if (searchedBookings.length === 0) {
            setSearchedBookings(data);
          }
          setIsLoading(false);
        }
      })
      .catch(e => console.log(e));
  }, [searchedBookings.length]);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <SearchResults results={searchedBookings} />
        )}
        {isError && <div>There was an error</div>}
      </div>
      <BookingForm bookings={bookings} setBookings={setBookings} />
    </div>
  );
};

export default Bookings;
