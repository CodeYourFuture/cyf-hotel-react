import React from "react";
import moment from "moment";
const SearchResults = ({ searchReslt }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Nights</th>
      </tr>
    </thead>
    <tbody>
      {searchReslt.map(booking => (
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

export default SearchResults;
