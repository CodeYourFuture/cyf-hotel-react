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
  "Check out Date",
  "Number Of Nights"
];
export default function SearchResults({ results }) {
  return (
    <table className="table table-hover">
      <SearchResultHeading headingItems={headingItems} />
      <SearchResultsBody bookings={results} />
    </table>
  );
}
