import React from "react";
import moment from "moment";

import { useState } from "react";

function TableRow({ booking, getProfileId }) {
  let [selected, setSelected] = useState(false);
  let handleClick = () => setSelected(!selected);
  let handleProfile = () => getProfileId(booking.id);

  return (
    <tr className={selected ? "color" : null} onClick={handleClick}>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {moment(booking.checkOutDate).diff(moment(booking.checkInDate), "days")}
      </td>
      <td>
        <button onClick={handleProfile}>Show profile</button>
      </td>
    </tr>
  );
}

export default TableRow;
