import React from "react";
import moment from "moment";

// let numbersOfNights = (checkIn, checkOut) => {
//   let checkInDays = moment(checkIn);
//   let checkOutDays = moment(checkOut);
//   return checkOutDays.diff(checkInDays, "days");
// }

let headers = [
  "Id",
  "Title",
  "First Name",
  "Last Name",
  "Email",
  "Room Id",
  "Check In ",
  "Check Out ",
  "# Nights"
];

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          {/* <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In</th>
          <th scope="col">Check Out</th>
          <th scope="col">Nights</th> */}
          {headers.map(header => {
            return <th scope="col"> {header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((booking, index) => {
          let inDays = moment(booking.checkInDate);
          let outDays = moment(booking.checkOutDate);
          return (
            <tr key={index}>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.lastName}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{outDays.diff(inDays, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
