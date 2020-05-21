import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>

      {props.results.map((booking, index) => {
        const date1 = moment(booking.checkOutDate);
        const date2 = moment(booking.checkInDate);
        return (
          <tbody>
            <tr key={index}>
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstNam}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{date1.diff(date2, "days")}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

// //var a = moment([2007, 0, 29]);
// var b = moment([2007, 0, 28]);
// a.diff(b, 'days')
export default SearchResults;
