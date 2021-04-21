import React from "react";
function SearchResults(props) {
  return (
    <table className="table table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">RoomID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>
      {props.results.map(book => (
        <tbody>
          <tr>
            <th scope="row">{book.id}</th>
            <td>{book.title}</td>
            <td>{book.firstName}</td>
            <td>{book.surname}</td>
            <td>{book.email}</td>
            <td>{book.roomId}</td>
            <td>{book.checkInDate}</td>
            <td>{book.checkOutDate}</td>
            <td>{book.roomId}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
export default SearchResults;
