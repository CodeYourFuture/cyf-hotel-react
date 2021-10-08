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
          <th scope="col">Check In</th>
          <th scope="col">Check Out</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">1</th>
          <td> Mr </td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>120</td>
          <td>2017-11-21</td>
          <td>2017-11-21</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td> Mr </td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>150</td>
          <td>2017-11-21</td>
          <td>2017-11-21</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td> Mr </td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>90</td>
          <td>2017-11-21</td>
          <td>2017-11-21</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td> Mr </td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>200</td>
          <td>2017-11-21</td>
          <td>2017-11-21</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
