import React from "react";

function SearchResults() {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>01.12.2022</td>
          <td>08.12.2022</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>05.12.2022</td>
          <td>19.12.2022</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>Maiden</td>
          <td>07.12.2022</td>
          <td>05.01.2023</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Lory</td>
          <td>Grimes</td>
          <td>18.12.2022</td>
          <td>29.12.2022</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Fatih</td>
          <td>Celebi</td>
          <td>22.12.2022</td>
          <td>02.01.2023</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SearchResults;
