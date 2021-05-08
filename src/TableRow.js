/* eslint-disable indent*/

import React, { useState } from "react";
function lengthOfStay(endDate, startDate) {
  const differenceInMilliseconds = new Date(endDate) - new Date(startDate);
  const millisecondsInOneDay = 24 * 3600 * 1000;
  return Math.floor(differenceInMilliseconds / millisecondsInOneDay);
}
function TableRow({ elem }) {
  const [isselectedrow, setSelectedrow] = useState(false);

  function highlight() {
    setSelectedrow(!isselectedrow);
  }
  return (
    <tr
      className={isselectedrow ? "highlight" : ""}
      onClick={highlight}
      key={elem.id}
    >
      <th scope="row">{elem.id}</th>
      <td>{elem.title}</td>
      <td>{elem.firstName}</td>
      <td>{elem.surname}</td>
      <td>{elem.email}</td>
      <td>{elem.roomId}</td>
      <td>{elem.checkInDate}</td>
      <td>{elem.checkOutDate}</td>
      <td>{lengthOfStay(elem.checkOutDate, elem.checkInDate)}</td>
    </tr>
  );
}

export default TableRow;
