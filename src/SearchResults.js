import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";
import moment from "moment";

const SearchResults = (props) => {
  const [switchMe, setSwitchMe] = useState("off");

  function handleClick() {
    if (switchMe === "off") {
      setSwitchMe("on");
    } else {
      setSwitchMe("off");
    }
  }
  const bookingsEntries = props.booking.map((booking) => {
    const start = moment(booking.checkInDate);
    const end = moment(booking.checkOutDate);
    const numberOfNights = end.diff(start, "days");

    return (
      <tr key={nanoid()} className={switchMe} onClick={handleClick}>
        <th scope="row">{booking.id}</th>
        <td>{booking.title}</td>
        <td>{booking.firstName}</td>
        <td>{booking.surname}</td>
        <td>{booking.email}</td>
        <td>{booking.roomId}</td>
        <td>{booking.checkInDate}</td>
        <td>{booking.checkOutDate}</td>
        <td>{numberOfNights}</td>
      </tr>
    );
  });
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
          </tr>
        </thead>

        <tbody>{bookingsEntries}</tbody>
      </table>
    </>
  );
};

export default SearchResults;
