/* eslint-disable indent*/

import React, { useState } from "react";
// import TableBody from "./TableBody";
import bookingData from "./data/fakeBookings.json";

function LengthOfStay(endDate, startDate) {
  const diff = new Date(endDate) - new Date(startDate);
  return Math.floor(diff / 86400000);
}

function SearchResults(props) {
  const [defaultcolor, setColor] = useState("");
  function updateColor(e) {
    e.currentTarget.style.background === "skyblue"
      ? (e.currentTarget.style.background = null)
      : (e.currentTarget.style.background = "skyblue");
  }
  return (
    <table className="table table-hover table-striped table-bordered ">
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

      {/* <TableBody data={bookingData} /> */}
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
            <tr onClick={updateColor} key={id}>
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
