import React from "react";
const SearchResults = () => {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">title</th>
          <th scope="col">title</th>
          <th scope="col">first name </th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mr</td>
          <td>X</td>
          <td>Y</td>
          <td>XY@gmail.com</td>
          <td>1</td>
          <td>12/12/21</td>
          <td>15/12/21</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
