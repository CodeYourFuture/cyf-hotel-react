import React, { useState } from "react";
import moment from "moment";

const SearchRow = ({ bookingRow }) => {
  console.log(bookingRow);
  const [clicked, setClicked] = useState("false");

  return (
    <tr
      onClick={() => setClicked(!clicked)}
      className={clicked ? "clicked" : "tr"}
    >
      <th scope="row">{bookingRow.id}</th>
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
    </tr>
  );
};

export default SearchRow;
