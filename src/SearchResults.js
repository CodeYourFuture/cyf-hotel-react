import React, { useState } from "react";
import moment from "moment";
import TableClick from "./TableClick";

const SearchResults = props => {
  function calculateDuration(checkOutDate, checkInDate) {
    return moment(checkOutDate.toString()).diff(
      moment(checkInDate.toString()),
      "days"
    );
  }

  const [userClick, setUserClick] = useState(null);

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room</th>
          <th>Check In</th>
          <th>Check out</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return (
            <TableClick
              key={result.id}
              isUserClick={userClick === result.id}
              setUserClick={setUserClick}
              result={result}
              calculateDuration={calculateDuration}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
