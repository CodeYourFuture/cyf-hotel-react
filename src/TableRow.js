import React, { useState } from "react";
import ProfileButton from "./ProfileButton";
import moment from "moment";

function TableRow({ booking, selectProfile }) {
  const [selected, setSelected] = useState(false);

  const selectRow = () => setSelected(!selected);

  return (
    <tr className={selected ? "table-light" : null} onClick={selectRow}>
      <th scope="row">{booking.id}</th>
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
        <ProfileButton id={booking.id} selectProfile={selectProfile} />
      </td>
    </tr>
  );
}

export default TableRow;
