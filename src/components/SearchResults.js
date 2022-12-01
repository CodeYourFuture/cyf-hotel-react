import React from "react";

const SearchResults = props => {
  return (
    <table className="table">
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">first name</th>
        <th scope="col">surname</th>
        <th scope="col">email</th>
        <th scope="col">room id</th>
        <th scope="col">check in date</th>
        <th scope="col">check out date</th>
      </tr>
      {/* props.results => fakeBooking.json */}
      {props.results.map(result => (
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
    </table>
  );
};

export default SearchResults;
