import React, { useState } from "react";
import moment from "moment";

const SearchResultsRow = ({ booking }) => {
  let [selected, setSelected] = useState(false);
  const toggleSelect = () => {
    setSelected(!selected);
  };
  return (
    <tr onClick={toggleSelect} className={selected ? "highlighted" : ""}>
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {moment(booking.checkOutDate.replace(/"-"/g, ",")).diff(
          booking.checkInDate.replace(/"-"/g, ","),
          "days"
        )}
      </td>
    </tr>
  );
};

export default SearchResultsRow;
