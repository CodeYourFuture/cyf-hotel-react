import React from "react";
import moment from "moment";

const SearchResults = props => {
  console.log(
    "Check in ",
    props.results[1].checkInDate,
    "Check out ",
    props.results[1].checkOutDate
  );

  console.log();

  return (
    <div id="table">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID </th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Total nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((person, index) => {
            return (
              <tr key={(person, index)}>
                <th scope="row">{index}</th>
                <td key={person.title}>{person.title}</td>
                <td key={person.firstName}>{person.firstName}</td>
                <td key={person.surname}>{person.surname}</td>
                <td key={person.email}>{person.email}</td>
                <td key={person.roomId}>{person.roomId}</td>
                <td key={person.checkInDate}>{person.checkInDate}</td>
                <td key={person.checkOutDate}>{person.checkOutDate}</td>
                <td key={person + " totalNights"}>
                  {moment(person.checkOutDate).diff(person.checkInDate, "days")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
