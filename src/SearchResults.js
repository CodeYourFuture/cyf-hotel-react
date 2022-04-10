import React from "react";
import SearchResultRows from "./SearchResultRows";

const headings = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "numberOfNights"
];

function SearchResults(props) {
  return (
    <table>
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          return <SearchResultRows booking={booking} headings={headings} />;
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
