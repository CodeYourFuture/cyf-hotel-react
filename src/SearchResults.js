import React from "react";

function SearchResults(props) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
        </tr>
      </thead>
      {props.results.map(item => {
        return (
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default SearchResults;
