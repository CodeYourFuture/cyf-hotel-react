import React, { useState } from "react";
import moment from "moment";
import "./App.css";

function SearchResultRow({ booking, showProfile }) {
  const [isRowSelected, setIsRowSelected] = useState(false);

  function handleRowClick(event) {
    if (event.target.getAttribute("name") !== "profile") {
      setIsRowSelected(!isRowSelected);
    }
  }

  function handleProfileClick(event) {
    if (event.target.getAttribute("name") === "profile") {
      showProfile(booking.id);
    }
  }

  return (
    <tr
      key={booking.id}
      className={isRowSelected ? "highlight" : null}
      onClick={handleRowClick}
    >
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {moment(booking.checkOutDate).diff(moment(booking.checkInDate), "day")}
      </td>
      <td>
        <button name="profile" onClick={handleProfileClick}>
          Show profile
        </button>
      </td>
    </tr>
  );
}

export default SearchResultRow;
