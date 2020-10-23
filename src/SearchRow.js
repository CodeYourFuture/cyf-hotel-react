import React, { useState } from "react";
import moment from "moment";

const SearchRow = ({ bookingRow, setCustomerId }) => {
  console.log(bookingRow);
  const [clicked, setClicked] = useState("false");

  const handleShowProfile = () => {
    setCustomerId(bookingRow.id);
  };

  return (
    <tr
      key={bookingRow.id}
      onClick={() => setClicked(!clicked)}
      className={clicked ? "clicked" : "tr"}
    >
      <td>{bookingRow.id}</td>
      <td>{bookingRow.title}</td>
      <td>{bookingRow.firstName}</td>
      <td>{bookingRow.surname}</td>
      <td>{bookingRow.email}</td>
      <td>{bookingRow.roomId}</td>
      <td>{bookingRow.checkInDate}</td>
      <td>{bookingRow.checkOutDate}</td>
      <td>
        {moment(bookingRow.checkOutDate).diff(
          moment(bookingRow.checkInDate),
          "days"
        )}
      </td>

      <td>
        <button onClick={handleShowProfile}>Show profile</button>
      </td>
    </tr>
  );
};

export default SearchRow;
