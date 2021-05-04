import React, { useState } from "react";
import moment from "moment";
// import CustomerProfile from "./CustomerProfile";

function TableRow(props) {
  const [highlight, setHighlight] = useState(false);

  function highlightRow() {
    setHighlight(!highlight);
  }

  function handleShowProfile() {
    props.selectCustomer(props.result.id);
  }

  return (
    <tr className={highlight ? "highlighted" : " "} onClick={highlightRow}>
      <td>{props.result.id}</td>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>
        {moment(props.checkOutDate).diff(moment(props.checkInDate), "days")}
      </td>
      <td>
        <button className="btn btn-info" onClick={handleShowProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
