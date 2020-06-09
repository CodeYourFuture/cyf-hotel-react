import React, { useState } from "react";
import moment from "moment";

import "./App.css";

const TableRows = ({ user, handleProfileClick }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <tr
      onClick={handleClick}
      className={active ? "background-blue" : "background-white"}
    >
      <th scope="row">{user.id}</th>
      <td>{user.title}</td>
      <td>{user.firstName}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{user.roomId}</td>
      <td>{user.checkInDate}</td>
      <td>{user.checkOutDate}</td>
      <td>{moment(user.checkOutDate).diff(user.checkInDate, "days")} days</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => handleProfileClick(user.id)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default TableRows;
