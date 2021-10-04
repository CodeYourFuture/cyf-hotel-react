import React from "react";

import SearchResultHeading from "./SearchResultHeading";
import SearchResultsBody from "./SearchResultsBody";
const headingItems = [
  "Title",
  "First Name",
  "Last Name",
  "Email",
  "Room ID",
  "Check in Date",
  "Check out Date"
];
export default function SearchResults({ fakeBookings }) {
  return (
    <table className="table table-hover">
      <SearchResultHeading headingItems={headingItems} />
      <SearchResultsBody bookings={fakeBookings} />
    </table>
  );
}
