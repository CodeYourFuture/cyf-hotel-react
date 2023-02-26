import React from "react";
import moment from "moment/moment";

const SearchResults = (props) => {
  function calculateNights(firstDate, secondDate) {
    let first = moment(firstDate, "YYYY-MM-DD");
    let second = moment(secondDate, "YYYY-MM-DD");
    return second.diff(first, "days");
  }

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">EMAIL</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((guest) => (
          <tr key={guest.roomId}>
            <th scope="row">{guest.id}</th>
            <td>{guest.title}</td>
            <td>{guest.firstName}</td>
            <td>{guest.surname}</td>
            <td>{guest.email}</td>
            <td>{guest.roomId}</td>
            <td>{guest.checkInDate}</td>
            <td>{guest.checkOutDate}</td>
            <td>{calculateNights(guest.checkInDate, guest.checkOutDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
