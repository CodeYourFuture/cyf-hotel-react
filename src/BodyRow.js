import React, { useState, useEffect } from "react";
import moment from "moment";

const BodyRow = ({ content, setCustomerId, sortBookings }) => {
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
      <td title="title" onClick={sortBookings}>
        {content.title}
      </td>
      <td title="firstName" onClick={sortBookings}>
        {content.firstName}
      </td>
      <td title="surname" onClick={sortBookings}>
        {content.surname}
      </td>
      <td title="email" onClick={sortBookings}>
        {content.email}
      </td>
      <td title="roomId" onClick={sortBookings}>
        {content.roomId}
      </td>
      <td title="checkInDate" onClick={sortBookings}>
        {content.checkInDate}
      </td>
      <td title="checkOutDate" onClick={sortBookings}>
        {content.checkOutDate}
      </td>
      <td title="numOfNight" onClick={sortBookings}>
        {moment(content.checkOutDate).diff(content.checkInDate, "days")}
      </td>
      <td>
        <button className="btn btn-primary" onClick={handleShowProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};
export default BodyRow;
