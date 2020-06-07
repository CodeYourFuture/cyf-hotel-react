import React, { useState } from "react";
import Nights from "./Nights";

const SelectTable = props => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
  return (
    <tr onClick={toggle} className={clicked ? "select" : null}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>
        <Nights
          timeline={props.booking.checkInDate}
          timeout={props.booking.checkOutDate}
        />
      </td>
    </tr>
  );
};
export default SelectTable;
