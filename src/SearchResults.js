import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-In</th>
            <th scope="col">Check-Out</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(booking => (
            <tr>
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
