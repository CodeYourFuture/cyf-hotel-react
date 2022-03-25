import React from "react";
import moment from "moment";

const headings = [
  "id",
  "title",
  "first name",
  "surname",
  "email",
  "room id",
  "checkInDate",
  "checkOutDate",
  "numberOfNights"
];

function SearchResults(props) {
  return (
    <table className="search-result-table">
      <thead className="search-result-table-head">
        <tr>
          {headings.map(heading => {
            return <th scope="col"> {heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          return (
            <tr>
              <th scope="row"> {booking.id} </th>
              {headings.map(heading => {
                if (heading === "id") {
                  return null;
                } else if (heading === "numberOfNights") {
                  const checkIn = moment(booking.checkInDate);
                  const checkOut = moment(booking.checkOutDate);
                  const difference = checkOut.diff(checkIn, "days");
                  return <td>{difference}</td>;
                } else {
                  return <td> {booking[heading]} </td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
