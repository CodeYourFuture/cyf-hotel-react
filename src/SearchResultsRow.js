import React, { useState } from "react";
import moment from "moment";

const SearchResultsRow = ({ booking, onShowProfile }) => {
  const [selected, setSelected] = useState(false);
  const toggleSelectHighlight = () => {
    setSelected(!selected);
  };
  const onShowProfileClick = event => {
    event.stopPropagation();
    onShowProfile(booking.id);
  };
  return (
    <tr
      onClick={toggleSelectHighlight}
      className={selected ? "highlighted" : ""}
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
        {moment(booking.checkOutDate.replace(/"-"/g, ",")).diff(
          booking.checkInDate.replace(/"-"/g, ","),
          "days"
        )}
      </td>
      <td>
        <button className="btn btn-primary" onClick={onShowProfileClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResultsRow;
