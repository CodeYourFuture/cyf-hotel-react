import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

function CustomerData(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(prevState => !prevState);
  }

  function handleChange() {
    props.onClick(props.id);
  }

  return (
    <tr onClick={handleClick} className={isClicked ? "highlight" : ""}>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{props.nights}</td>
      <td>
        <button className="btn btn-primary" onClick={handleChange}>
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default CustomerData;
