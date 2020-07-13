import React from "react";
import TableInfo from "./TableInfo.js";
import TableData from "./TableData.js";
import FakeBookings from "./data/fakeBookings.json";

function SearchResults() {
  return (
    <div>
      <table className="table table-striped">
        <TableInfo />
        <TableData results={FakeBookings} />
      </table>
    </div>
  );
}

export default SearchResults;
