import { nanoid } from "nanoid";
import React from "react";
import "./App.css";

const SearchResults = (props) => {
  console.log(props.booking);
  const bookingsEntries = props.booking.map((booking) => {
    return (
      <tr key={nanoid()}>
        <th scope="row">{booking.id}</th>
        <td>{booking.title}</td>
        <td>{booking.firstName}</td>
        <td>{booking.surname}</td>
        <td>{booking.email}</td>
        <td>{booking.roomId}</td>
        <td>{booking.checkInDate}</td>
        <td>{booking.checkOutDate}</td>
      </tr>
    );
  });
  console.log(bookingsEntries);
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
          </tr>
        </thead>

        <tbody>{bookingsEntries}</tbody>
      </table>
    </>
  );
};

export default SearchResults;
