import React from "react";
import FakeBookings from "./data/fakeBookings.json";
// import Bookings from "./Bookings";

const SearchResults = props => {
  // const results = props.results;

  console.log(props);
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

//props is arr of objs
//each obj has properties x8 --> id, title, first name, surname, email, room id, check in date and check out date.
//Make new row for each obj
//each row has <td> x8 children
//each td elem

export default SearchResults;
