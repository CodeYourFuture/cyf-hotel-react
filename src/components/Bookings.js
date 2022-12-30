import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import "../App.css";
import { BeatLoader } from "react-spinners";

import { SearchResults } from "./SearchResults";

export const Bookings = () => {
  const [booking, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      });
    return () => {};
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = booking.filter(val => {
      return (
        val["firstName"].includes(searchVal) ||
        val["surname"].includes(searchVal)
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content override">
      <Search search={search} />
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <BeatLoader color="maroon" />
        </div>
      ) : (
        <SearchResults results={booking} />
      )}
    </div>
  );
};
