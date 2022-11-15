import React from "react";

const SearchResults = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">I.D.</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room I.D.</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">#1534</td>
            <td scope="row">Ms.</td>
            <td scope="row">Tilda</td>
            <td scope="row">Swinton</td>
            <td scope="row">tilda.swinton@thespian.com</td>
            <td scope="row">10</td>
            <td scope="row">15.11.22</td>
            <td scope="row">16.11.22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
