import React, { useState } from "react";
import moment from "moment";

function HighlightRow({ booking, i, handleButtonClick }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <tr
      key={i}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      style={isClicked ? { backgroundColor: "#66ff2e" } : {}}
    >
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {moment(booking.checkOutDate).diff(moment(booking.checkInDate), "days")}
      </td>
      <td>
        <button
          onClick={() => {
            handleButtonClick(booking.id);
          }}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
}

export default HighlightRow;
