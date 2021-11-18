import React, { useState } from 'react'
import moment from 'moment';

function TableRows({booking, setCustomerId}) {
    const [selected, setSelected] = useState(false);
    const [rowClassName, setRowClassName] = useState("");
    const handleSelected = () => {
      const newSelected = !selected;
      setSelected(newSelected);
      if (newSelected) setRowClassName("rowSelected");
      else setRowClassName("");
    };
    const handleCustomerId = () => {
      setCustomerId(booking.id)
    }
    const checkOut = moment(booking.checkOutDate);
    const checkIn = moment(booking.checkInDate);
  return (
    <tr key={booking.id} onClick={handleSelected} className={rowClassName}>
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button className="btn btn-primary" onClick={handleCustomerId}>Show Profile</button>
      </td>
    </tr>
  );
}

export default TableRows
