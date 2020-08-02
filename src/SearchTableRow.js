import React, { useState } from "react";
import moment from "moment";

const SearchTableRow = ({ booking, selectId, sortList }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleProfile = id => {
    selectId(id);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  sortList = booking => {
    console.log(booking.email);
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
      <td id="profile">
        <button
          onClick={() => handleProfile(booking.id)}
          className="btn btn-dark btn-sm"
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default SearchTableRow;
