import React, { useState, useEffect } from "react";
import Search from "./search/Search";
import SearchResults from "./search/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("fetching");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setStatus("failure");
        } else {
          setBookings(data);
          setStatus("success");
        }
      });
  }, []); // only run once after the first render (please)

  const search = searchVal => {
    const filteredBookings = bookings.filter(({ firstName, surname }) =>
      firstName === searchVal || surname === searchVal ? true : false
    );
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        {status === "fetching" && "Loading... Please Wait..."}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults bookings={bookings} />
          </>
        )}
        {status === "failure" && "OOPS, SOMETHING WENT WRONG"}
      </div>
    </div>
  );
};

export default Bookings;
