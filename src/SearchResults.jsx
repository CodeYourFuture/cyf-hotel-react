import React from "react";

const SearchResults = props => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.results.map(info => (
          <tr>
            let a = info[checkInDate]; let b = info.checkOutDate;
            console.log(a.diff(b))
            <td>{info.id}</td>
            <td>{info.title}</td>
            <td>{info.firstName}</td>
            <td>{info.surname}</td>
            <td>{info.email}</td>
            <td>{info.roomId}</td>
            <td>{info.checkInDate}</td>
            <td>{info.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SearchResults;
