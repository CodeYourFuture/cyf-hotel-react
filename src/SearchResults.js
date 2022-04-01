import React from "react";
import moment from "moment";

const headings = [
  `id`,
  `title`,
  `firstName`,
  `surname`,
  `email`,
  `roomId`,
  `checkInDate`,
  `checkOutDate`,
  `numberOfNights`
];

function SearchResults(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          {headings.map((heading, index) => {
            return (
              <th key={index} scope="col">
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          return (
            <tr>
              <th scope="row">{booking.id}</th>
              {headings.map(heading => {
                if (heading === "id") {
                  return null;
                } else {
                  return <td>{booking[heading]}</td>;
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
