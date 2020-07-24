import React, { useState } from "react";
import moment from "moment";

function TableRow({ result }) {
  const [highlight, setHighlight] = useState(false);

  function highlightRow() {
    setHighlight(!highlight);
  }
  const arrivalDate = moment(result.checkInDate, "YYYY-MM-DD");
  const departureDate = moment(result.checkOutDate, "YYYY-MM-DD");
  const numberOfNights = departureDate.diff(arrivalDate, "days");
  return (
    <tr
      className={highlight ? "highlight-row" : null}
      key={result.id}
      onClick={highlightRow}
    >
      <th scope="row">{result.id}</th>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>{numberOfNights}</td>
    </tr>
  );
}

export default TableRow;
