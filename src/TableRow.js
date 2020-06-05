import React, { useState } from "react";
import moment from "moment";

const Row = ({ booking }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelectedClass = () => {
    setSelected(!selected);
  };

  const checkIn = moment(props.booking.checkOutDate);
  const checkOut = moment(props.booking.checkInDate);
  return (
    <tr
      key={booking.id}
      onClick={toggleSelectedClass}
      className={selected ? "highlight" : null}
    >
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{checkIn.diff(checkOut, "days")}</td>
    </tr>
  );
};
export default Row;
