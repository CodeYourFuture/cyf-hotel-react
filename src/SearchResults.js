import React from "react";
import TableRows from "./TableRows";

const SearchResults = props => {
  console.log(props.guests);
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.guests.map(guest => (
            <TableRows guest={guest} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
