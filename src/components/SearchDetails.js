import React, { useState } from "react";
import moment from "moment";

const SearchDetails = ({ bookings, handleClick }) => {
  const [selected, setSelected] = useState(false);

  const highlightRow = e => {
    e.target.nodeName !== "A" && setSelected(!selected);
  };
  return (
    <tr className={selected ? "highlight" : ""} onClick={highlightRow}>
      <th key="row">{bookings.id}</th>
      <td>{bookings.title}</td>
      <td>{bookings.firstName}</td>
      <td>{bookings.surname}</td>
      <td>{bookings.email}</td>
      <td>{bookings.roomId}</td>
      <td>{bookings.checkInDate}</td>
      <td>{bookings.checkOutDate}</td>
      <td>
        {moment(bookings.checkOutDate).diff(
          moment(bookings.checkInDate),
          "day"
        )}
      </td>
      <td>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href="#collapseShowDetail"
          role="button"
          aria-expanded="false"
          aria-controls="collapseShowDetail"
          onClick={() => {
            handleClick(bookings.id);
          }}
        >
          Show Profile
        </a>
      </td>
    </tr>
  );
};

export default SearchDetails;
