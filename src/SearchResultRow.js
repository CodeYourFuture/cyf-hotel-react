import React, { useState } from "react";
import moment from "moment";

function SearchResultRow({ booking }) {
  const [isRowSelected, SetIsRowSelected] = useState();

  const handleClick = (rowId) => {
    SetIsRowSelected(!isRowSelected);
  };

  let rowStyle = {};

  if (isRowSelected) {
    rowStyle = { backgroundColor: "green" };
  }

  return (
    <tr onClick={handleClick} style={rowStyle} key={booking.id}>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")} </td>
    </tr>
  );
}

export default SearchResultRow;
