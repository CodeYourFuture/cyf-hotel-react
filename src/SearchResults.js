import React from "react";

const SearchResults = props => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(el => (
            <tr>
              <th scope="row">{el.id}</th>
              <td>{el.title}</td>
              <td>{el.firstName}</td>
              <td>{el.surname}</td>
              <td>{el.email}</td>
              <td>{el.roomId}</td>
              <td>{el.checkInDate}</td>
              <td>{el.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
