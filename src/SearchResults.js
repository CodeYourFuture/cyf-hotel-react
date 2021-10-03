import React from "react";
import moment from "moment";

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
          <th scope="col">Nights Stay</th>
        </tr>
      </thead>
      <tbody>
        {prop.results.map(element => {
          let a = moment(element.checkInDate);

          let b = moment(element.checkOutDate);

          let c = b.diff(a, "days");

          return (
            <tr>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.firstName}</td>

              <td>{element.surname}</td>

              <td> {element.email} </td>
              <td>{element.roomId}</td>

              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>

              <td>{c}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
