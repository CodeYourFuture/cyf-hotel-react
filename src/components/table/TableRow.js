import React, { useState } from "react";
import moment from "moment";

function TableRow({ customer, index }) {
  const [highlight, setHighlight] = useState(false);

  const highlightWhenClicked = () => {
    setHighlight(!highlight);
  };
  return (
    <tr
      key={index}
      onClick={highlightWhenClicked}
      className={highlight ? "table-row-highlight" : ""}
    >
      <th scope="row">{customer.id}</th>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
      <td>
        {moment(customer.checkOutDate).diff(
          moment(customer.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
}

export default TableRow;
