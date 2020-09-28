import React, { Fragment } from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const SearchResults = () => {
  return (
    <table className="table table-striped">
      <TableHead />
      <TableBody results={FakeBookings} />
    </table>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Room Id</th>
        <th scope="col">Check In Date</th>
        <th scope="col">Check Out Date</th>
        <th scope="col">No of Nights Stayed</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ results }) => {
  return (
    <Fragment>
      <tbody>
        {results.map(booking => (
          <tr>
            <th scope="row" key={booking.id}>
              {booking.id}
            </th>
            <td key={booking.title}>{booking.title}</td>
            <td key={booking.firstName}>{booking.firstName}</td>
            <td key={booking.surname}>{booking.surname}</td>
            <th key={booking.email}>{booking.email}</th>
            <td key={booking.roomId}>{booking.roomId}</td>
            <td key={booking.checkInDate}>{booking.checkInDate}</td>
            <td key={booking.checkOutDate}>{booking.checkOutDate}</td>
            <td>
              {moment(booking.checkOutDate).diff(
                moment(booking.checkInDate),
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
};

export default SearchResults;
