import React from "react";

const TableBody = props => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surName}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkIn}</td>
      <td>{props.checkOut}</td>
      <td>{props.days}</td>
    </tr>
  );
};

export default TableBody;
