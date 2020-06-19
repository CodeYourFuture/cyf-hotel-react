import React, { useState } from "react";
import Nights from "./Nights";

const SelectTable = ({ booking, key, setProfile }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <tr className="te" onClick={toggle} className={clicked ? "select" : null}>
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        <Nights timeline={booking.checkInDate} timeout={booking.checkOutDate} />
      </td>
      <th>
        <button
          className="btn btn-primary"
          key={booking.id}
          onClick={() => {
            console.log(booking.id);
            setProfile(booking.id);
          }}
        >
          profile
        </button>
      </th>
    </tr>
  );
};

export default SelectTable;
