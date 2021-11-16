import React from "react";

const SearchResults = props => {
  console.log("the whole object ", props.results[0]);
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
          </tr>
        </thead>
        <tbody>
          {props.results.map((person, i) => {
            return (
              <tr key={(person, i)}>
                <th scope="row">{i}</th>
                <td key={person.title}>{person.title}</td>
                <td key={person.firstName}>{person.firstName}</td>
                <td key={person.surname}>{person.surname}</td>
                <td key={person.email}>{person.email}</td>
                <td key={person.roomId}>{person.roomId}</td>
                <td key={person.checkInDate}>{person.checkInDate}</td>
                <td key={person.checkOutDate}>{person.checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
