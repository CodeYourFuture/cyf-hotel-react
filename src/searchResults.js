import React from "react";
import moment from "moment";

export default function searchResults({ results }) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {results.map(detail => {
          var admission = moment(detail.checkInDate, "YYYY-MM-DD");
          var discharge = moment(detail.checkOutDate, "YYYY-MM-DD");

          return (
            <tr>
              <th scope="row">{detail.id}</th>
              <td>{detail.title}</td>
              <td>{detail.firstName}</td>
              <td>{detail.surname}</td>
              <td>{detail.email}</td>
              <td>{detail.roomId}</td>
              <td>{detail.checkInDate}</td>
              <td>{detail.checkOutDate}</td>
              <td>{discharge.diff(admission, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
