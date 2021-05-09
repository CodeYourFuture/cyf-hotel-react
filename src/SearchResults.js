import React from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">No. of Nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => {
            return <TableRow booking={booking} key={index} />;
          })}
        </tbody>
      </table>
      <CustomerProfile />
    </div>
  );
};

export default SearchResults;
