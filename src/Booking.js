import React from "react";
import moment from "moment";

const Booking = ({ booking, id }) => {
  console.log(booking.checkInDate);
  const START_DATE = moment(booking.checkInDate);
  const END_DATE = moment(booking.checkOutDate);
  const nights = END_DATE.diff(START_DATE, "days");

  console.log(START_DATE, END_DATE, nights);
  return (
    <tr>
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{nights}</td>
    </tr>
  );
};

export default Booking;
