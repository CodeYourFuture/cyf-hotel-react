import React from "react";
import fakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const NumberOfNights = (dateIn, dateOut) => {
  let a = moment(dateIn);
  let b = moment(dateOut);
  return b.diff(a, "days");
};

const SearchResults = props => {
  return (
    <table className="table container">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In</th>
          <th scope="col">Check Out</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return (
            <tr key={result.id}>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>{NumberOfNights(result.checkInDate, result.checkOutDate)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
