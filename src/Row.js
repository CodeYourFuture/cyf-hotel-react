import React, { useState } from "react";
import moment from "moment";

function Row(props) {
  const booking = props.booking;
  const [color, setColor] = useState(false);
  function toggle() {
    if (color === false) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  const changeColor = color ? "sth" : "";
  return (
    <tr className={changeColor} onClick={toggle} key={booking.id}>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")}</td>
    </tr>
  );
}

export default Row;
