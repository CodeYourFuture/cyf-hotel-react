import React, { useState } from "react";
import moment from "moment";

const SearchTableRow = ({ booking }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <tr className={isSelected ? "bg-info" : null} onClick={handleClick}>
      <td id="id">{booking.id}</td>
      <td id="title">{booking.title}</td>
      <td id="fName">{booking.firstName}</td>
      <td id="sName">{booking.surname}</td>
      <td id="email">{booking.email}</td>
      <td id="roomNo">{booking.roomId}</td>
      <td id="chekIn">{booking.checkInDate}</td>
      <td id="checkOut">{booking.checkOutDate}</td>
      <td id="nights">
        {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
      </td>
    </tr>
  );
};

export default SearchTableRow;
