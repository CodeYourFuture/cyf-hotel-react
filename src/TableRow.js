import React, { useState } from "react";
const moment = require("moment");

const TableRow = props => {
  const booking = props.data;

  const checkOutDate = moment(booking.checkOutDate);
  const checkInDate = moment(booking.checkInDate);

  const [highlight, setHighlight] = useState(false);

  function handleClick() {
    setHighlight(!highlight);
  }

  return (
    <tr
      style={{ backgroundColor: highlight ? "lightgrey" : "white" }}
      onClick={handleClick}
    >
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{checkOutDate.diff(checkInDate, "days")}</td>
      <td>
        <button
          className="btn btn-info"
          onClick={() => props.handleClick(booking.id)}
        >
          profile
        </button>
      </td>
    </tr>
  );
};

export default TableRow;