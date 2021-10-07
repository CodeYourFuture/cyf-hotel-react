import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <tr>
            <th scope="row">{result.id}</th>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>{moment(result.checkOutDate).diff(result.checkInDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
