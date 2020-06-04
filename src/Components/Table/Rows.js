import React, { useState } from "react";
import moment from "moment";

const Rows = props => {
  const [select, setSelect] = useState(false);

  const selectRow = e => {
    console.log(e.target.value);
  };
  return (
    <tbody>
      {props.data.map(booking => {
        const checkIn = moment(booking.checkInDate);
        const checkOut = moment(booking.checkOutDate);
        return (
          <tr key={booking.id} value={booking.id} onClick={selectRow}>
            <th scope="row">{booking.id}</th>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td className="booking-days">{checkOut.diff(checkIn, "days")}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Rows;
