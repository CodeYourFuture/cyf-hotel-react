import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FakeBookings from "./data/fakeBookings.json";

const SearchResults = () => {
  const [bookings] = useState(FakeBookings);

  return (
    <div className="search-results">
      <table className="table table-bordered">
        <TableHeader />
        <tbody>
          <TableRow results={bookings} />
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
