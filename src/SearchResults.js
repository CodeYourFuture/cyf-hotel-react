import moment from "moment";
import React from "react";

const TableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room #</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Number of Night(s)</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  return (
    <tbody>
      {props.bookings.map((booking, index) => (
        <tr key={index}>
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
      ))}
    </tbody>
  );
};

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody bookings={props.results} />
      </table>
    </div>
  );
};

export default SearchResults;
