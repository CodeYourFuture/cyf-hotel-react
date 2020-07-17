import React from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import FakeBookings from "./data/fakeBookings.json";

function SearchResults() {
  return (
    <div>
      <table class="table table-striped">
        <TableHeader />
        <TableData results={FakeBookings} />
      </table>
    </div>
  );
}

export default SearchResults;
