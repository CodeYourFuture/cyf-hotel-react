import React from "react";
const SearchResults = prop => {
  return (
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">RoomId</th>
          <th scope="col">CheckInDate</th>
          <th scope="col">CheckOutDate</th>
        </tr>
      </thead>
      <tbody>
        {prop.results.map(element => {
          return (
            <tr>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.firstName}</td>

              <td>{element.lastName}</td>

              <td> {element.email} </td>
              <td>{element.roomId}</td>

              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
