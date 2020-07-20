import React, { useState } from "react";

function TableRow(props) {
  const [isSelected, setIsSelected] = useState(false);

  const setRowStatus = () => {
    setIsSelected(!isSelected);
  };

  return (
    <tr className={isSelected ? "table-active" : null} onClick={setRowStatus}>
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
