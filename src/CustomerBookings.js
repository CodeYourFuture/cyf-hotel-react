import React, { useState } from "react";
import moment from "moment";
function CustomerBookings({ result }) {
  const [colour, setColour] = useState("");
  function highlightedColour() {
    if (colour === "") {
      setColour("colourPurple");
    } else if (colour === "colourPurple") {
      setColour("");
    }
  }
  return (
    <tr className={colour} onClick={highlightedColour} key={result.id}>
      <th scope="row">{result.id}</th>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>
        {moment(result.checkOutDate.replace(/"-"/g, ",")).diff(
          result.checkInDate.replace(/"-"/g, ","),
          "days"
        )}
      </td>
    </tr>
  );
}

export default CustomerBookings;
