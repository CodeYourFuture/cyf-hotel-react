import React, { useState } from "react";

const TableRow = props => {
  const [rowColour, setRowColour] = useState(0);
  const highlight = () => {
    setRowColour(!rowColour);
  };
  return (
    <tr
      className={rowColour ? "lightColour" : ""}
      onClick={highlight}
      key={ind}
    >
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{Math.abs((d1 - d2) / (1000 * 24 * 60 * 60))}</td>
    </tr>
  );
};

export default TableRow;
