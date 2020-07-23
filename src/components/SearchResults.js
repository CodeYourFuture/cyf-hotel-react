import React, { useState, useEffect } from "react";
import TableInfo from "./TableInfo.js";
import TableData from "./TableData.js";

function SearchResults() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me.")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);
  return (
    <div>
      <table className="table table-striped">
        <TableInfo />
        <TableData results={bookings} />
      </table>
    </div>
  );
}

export default SearchResults;
