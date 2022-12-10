import React from "react";

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

function SearchResults(props) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
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
      {props.fakeBookings.map(booking => {
        return (
          <tbody>
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
