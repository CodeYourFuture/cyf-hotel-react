import React from "react";

const SearchResults = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mr</td>
          <td>John</td>
          <td>Patterson</td>
          <td>@gmail.com</td>
          <td>1</td>
          <td>2023-05-05</td>
          <td>2023-05-15</td>
        </tr>
        <tr>
          <td>Ms</td>
          <td>Kate</td>
          <td>Wilson</td>
          <td>@gmail.com</td>
          <td>2</td>
          <td>2023-05-16</td>
          <td>2023-05-23</td>
        </tr>
        <tr>
          <td>Mrs</td>
          <td>Jessica</td>
          <td>Carr</td>
          <td>@gmail.com</td>
          <td>3</td>
          <td>2023-06-08</td>
          <td>2023-06-14</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
