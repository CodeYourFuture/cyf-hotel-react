import React from "react";

function SearchResults({ bookingsArray }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          {bookingsArray.map((booking) => {
            return (
              <tr>
                <td>{booking.id}</td>
                <td>{booking.title}</td>
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
    </>
  );
}

export default SearchResults;
