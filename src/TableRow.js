import React from "react";
import moment from "moment";
import { useState } from "react";

function TableRow({
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate
}) {
  const [isSelected, setIsSelected] = useState(false);

  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);
  return (
    <tr
      style={{ backgroundColor: `${isSelected ? "wheat" : "white"}` }}
      onClick={() => setIsSelected(!isSelected)}
    >
      <th scope="row">{title}</th>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
    </tr>
  );
}
export default TableRow;
