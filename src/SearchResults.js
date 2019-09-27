import React from "react";
var moment = require("moment");

const SearchResults = ({ results }) => {
  let bookingList = results.map(bookingObj => {
    return (
      <tr>
        <th scope="row">{bookingObj.id}</th>
        <td>{bookingObj.title}</td>
        <td>{bookingObj.firstName}</td>
        <td>{bookingObj.surname}</td>
        <td>{bookingObj.email}</td>
        <td>{bookingObj.roomId}</td>
        <td>{bookingObj.checkInDate}</td>
        <td>{bookingObj.checkOutDate}</td>
        <td>
          {moment(bookingObj.checkOutDate).diff(bookingObj.checkInDate, "days")}
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-striped table-bordered table-hover table-sm text-center">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check IN</th>
          <th scope="col">Check Out</th>
          <th scope="col">Day(s) Staying</th>
        </tr>
      </thead>
      <tbody>{bookingList}</tbody>
    </table>
  );
};

export default SearchResults;
