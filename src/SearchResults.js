import React from "react";
import Moment from "react-moment";
import TableRow from "./TableRow";

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
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((row, index) => {
            return (
              <TableRow key={index} {...row} showProfile={props.showProfile} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
