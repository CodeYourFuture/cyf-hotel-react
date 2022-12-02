import React from "react";

const SearchResults = props => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(data => (
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
