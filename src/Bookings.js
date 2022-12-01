import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBooking] = useState(FakeBookings);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("fetching");

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let searchBookings = booking.filter(item => {
      return (
        item.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBooking(searchBookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setStatus("success");
        setBooking(data);
      })
      .catch(() => {
        setLoading(false);
        setStatus("failure");
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        {loading ? (
          "Loading..."
        ) : (
          //{status === "fetching" && "Loading..."}
          //{status === "success" && (
          <>
            <Search search={search} />
            <SearchResults results={booking} />
          </>
        )}
        {status === "failure" && "Something went Wrong"}
      </div>
    </div>
  );
};

export default Bookings;
