import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [isActive, setIsActive] = useState();
  const changeRowColor = event => {
    // event.preventDefault();
    console.log(event.target, "target.id");
    setIsActive(!isActive);
  };

  return (
    <table className="table table-sm table-hover small">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((booking, i) => (
          <tr
            id={i}
            key={i}
            className={isActive ? "bg-primary" : ""}
            onClick={changeRowColor}
          >
            <td>{booking.id} </td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>
              {moment(booking.checkOutDate).diff(
                moment(booking.checkInDate),
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
