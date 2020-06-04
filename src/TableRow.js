import React, { useState } from "react";
import moment from "moment";

function TableRow({ booking, index }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  return (
    <tr
      key={index}
      onClick={() => setIsHighlighted(!isHighlighted)}
      className={isHighlighted ? "highlited" : ""}
    >
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
    </tr>
  );
}

export default TableRow;
