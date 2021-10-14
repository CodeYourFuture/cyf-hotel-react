import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ customer }) => {
  const [highlight, setHighlight] = useState("");
  function highlightSelectedRow() {
    if (highlight === "") {
      setHighlight("tableRow");
    } else {
      setHighlight("");
    }
  }
  return (
    <tr className={highlight} onClick={highlightSelectedRow}>
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
    </tr>
  );
};

function calculateDuration(checkInDate, checkOutDate) {
  let checkInDay = moment(checkInDate);
  let checkOutDay = moment(checkOutDate);
  return checkOutDay.diff(checkInDay, "days");
}

export default TableRow;
