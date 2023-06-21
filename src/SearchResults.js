import React from "react";

const SearchResults = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((data) => {
          return (
            <tr>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.id}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
