import React from "react";

const SearchResults = () => {
  return (
    <table class="table results">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>123</td>
          <td>mr</td>
          <td>Ali</td>
          <td>NosratiPour</td>
          <td>Ali@yahoo.com</td>
          <td>R360</td>
          <td>1/04/2021</td>
          <td>10/04/2021</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>124</td>
          <td>mr</td>
          <td>Antony</td>
          <td>macDonald</td>
          <td>antony@yahoo.com</td>
          <td>R360</td>
          <td>11/04/2021</td>
          <td>19/04/2021</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
