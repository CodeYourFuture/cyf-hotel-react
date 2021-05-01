/* eslint-disable indent*/
import React, { useState } from "react";

import bookingData from "./data/fakeBookings.json";
function LengthOfStay(endDate, startDate) {
  const diff = new Date(endDate) - new Date(startDate);
  return Math.floor(diff / 86400000);
}
function SearchResults(props) {
  const [selectedrow, setSelectedrow] = useState(0);
  // trying out toggling
  // const [isHighlighted, setHighlight] = useState(false);

  function changeColor(id) {
    setSelectedrow(id);
  }

  return (
    <table className="table   table-bordered ">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">#Night stayed</th>
        </tr>
      </thead>

      <tbody>
        {props.data.map(
          ({
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          }) => (
            <tr
              onClick={() => changeColor(id)}
              key={id}
              className={selectedrow === id && "highlight"}
            >
              <th scope="row">{id}</th>
              <td>{title}</td>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>{LengthOfStay(checkOutDate, checkInDate)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
export default SearchResults;
