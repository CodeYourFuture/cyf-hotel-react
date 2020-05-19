import React from "react";

const SearchResults = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check In date</th>
          <th scope="col">Check Out date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mr.</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>110</td>
          <td>01/01/2020</td>
          <td>17/01/2020</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mr.</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>220</td>
          <td>05/02/2020</td>
          <td>12/02/2020</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mr.</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>330</td>
          <td>03/03/2020</td>
          <td>04/04/2020</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
