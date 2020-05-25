import React from "react";

function SearchResults() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
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
            <td>Mr</td>
            <td>Hanif</td>
            <td>Abi</td>
            <td>h@gamail</td>
            <td>301</td>
            <td>2019</td>
            <td>2020</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mr</td>
            <td>Hanif</td>
            <td>Abi</td>
            <td>h@gamail</td>
            <td>301</td>
            <td>2019</td>
            <td>2020</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mr</td>
            <td>Hanif</td>
            <td>Abi</td>
            <td>h@gamail</td>
            <td>301</td>
            <td>2019</td>
            <td>2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
