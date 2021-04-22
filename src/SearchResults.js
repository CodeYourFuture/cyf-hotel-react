import React from "react";

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((person, index) => (
            <tr key={index}>
              <td>{person.id}</td>
              <td>{person.title}</td>
              <td>{person.firstName}</td>
              <td>{person.surname}</td>
              <td>{person.email}</td>
              <td>{person.roomId}</td>
              <td>{person.checkInDate}</td>
              <td>{person.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
