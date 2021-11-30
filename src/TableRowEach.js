import React, { useState } from "react";
import moment from "moment";

const TableRowEach = props => {
  const [rowsSelected, setRowsSelected] = useState(false);
  function rowsSelector() {
    setRowsSelected(!rowsSelected);
  }
  return (
    <tr onClick={rowsSelector} className={rowsSelected ? "highlight" : ""}>
      <td>{props.entry.id}</td>
      <td>{props.entry.title}</td>
      <td>{props.entry.firstName}</td>
      <td>{props.entry.surname}</td>
      <td>{props.entry.email}</td>
      <td>{props.entry.roomId}</td>
      <td>{props.entry.checkInDate}</td>
      <td>{props.entry.checkOutDate}</td>
      <td>
        {moment(props.entry.checkOutDate, "YYYY/MM/DD").diff(
          moment(props.entry.checkInDate, "YYYY/MM/DD"),
          "days"
        )}
      </td>
    </tr>
  );
};

export default TableRowEach;
