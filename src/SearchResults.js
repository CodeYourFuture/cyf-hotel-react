import React from "react";

const SearchResults = () => {
  return (
    <table class="table table-striped">
      <TableHead />
      <TableBody />
    </table>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Room Id</th>
        <th scope="col">Check In Date</th>
        <th scope="col">Check Out Date</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mr</td>
        <td>Mark</td>
        <td>Otto</td>
        <th>@mdo</th>
        <td>1021</td>
        <td>21/02/20</td>
        <td>21/02/20</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Mr</td>
        <td>Jacob</td>
        <td>Wilson-Sey</td>
        <th>@mdoom</th>
        <td>1024</td>
        <td>21/02/20</td>
        <td>21/02/20</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Mr</td>
        <td>Oswald</td>
        <td>Barking</td>
        <th>@thty</th>
        <td>1035</td>
        <td>23/02/20</td>
        <td>28/02/20</td>
      </tr>
    </tbody>
  );
};

export default SearchResults;
