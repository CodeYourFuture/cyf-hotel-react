import React, { useState } from "react";
import moment from "moment";

const CustomRow = ({ booking, handleClick }) => {
  const [isClickedRow, setIsClickedRow] = useState(false);

  let checkInDate = moment(booking.checkInDate);
  let checkOutDate = moment(booking.checkOutDate);
  let daysStay = checkOutDate.diff(checkInDate, "days");

  return (
    <tr
      key={booking.id}
      onClick={() => {
        setIsClickedRow(!isClickedRow);
      }}
      style={{ backgroundColor: isClickedRow ? "green" : "" }}
    >
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{daysStay}</td>
      <button
        className="btn btn-warning btn-sm"
        onClick={event => {
          handleClick(event, booking.id);
        }}
      >
        Show Profile
      </button>
    </tr>
  );
};

export default CustomRow;
