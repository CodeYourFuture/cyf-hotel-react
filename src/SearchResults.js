import React from "react";

let headers = [
  "Id",
  "Title",
  "First Name",
  "Last Name",
  "Email",
  "Room Id",
  "Check In Date",
  "Check Out Date",
  "# Nights"
];

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          {/* <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In</th>
          <th scope="col">Check Out</th>
          <th scope="col">Nights</th> */}
          {headers.map(header => {
            return <th scope="col"> {header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(
          (
            {
              id,
              title,
              firstName,
              lastName,
              email,
              roomId,
              checkIn,
              checkOut,
              nights
            },
            index
          ) => {
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkIn}</td>
                <td>{checkOut}</td>
                <td>{nights}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
