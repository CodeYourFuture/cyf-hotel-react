import React from "react";
import moment from "moment";

const Results = props => {
  const bookings = props.results.map(fakeBooking => {
    var a = moment(fakeBooking.checkInDate);
    var b = moment(fakeBooking.checkOutDate);
    return (
      <tr>
        <td>{fakeBooking.title}</td>
        <td>{fakeBooking.firstName}</td>
        <td>{fakeBooking.surname}</td>
        <td>{fakeBooking.email}</td>
        <td>{fakeBooking.roomId}</td>
        <td>{fakeBooking.checkInDate}</td>
        <td>{fakeBooking.checkOutDate}</td>
        <td>{b.diff(a, "days")}</td>
      </tr>
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of days</th>
        </tr>
      </thead>
      <tbody>{bookings}</tbody>
    </table>
  );
};
export default Results;
