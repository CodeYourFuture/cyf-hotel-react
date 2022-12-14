import React, { useState } from "react";

{
  /*import Moment from "moment";*/
}

{
  /*function numberOfDays(checkIn, checkOut) {
  let date1 = moment(checkIn);
  let date2 = moment(checkOut);
  return date1.diff(date2, "days");
}*/
}

const [colour, setColour] = useState(false);

function handleRowColourChange() {
  return (
    <tr>
      onClick=
      {() => {
        setColour(() => !colour);
      }}
      ; style={{ backgroundColor: `${colour ? "pink" : "white"}` }}
    </tr>
  );
}

function SearchResults(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr onClick={handleRowColourChange}>
          <th scope="col">Number</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Number Of Days</th>
        </tr>
      </thead>
      {props.bookings.map(booking => {
        return (
          <tbody key={booking.id}>
            <tr>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td> {booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{booking.checkInDate}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default SearchResults;
