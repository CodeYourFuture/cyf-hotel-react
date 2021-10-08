import React from "react";
import moment from "moment";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check In</th>
        <th scope="col">Check Out</th>
        <th scope="col"> number of nights</th>
      </tr>
    </thead>
  );
};

const SearchResults = props => {
  return (
    <table className="table">
      <TableHeader />
      <tbody>
        {props.results.map((result, index) => (
          <tr key={index}>
            <th scope="row">{result.id}</th>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>
              {moment(result.checkOutDate).diff(
                moment(result.checkInDate),
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
