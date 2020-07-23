import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";

function SearchResults() {
  useEffect(() => {
    console.log("hello react");
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setBookings(data);
      });
  }, []);
  const [bookings, setBookings] = useState([]);
  return (
    <div>
      <table className="table">
        <TableHeader />
        <TableData results={bookings} />
      </table>
    </div>
  );
}

export default SearchResults;
