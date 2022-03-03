import React from "react";

const SearchResults = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mr</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>m.otto@something.com</td>
          <td>1234</td>
          <td>1/1/2000</td>
          <td>5/1/2000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
