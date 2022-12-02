import React from "react";

const SearchResults = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mr</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>motto@cyfhotel.com</td>
          <td>2000</td>
          <td>20221201</td>
          <td>20221215</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mr</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>jthornton@cyfhotel.com</td>
          <td>2008</td>
          <td>20221207</td>
          <td>20221222</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mr</td>
          <td>Larry</td>
          <td>Bird</td>
          <td>lbird@cyfhotel.com</td>
          <td>2022</td>
          <td>20221210</td>
          <td>20221227</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
