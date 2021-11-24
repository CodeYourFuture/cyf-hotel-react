import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table table-striped table-hover my-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Title</th>
          <th scope="col">Email</th>
          <th scope="col">Room</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Total Nights Stayed</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((person, index) => (
          <tr key={person.firstName}>
            <td>{index}</td>
            <td>{person.firstName}</td>
            <td>{person.surname}</td>
            <td>{person.surname}</td>
            <td>{person.email}</td>
            <td>{person.roomId}</td>
            <td>{person.checkInDate}</td>
            <td>{person.checkOutDate}</td>
            <td>
              {moment(person.checkOutDate).diff(person.checkInDate, "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
