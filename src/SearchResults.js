import React from "react";
import moment from "moment";

export default function SearchResult({ results }) {
  const booking = results[0];
  const tableHeadings = Object.keys(booking); //this converts object keys in array

  const tableHeadingElements = tableHeadings.map((tableHeading, i) => (
    <th key={i}>{tableHeading}</th>
  ));

  const tableRows = results.map((booking, i) => (
    <tr key={i}>
      {Object.values(booking).map((bookingDetail, j) => (
        <td key={j}>{bookingDetail} </td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{tableHeadingElements}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

// function howManyNights(checkInDate, checkOutDate) {
//   checkInDate = moment(checkInDate);
//   checkOutDate = moment(checkOutDate);
//   return checkOutDate.diff(checkInDate, "days");
// }
