import React from "react";

const SearchResults = props => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">room id</th>
        <th scope="col">check in date</th>
        <th scope="col">check out date</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map(result => {
        return (
          <tr>
            <th scope="row"> {result.id}</th>
            <td> {result.title} </td>
            <td> {result.firstName} </td>
            <td> {result.surname} </td>
            <td> {result.email} </td>
            <td> {result.roomId} </td>
            <td> {result.checkInDate} </td>
            <td> {result.checkOutDate} </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default SearchResults;
