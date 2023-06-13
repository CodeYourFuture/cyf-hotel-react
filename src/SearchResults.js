import React from "react";

const SearchResults = () => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
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
          <td>Morris</td>
          <td>mark.morris@gle.com</td>
          <td>25</td>
          <td>2023-05-02</td>
          <td>2023-05-10</td>
        </tr>
      </tbody>
    </table>
  );
};
export default SearchResults;
