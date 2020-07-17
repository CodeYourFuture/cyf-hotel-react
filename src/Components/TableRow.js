import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.title}</td>
      <td>{props.item.firstName}</td>
      <td>{props.item.surname}</td>
      <td>{props.item.email}</td>
      <td>{props.item.roomId}</td>
      <td>{props.item.checkInDate}</td>
      <td>{props.item.checkOutDate}</td>
      <td>{props.nightsSpent}</td>
    </tr>
  );
}
export default TableRow;
