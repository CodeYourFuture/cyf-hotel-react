import React, { useState } from "react";
import moment from "moment";

export default function TableRow({ booking, setCustomerId, setShowProfile }) {
  const [selected, setSelected] = useState(false);
  return (
    <tr
      onClick={() => setSelected(!selected)}
      className={selected ? "selected-booking" : ""}
      style={{ backgroundColor: selected ? "#FFCCFF" : "#FFFF99" }}
    >
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")}</td>
      <button
        onClick={() => {
          setCustomerId(booking.id);
          setShowProfile(true);
        }}
      >
        Show profile
      </button>
    </tr>
  );
}
