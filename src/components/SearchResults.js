import React from "react";
import Moment from "react-moment";

export default function SearchResults({ results }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>
                <Moment format="DD-MM-YYYY">{booking.checkInDate}</Moment>
              </td>
              <td>
                <Moment format="DD-MM-YYYY">{booking.checkOutDate}</Moment>
              </td>
              <td>
                <Moment diff={booking.checkInDate} unit="days">
                  {booking.checkOutDate}
                </Moment>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
