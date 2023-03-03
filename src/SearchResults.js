import React from "react";
const SearchResults = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Sure Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in</th>
          <th scope="col">Check out</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((value) => {
          return (
            <tr>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.firstName}</td>
              <td>{value.surname}</td>
              <td>{value.email}</td>
              <td>{value.roomId}</td>
              <td>{value.checkInDate}</td>
              <td>{value.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;