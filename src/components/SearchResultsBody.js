import React from "react";
import moment from "moment";
export default function SearchResultsBody({ bookings }) {
  const tableRows = bookings.map(booking => (
    <tr key={booking.id}>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{howManyDay(booking.checkInDate, booking.checkOutDate)}</td>
    </tr>
  ));

  return <tbody>{tableRows}</tbody>;
}

function howManyDay(checkInDate, checkOutDate) {
  checkInDate = moment(checkInDate);
  checkOutDate = moment(checkOutDate);
  return checkOutDate.diff(checkInDate, "days");
}
