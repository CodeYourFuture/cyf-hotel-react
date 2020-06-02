import React, { useState } from "react";
import moment from "moment";

export default function SearchResult({ booking, index }) {
  const [clicked, setClicked] = useState(false);

  return (
    <tr
      onClick={() => setClicked(!clicked)}
      className={clicked ? "bg-warning" : ""}
    >
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {moment(booking.checkOutDate.split("-"), "YYYY/MM/DD").diff(
          moment(booking.checkInDate.split("-"), "YYYY/MM/DD"),
          "days"
        )}
      </td>
    </tr>
  );
}
