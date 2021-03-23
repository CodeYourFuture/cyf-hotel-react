import React, { useState } from "react";

const GuestsDetails = props => {
  const [highlight, setHighlight] = useState(props);
  const rowHighlighter = e => {
    if (e.target.parentElement.style.backgroundColor !== "crimson") {
      setHighlight((e.target.parentElement.style.backgroundColor = "crimson"));
    } else {
      return (e.target.parentElement.style.backgroundColor = "rgb(65, 80, 92)");
    }
  };
  return (
    <tbody className="table-body">
      {props.guests.map(guest => {
        const moment = require("moment");
        const checkIn = moment(guest.checkInDate);
        const checkOut = moment(guest.checkOutDate);
        const numberOfNights = checkOut.diff(checkIn, "days");
        return (
          <tr onClick={rowHighlighter} className={highlight}>
            <th className="t-body" scope="row">
              {guest.id}
            </th>
            <td className="t-body">{guest.title}</td>
            <td className="t-body">{guest.firstName}</td>
            <td className="t-body">{guest.surname}</td>
            <td className="t-body">{guest.email}</td>
            <td className="t-body">{guest.roomId}</td>
            <td className="t-body">{guest.checkInDate}</td>
            <td className="t-body">{guest.checkOutDate}</td>
            <td className="t-body">{numberOfNights + " "}nights</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default GuestsDetails;
