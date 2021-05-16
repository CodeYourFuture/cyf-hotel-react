/* eslint-disable indent*/

import React, { useState } from "react";
function lengthOfStay(endDate, startDate) {
  const differenceInMilliseconds = new Date(endDate) - new Date(startDate);
  const millisecondsInOneDay = 24 * 3600 * 1000;
  return Math.floor(differenceInMilliseconds / millisecondsInOneDay);
}
function TableRow({ elem }) {
  const [isselectedrow, setSelectedrow] = useState(false);
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = elem;
  function highlight() {
    setSelectedrow(!isselectedrow);
  }
  return (
    <tr
      className={isselectedrow ? "highlight" : ""}
      onClick={highlight}
      key={id}
    >
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{lengthOfStay(checkOutDate, checkInDate)}</td>
    </tr>
  );
}

export default TableRow;
