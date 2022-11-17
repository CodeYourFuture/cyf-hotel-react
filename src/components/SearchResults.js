import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>First name</th>
        <th>Surname</th>
        <th>Email Address</th>
        <th>Room id</th>
        <th>Check in date</th>
        <th>Check out date</th>
        <th>Number of nights</th>
      </tr>
      {props.results.map((booking, index) => {
        let inDate = moment(booking.checkInDate);
        let outDate = moment(booking.checkOutDate);
        let numOfNights = outDate.diff(inDate, "days"); // 1
        return (
          <tr key={index}>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>{numOfNights}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default SearchResults;
