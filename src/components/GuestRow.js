import React, { useState } from "react";
import moment from "moment";

const GuestRow = ({ guest }) => {
  const [highlight, setHighlight] = useState(false);
  const Toggle = () => setHighlight(!highlight);

  return (
    <tr className={highlight ? "highlight-row" : null} onClick={Toggle}>
      <td>{guest.id}</td>
      <td>{guest.title}</td>
      <td>{guest.firstName}</td>
      <td>{guest.surname}</td>
      <td>{guest.email}</td>
      <td>{guest.roomId}</td>
      <td>{guest.checkInDate}</td>
      <td>{guest.checkOutDate}</td>
      <td>
        {moment(guest.checkOutDate).diff(moment(guest.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default GuestRow;
