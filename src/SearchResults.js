import React from "react";
const moment = require("moment");

const numberOfNights = (dayIn, dayOut) => {
  const dayInToMoment = moment(dayIn);
  const dayOutToMoment = moment(dayOut);
  return dayOutToMoment.diff(dayInToMoment, "days");
};

const SearchResult = props => {
  console.log(props.results, "props");
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, i) => (
          <tr>
            <th scope="row">{i + 1}</th>
            <td>{booking.title} </td>
            <td>{booking.firstName} </td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td> {booking.checkOutDate}</td>
            <td>{numberOfNights(booking.checkInDate, booking.checkOutDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResult;
