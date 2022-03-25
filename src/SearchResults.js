import React from "react";

const headings = [
  "id",
  "title",
  "first name",
  "surname",
  "email",
  "room id",
  "checkInDate",
  "checkOutDate"
];

function SearchResults(props) {
  return (
    <table>
      <thead>
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
