import React from "react";

const SearchResults = props => {
  return (
    <table>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>first name</th>
        <th>surname</th>
        <th>email</th>
        <th>room id</th>
        <th>check in date</th>
        <th>check out date</th>
      </tr>
      {props.results.map((booking, index) => {
        return (
          <tr key={index}>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.heckOutDate}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default SearchResults;
