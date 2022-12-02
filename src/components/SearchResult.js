import React, { useState } from "react";
import Moment from "react-moment";

export default function SearchResult({ i, booking }) {
  const [selected, setSelected] = useState("");

  return (
    <tr
      key={i}
      className={selected}
      onClick={() => {
        setSelected(selected ? "" : "selected");
      }}
    >
      <th scope="row">{i + 1}</th>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>
        <Moment format="DD-MM-YYYY">{booking.checkInDate}</Moment>
      </td>
      <td>
        <Moment format="DD-MM-YYYY">{booking.checkOutDate}</Moment>
      </td>
      <td>
        <Moment diff={booking.checkInDate} unit="days">
          {booking.checkOutDate}
        </Moment>
      </td>
    </tr>
  );
}
