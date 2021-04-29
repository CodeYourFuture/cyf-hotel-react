import React from "react";
import RowTable from "./RowTable";
function SearchResults(props) {
  return (
    <table className="table table-hover">
      <thead className="thead-light">
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
      {props.results.map((book, index) => (
        <tbody key={"tbody" + index}>
          <RowTable book={book} />
        </tbody>
      ))}
    </table>
  );
}
export default SearchResults;
