import React from "react";

const SearchResults = () => {
  /*Table added added to website using JSX */
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mr</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>17/04/2020</td>
            <td>21/04/2020</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mr</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>2</td>
            <td>12/05/2020</td>
            <td>19/05/2020</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mr</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>3</td>
            <td>21/05/2020</td>
            <td>25/05/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
