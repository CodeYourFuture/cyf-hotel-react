import React from "react";
import FakeBookings from "./data/fakeBookings.json";
// import Bookings from "./Bookings";

const SearchResults = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check-in date</th>
          <th>Check-out date</th>
        </tr>
      </thead>

      <TableRow results={FakeBookings} />
    </table>
  );
};

const TableRow = props => {
  const resultsProp = props.results;

  console.log(resultsProp);
  return (
    <tbody>
      {resultsProp.map((result, index) => (
        <tr>
          <td>{result.id}</td>
          <td>{result.title}</td>
          <td>{result.firstName}</td>
          <td>{result.surname}</td>
          <td>{result.email}</td>
          <td>{result.roomId}</td>
          <td>{result.checkInDate}</td>
          <td>{result.checkOutDate}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default SearchResults;
