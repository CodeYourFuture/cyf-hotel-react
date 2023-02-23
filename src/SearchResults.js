import React from "react";
import moment from "moment";
const SearchResults = props => (
  <div>
    <p>Results</p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room id</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">Total Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((info, i) => (
          <tr key={i}>
            <td>{info.id}</td>
            <td>{info.title}</td>
            <td>{info.firstName}</td>
            <td>{info.surname}</td>
            <td>{info.email}</td>
            <td>{info.roomId}</td>
            <td>{info.checkInDate}</td>
            <td>{info.checkOutDate}</td>
            <td>
              {moment(info.checkOutDate).diff(moment(info.checkInDate), "days")}{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SearchResults;
