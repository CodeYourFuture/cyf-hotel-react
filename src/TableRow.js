import React from "react";

const TableRow = ({
  booking: {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  }
}) => {
  return (
    <tr key={id}>
      <td scope="row">{title}</td>
      <td scope="row">{firstName}</td>
      <td scope="row">{surname}</td>
      <td scope="row">{email}</td>
      <td scope="row">{roomId}</td>
      <td scope="row">{checkInDate}</td>
      <td scope="row">{checkOutDate}</td>
    </tr>
  );
};

export default TableRow;
