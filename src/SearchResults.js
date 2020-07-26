import React from "react";
import moment from "moment";

const SearchResults = props => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">room</th>
        <th scope="col">check in date</th>
        <th scope="col">check out date</th>
        <th scope="col">nights</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map((result, index) => {
        return (
          <tr key={index}>
            <th scope="row"> {result.id}</th>
            <td> {result.title} </td>
            <td> {result.firstName} </td>
            <td> {result.surname} </td>
            <td> {result.email} </td>
            <td> {result.roomId} </td>
            <td> {result.checkInDate} </td>
            <td> {result.checkOutDate} </td>
            <td>
              {" "}
              {moment(result.checkOutDate).diff(
                moment(result.checkInDate),
                "days"
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default SearchResults;
