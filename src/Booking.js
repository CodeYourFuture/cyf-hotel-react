import React, { useState } from "react";
import moment from "moment";

const Booking = ({ booking }) => {
  const [selected, setSelected] = useState(false);
  const handleClick = event => {
    // SET STATE TO RERENDER
    setSelected(!selected);
  };
  const START_DATE = moment(booking.checkInDate);
  const END_DATE = moment(booking.checkOutDate);
  const nights = END_DATE.diff(START_DATE, "days");
  return (
    <tr
      onClick={handleClick}
      className={selected ? "bg-primary text-light" : ""}
    >
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
