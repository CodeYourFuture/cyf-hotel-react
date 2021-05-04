import React, { useState } from "react";
import moment from "moment";

function BookingRow(props) {
  const booking = props.info;
  const [selectedRow, setSelectedRow] = useState("true");
  let checkInDate = moment(booking.checkInDate);
  let checkOutDate = moment(booking.checkOutDate);
  const changeColor = () => setSelectedRow(selectedRow => !selectedRow);
  const handleClick = () => props.clicked(booking.id);
  return (
    <tr
      key={props.index}
      className={!selectedRow ? "table-active" : ""}
      onClick={changeColor}
    >
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{checkOutDate.diff(checkInDate, "days")}</td>
      <td>
        <button className="btn btn-primary" onClick={handleClick}>
          Show profile
        </button>
      </td>
    </tr>
  );
}

export default BookingRow;
