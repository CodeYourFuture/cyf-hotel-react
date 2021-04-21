import React from "react";

const SearchResults = ({ bookings }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(booking => {
          return (
            <tr>
              <th>{booking.title}</th>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
