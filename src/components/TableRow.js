import React, { useState } from "react";
import moment from "moment";
// import CustomerProfile from "./CustomerProfile";

const TableRow = ({ customer, getProfileId, id }) => {
  const [highlightRow, setHighlightRow] = useState("");
  function highlightSelectedRow() {
    if (highlightRow === "") {
      setHighlightRow("tableRow");
    } else {
      setHighlightRow("");
    }
  }
  return (
    <tr className={highlightRow} onClick={highlightSelectedRow}>
      <td>{customer.id}</td>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
      <td>
        {calculateDuration(customer.checkInDate, customer.checkOutDate)} day(s)
      </td>
      <th>
        <button
          className="customerProfile"
          onClick={() => getProfileId(customer.id)}
        >
          Show Profile
        </button>
      </th>
    </tr>
  );
};

function calculateDuration(checkInDate, checkOutDate) {
  let checkInDay = moment(checkInDate);
  let checkOutDay = moment(checkOutDate);
  return checkOutDay.diff(checkInDay, "days");
}

export default TableRow;
