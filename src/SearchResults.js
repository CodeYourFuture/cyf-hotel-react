import moment from "moment";
import React from "react";

const SearchResults = props => (
  <table className="table table-striped">
    <thead>
      <tr className="bg-dark text-white">
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check In Date</th>
        <th scope="col">Check Out Date</th>
        <th scope="col">Number of nights stay</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map(guest => {
        console.log(moment(guest.checkInDate.date));
        return (
          <tr>
            <td>{guest.id}</td>
            <td>{guest.title}</td>
            <td>{guest.firstName}</td>
            <td>{guest.surname}</td>
            <td>{guest.email}</td>
            <td>{guest.roomId}</td>
            <td>{guest.checkInDate}</td>
            <td>{guest.checkOutDate}</td>
            <td>
              {moment(guest.checkOutDate).diff(
                moment(guest.checkInDate),
                "days"
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default SearchResults;
