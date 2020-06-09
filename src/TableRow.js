import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function TableRow({ booking, index }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <tr
      key={index}
      onClick={() => setIsHighlighted(!isHighlighted)}
      className={isHighlighted ? "highlited" : ""}
    >
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {moment(booking.checkInDate).diff(
          moment(booking.checkOutDate),
          "days"
        ) * -1}
      </td>
      <td>
        <button onClick={() => setClicked(!clicked)}>Show profile</button>
      </td>
      {clicked ? <CustomerProfile id={booking.id} /> : null}
    </tr>
  );
}

export default TableRow;
