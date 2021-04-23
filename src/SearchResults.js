import React from "react";

const SearchResults = props => (
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">room id</th>
        <th scope="col">check in date</th>
        <th scope="col">check out date</th>
        {/* <th scope="col">nights booked</th> */}
      </tr>
    </thead>
    <tbody>
      {props.results.map(guestElem => (
        <tr>
          <td scope="row">{guestElem.id}</td>
          <td>{guestElem.title}</td>
          <td>{guestElem.firstName}</td>
          <td>{guestElem.surname}</td>
          <td>{guestElem.email}</td>
          <td>{guestElem.roomId}</td>
          <td>{guestElem.checkInDate}</td>
          <td>{guestElem.checkOutDate}</td>
          {/* <td>{moment().guestElem.checkOutDate.diff(guestElem.checkInDate)}</td> */}
        </tr>
      ))}
    </tbody>
  </table>
);

export default SearchResults;
