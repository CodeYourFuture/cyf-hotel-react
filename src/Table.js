import React from "react";
import moment from "moment";

const Table = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">room</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((booking, index) => {
          return (
            <tr key={index}>
              <th scope="row"> {booking.id}</th>
              <td> {booking.title} </td>
              <td> {booking.firstName} </td>
              <td> {booking.surname} </td>
              <td> {booking.email} </td>
              <td> {booking.roomId} </td>
              <td> {booking.checkInDate} </td>
              <td> {booking.checkOutDate} </td>
              <td>
                {" "}
                {moment(booking.checkOutDate).diff(
                  moment(booking.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
