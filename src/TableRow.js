import moment from "moment";
import React, { useState } from "react";

const TableRow = ({ booking }) => {
  const [highlightRow, setHighlightRow] = useState(false);

  const highlightSelection = () => {
    setHighlightRow(!highlightRow);
  };

  return (
    <tr
      onClick={highlightSelection}
      className={highlightRow ? "highlight-row" : ""}
    >
      <th scope="col">{booking.id}</th>
      <th scope="col">{booking.title}</th>
      <th scope="col">{booking.firstName}</th>
      <th scope="col">{booking.surname}</th>
      <th scope="col">{booking.email}</th>
      <th scope="col">{booking.roomId}</th>
      <th scope="col">{booking.checkInDate}</th>
      <th scope="col">{booking.checkOutDate}</th>
      <th scope="col">
        {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
      </th>
    </tr>
  );
};

export default TableRow;
