import React from "react";

const Results = props => {
  const fakeBookings = props.results.map(booking => {
    return (
      <tr>
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

  return (
    <div className="container">
      <table className="table">
        <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room id</th>
          <th>Check in date</th>
          <th>Check out date</th>
        </tr>
        {fakeBookings}
      </table>
    </div>
  );
};

export default Results;
