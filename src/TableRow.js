import React from "react";
import moment from "moment";
// moment().format();

function TableRow({
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate
}) {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);
  return (
    <tr>
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
