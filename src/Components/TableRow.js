import React, { useState } from "react";

function TableRow(props) {
  const [isSelected, setIsSelected] = useState(false);

  const setRowStatus = () => {
    setIsSelected(!isSelected);
  };

  const handleClick = e => {
    e.preventDefault();
    props.setCustomerID(props.item.id);
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
      <td>
        <button onClick={handleClick} className="btn-sm btn-outline-primary">
          Show profile
        </button>
      </td>
    </tr>
  );
}
export default TableRow;
