import React, { useState } from "react";
import Nights from "./Nights";
import CustomerProfile from "./CustomerProfile";

const SelectTable = props => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <tr className="te" onClick={toggle} className={clicked ? "select" : null}>
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
      <th>
        <button
          className="btn btn-primary"
          key={props.booking.id}
          onClick={() => {
            console.log(props.booking.id);
            props.setProfile(props.booking.id);
          }}
        >
          profile
        </button>
      </th>
    </tr>
  );
};
export default SelectTable;
