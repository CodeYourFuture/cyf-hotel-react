import React, { useState } from "react";
import moment from "moment";

const Row = ({ booking }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelectedClass = () => {
    setSelected(!selected);
  };

  const checkIn = moment(booking.checkOutDate);
  const checkOut = moment(booking.checkInDate);
  return (
    <tr
      key={booking.id}
      onClick={toggleSelectedClass}
      className={selected ? "highlight" : null}
    >
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{checkIn.diff(checkOut, "days")}</td>
    </tr>
  );
};
export default Row;
