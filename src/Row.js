import React from "react";

const Row = props => {
  return (
    <tr
      onClick={() => props.setSelectedRow(props.row.id)}
      className={props.isSelected ? "selected-row" : "unselected-row"}
    >
      <td>{props.row.id}</td>
      <td>{props.row.title}</td>
      <td>{props.row.firstName}</td>
      <td>{props.row.surname}</td>
      <td>{props.row.email}</td>
      <td>{props.row.roomId}</td>
      <td>{props.row.checkInDate}</td>
      <td>{props.row.checkOutDate}</td>
      <td>{props.row1}</td>
    </tr>
  );
};
export default Row;
