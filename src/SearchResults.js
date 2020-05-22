import React from "react";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Room id</th>
          <th scope="col">Email</th>
          <th scope="col">days</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(data => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.fistName}</td>
            <td>{data.surname}</td>
            <td>{}</td>
            <td>{data.email}</td>
            <td>{data.roomId}</td>
            <td>{data.checkInDate}</td>
            <td>{data.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
