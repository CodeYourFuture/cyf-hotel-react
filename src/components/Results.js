import React from "react";
import moment from "moment";
function Results(props) {
  const fakeBookings = props.results.map(booking => {
    const checkInDate = moment(booking.checkInDate);
    const checkOutDate = moment(booking.checkOutDate);
    return (
      <tr key={booking.id}>
        <td>{booking.title}</td>
        <td>{booking.firstName}</td>
        <td>{booking.surname}</td>
        <td>{booking.email}</td>
        <td>{booking.roomId}</td>
        <td>{booking.checkInDate}</td>
        <td>{booking.checkOutDate}</td>
        <td>{checkOutDate.diff(checkInDate, "days")}</td>
      </tr>
    );
  });
  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room id</th>
            <th>Check in date</th>
            <th>Check out date</th>
            <th># Days</th>
          </tr>
          {fakeBookings}
        </tbody>
      </table>
    </div>
  );
}
export default Results;
