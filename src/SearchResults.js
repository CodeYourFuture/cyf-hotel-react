import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">No. of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(
          ({
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          }) => {
            return (
              <tr>
                <th key={id} scope="row">
                  {id}
                </th>
                <td key={id}>{title}</td>
                <td key={id}>{firstName}</td>
                <td key={id}>{surname}</td>
                <td key={id}>{email}</td>
                <td key={id}>{roomId}</td>
                <td key={id}>{checkInDate}</td>
                <td key={id}>{checkOutDate}</td>
                <td key={id}>
                  {moment(checkOutDate).diff(checkInDate, "days")}
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
