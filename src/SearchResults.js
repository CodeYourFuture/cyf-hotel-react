import React from "react";
const SearchResults = props => {
  return (
    <table class="table mt-3 mb-2">
      <thead class="thead-dark">
        <tr>
          <th scope="col">title</th>
          <th scope="col">title</th>
          <th scope="col">first name </th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">No of nights</th>
        </tr>
      </thead>
      <tbody>
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
            <td>10</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
