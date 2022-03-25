import React from "react";
const moment = require("moment");

const headings = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "Duration"
];

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          return (
            <tr>
              <th scope="row">{booking.name}</th>
              {headings.map(heading => {
                if (heading === "id") {
                  return null;
                } else if (heading === "Duration") {
                  {
                    const checkIn = moment(booking.checkInDate);
                    const checkOut = moment(booking.checkOutDate);
                    const difference = checkOut.diff(checkIn, "days");
                    return <td>{difference}</td>;
                  }
                } else {
                  return <td>{booking[heading]}</td>;
                }
              })}
              <td>{booking.height}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default SearchResults;
