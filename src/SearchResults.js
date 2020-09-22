import React from "react";

export default function SearchResults(props) {
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E Mail</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>props.title</td>
            <td>props.firstName</td>
            <td>props.surname</td>
            <td>props.email</td>
            <td>props.roomId</td>
            <td>props.checkInDate</td>
            <td>props.checkOutDate</td>
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
