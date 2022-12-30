import React from "react";
import Moment from "react-moment";
import { useState } from "react";

const TableRow = ({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate,
  showProfile
}) => {
  const [color, setColor] = useState(false);

  function getProfile() {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        showProfile(data);
      });
  }

  return (
    <tr
      onClick={() => setColor(() => !color)}
      style={{ backgroundColor: `${color ? "grey" : "white"}` }}
    >
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>
        <Moment format="DD-MM-YYYY">{checkInDate}</Moment>
      </td>
      <td>
        <Moment format="DD-MM-YYYY">{checkOutDate}</Moment>
      </td>
      <td>
        <Moment diff={checkInDate} unit="days">
          {checkOutDate}
        </Moment>
      </td>
      <td>
        <button onClick={getProfile}>Show Profile</button>
      </td>
    </tr>
  );
};

export default TableRow;
