import React from "react";
import TableRow from "./TableBodyRow";

const SearchResults = ({ reservations }) => {
  return (
    <div className="table-wrapper">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
            <th scope="col">Nights Staying</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, ind) => (
            <TableRow key={ind} reservation={reservation} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
