import React from "react";
import data from "./data/fakeBookings.json";
const SearchResults = () => {
  console.log(data);
  return (
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of Night</th>
          </tr>
        </thead>
        <tbody>
          {data.map(value => {
            return (
              <tr>
                <th scope="row">{value.id}</th>
                <td>Mr</td>
                <td>{value.firstName}</td>
                <td>{value.surname}</td>
                <td>{value.email}</td>
                <td>{value.roomId}</td>
                <td>{value.checkInDate}</td>
                <td>{value.checkOutDate}</td>
                <td>{value.numberOfNight}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
