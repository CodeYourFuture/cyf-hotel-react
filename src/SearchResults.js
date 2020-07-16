import React from "react";
import TableData from "./TableData";
import TableDetails from "./TableDetails";
import FakeBooking from "./data/fakeBookings.json";

const SearchResults = () => {
  return (
    <table border="1">
      <TableData />
      <TableDetails results={FakeBooking} />
    </table>
  );
};

export default SearchResults;
