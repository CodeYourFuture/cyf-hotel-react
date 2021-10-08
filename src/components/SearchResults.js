import React from "react";
import fakeBookings from "../data/fakeBookings.json";
import moment from "moment";

const itemsTitle = [
  <thead key={11} className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Room Number</th>
      <th scope="col">Check in</th>
      <th scope="col">Check Out</th>
      <th scope="col">Nights</th>
    </tr>
  </thead>
];

const SearchResultsBody = () => {
  return (
    <tbody>
      {fakeBookings.map(booking => {
        return (
          <tr key={booking.id}>
            <th scope="row">{booking.id}</th>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>
              {moment(booking.checkOutDate).diff(
                moment(booking.checkInDate),
                "days"
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

const SearchResults = () => {
  return (
    <table className="table">
      {itemsTitle}
      <SearchResultsBody />
    </table>
  );
};

export default SearchResults;
