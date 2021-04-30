import React, { useState } from "react";
import moment from "moment";

function TableRow(props) {
  const [highlight, setHighlight] = useState(false);

  function highlightRow() {
    setHighlight(!highlight);
  }

  return (
    <tr className={highlight ? "highlighted" : " "} onClick={highlightRow}>
      <td>{props.row.id}</td>
      <td>{props.row.title}</td>
      <td>{props.row.firstName}</td>
      <td>{props.row.surname}</td>
      <td>{props.row.email}</td>
      <td>{props.row.roomId}</td>
      <td>{props.row.checkInDate}</td>
      <td>{props.row.checkOutDate}</td>
      <td>
        {moment(props.checkOutDate).diff(moment(props.checkInDate), "days")}
      </td>
    </tr>
  );
}

export default TableRow;
