import React from "react";
import FakeBookings from "./data/fakeBookings.json";

const SearchResults = () => {
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
          </tr>
        </thead>
        <tbody>
          {FakeBookings.map(e => {
            return (
              <tr>
                <th scope="row">{e.id}</th>
                <td>{e.title}</td>
                <td>{e.firstName}</td>
                <td>{e.surname}</td>
                <td>{e.email}</td>
                <td>{e.roomId}</td>
                <td>{e.checkInDate}</td>
                <td>{e.checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
