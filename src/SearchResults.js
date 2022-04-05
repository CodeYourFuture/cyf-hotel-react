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
    <table>
      <thead>
        <tr>
          {headings.map((heading, index) => {
            return (
              <th scope="col" key={index}>
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.booking.map((booking, index) => {
          return (
            <tr key={index}>
              <th scope="row">{booking.id}</th>
              {headings.map((heading, index) => {
                if (heading === "id") {
                  return null;
                } else if (heading === "numberOfNights") {
                  const checkIn = moment(booking.checkInDate);
                  const checkOut = moment(booking.checkOutDate);
                  const difference = checkOut.diff(checkIn, "days");
                  return <td key={index}>{difference}</td>;
                } else {
                  return <td key={index}>{booking[heading]}</td>;
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
