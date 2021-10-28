import React from "react";
import moment from "moment";
import TableRow from "./TableRow";

export default function SearchResults({ results }) {
  results = results.map(booking => {
    const checkInDate = booking.checkInDate;
    const checkOutDate = booking.checkOutDate;
    const nights = howManyNights(checkInDate, checkOutDate);
    booking.nights = nights;
    return booking;
  });
  function howManyNights(checkInDate, checkOutDate) {
    checkInDate = moment(checkInDate);
    checkOutDate = moment(checkOutDate);
    return checkOutDate.diff(checkInDate, "days");
  }
  //populating our table
  const booking = results[0];
  const tableHeadings = Object.keys(booking); //this converts object keys in array

  const tableHeadingElements = tableHeadings.map((tableHeading, i) => (
    <th key={i}>{tableHeading}</th>
  ));

  const tableRows = results.map((booking, i) => (
    <TableRow key={i} booking={booking} />
  ));
  return (
    <table className="table table-responsive table-hover table-light">
      <thead>
        <tr>{tableHeadingElements}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
