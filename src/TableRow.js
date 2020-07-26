import React, { useState } from "react";
import moment from "moment";

function TableRow(props) {
  const [highlight, setHighlight] = useState(false);

  function highlightRow() {
    setHighlight(!highlight);
  }
  const arrivalDate = moment(props.result.checkInDate, "YYYY-MM-DD");
  const departureDate = moment(props.result.checkOutDate, "YYYY-MM-DD");
  const numberOfNights = departureDate.diff(arrivalDate, "days");
  return (
    <tr
      className={highlight ? "highlight-row" : null}
      key={props.result.id}
      onClick={highlightRow}
    >
      <th scope="row">{props.result.id}</th>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>{numberOfNights}</td>
      <td>
        <button className="btn btn-primary" onClick={props.handleProfileClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
