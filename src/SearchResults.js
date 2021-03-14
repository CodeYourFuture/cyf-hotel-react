import React from "react";

const TableHead = () => {
  return (
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Firstname</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room #</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
      </tr>
    </thead>
  );
};

const TableBody1 = () => {
  return (
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mr</td>
        <td>James</td>
        <td>Caine</td>
        <td>meg4u@yahoo.co.uk</td>
        <td>45</td>
        <td>13/03/21</td>
        <td>15/03/21</td>
      </tr>
    </tbody>
  );
};

const TableBody2 = () => {
  return (
    <tbody>
      <tr>
        <th scope="row">2</th>
        <td>Mr</td>
        <td>Patricia</td>
        <td>Okosun</td>
        <td>romana@yahoo.co.uk</td>
        <td>7</td>
        <td>12/03/21</td>
        <td>17/03/21</td>
      </tr>
    </tbody>
  );
};

const SearchResults = () => {
  return (
    <div>
      <table class="table">
        <TableHead />
        <TableBody1 />
        <TableBody2 />
      </table>
    </div>
  );
};

export default SearchResults;
