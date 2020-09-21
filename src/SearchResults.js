import React from "react";

export default function SearchResults() {
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name </th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Number</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check Out Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mr</td>
            <td>David</td>
            <td>Larry</td>
            <td>davidlarry@gmail.com</td>
            <td>216</td>
            <td>21/09/2020</td>
            <td>23/09/2020</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td />
          </tr>
          <tr>
            <th scope="row">3</th>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
