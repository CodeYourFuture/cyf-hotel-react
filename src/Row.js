import React, { useState } from "react";
import moment from "moment";

const Row = ({ results }) => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(clicked => !clicked);
  }

  let checkIn = moment(results.checkInDate);
  let checkOut = moment(results.checkOutDate);

  return (
    <tr onClick={handleClick} className={clicked ? "highlight" : ""}>
      <th scope="row">{results.id}</th>
      <td>{results.title}</td>
      <td>{results.firstName}</td>
      <td>{results.surname}</td>
      <td>{results.email}</td>
      <td>{results.roomId}</td>
      <td>{results.checkInDate}</td>
      <td>{results.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
    </tr>
  );
};

export default Row;
