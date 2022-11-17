import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const GuestsDetails = props => {
  const [highlight, setHighlight] = useState(null);

  const rowHighlighter = e => {
    if (e.target.parentElement.style.backgroundColor !== "rgb(139, 157, 173)") {
      setHighlight(
        (e.target.parentElement.style.backgroundColor = "rgb(139, 157, 173)")
      );
    } else return (e.target.parentElement.style.backgroundColor = "aliceblue");
  };

  return (
    <tbody className="table-body">
      {props.guests.map(guest => {
        const moment = require("moment");
        const checkIn = moment(guest.checkInDate);
        const checkOut = moment(guest.checkOutDate);
        const numberOfNights = checkOut.diff(checkIn, "days");
        return (
          <tr key={guest.id} onClick={rowHighlighter} className={highlight}>
            {/* <th className="t-body" scope="row">
              {guest.id}
            </th> */}
            <th className="t-body" scope="row">
              {guest.title}
            </th>
            <td className="t-body">{guest.firstName}</td>
            <td className="t-body">{guest.surname}</td>
            <td className="t-body">{guest.email}</td>
            <td className="t-body">{guest.roomId}</td>
            <td className="t-body">{guest.checkInDate}</td>
            <td className="t-body">{guest.checkOutDate}</td>
            <td className="t-body">{numberOfNights + " "}nights</td>
            <td>
              <CustomerProfile id={guest.id} />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default GuestsDetails;
