import React, { useState, useEffect } from "react";
import moment from "moment";

const BodyRow = ({ content, setCustomerId }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleShowProfile = () => {
    console.log(content.id);
    setCustomerId(content.id);
  };

  return (
    <tr onClick={handleClick} className={isSelected ? "selected" : null}>
      <th scope="row">{content.id}</th>
      <td>{content.title}</td>
      <td>{content.firstName}</td>
      <td>{content.surname}</td>
      <td>{content.email}</td>
      <td>{content.roomId}</td>
      <td>{content.checkInDate}</td>
      <td>{content.checkOutDate}</td>
      <td>{moment(content.checkOutDate).diff(content.checkInDate, "days")}</td>
      <td>
        <button className="btn btn-primary" onClick={handleShowProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};
export default BodyRow;
