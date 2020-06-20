import React, { useState } from "react";
import moment from "moment";
import TableClick from "./TableClick";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  function calculateDuration(checkOutDate, checkInDate) {
    return moment(checkOutDate.toString()).diff(
      moment(checkInDate.toString()),
      "days"
    );
  }

  const [userClick, setUserClick] = useState(null);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th onClick={props.sortById}>ID</th>
            <th onClick={props.sortByTitle}>Title</th>
            <th onClick={props.sortByFirstName}>First Name</th>
            <th onClick={props.sortBySurname}>Last Name</th>
            <th onClick={props.sortByEmail}>Email</th>
            <th onClick={props.sortByRoomId}>Room</th>
            <th onClick={props.sortByDateIn}>Check In</th>
            <th onClick={props.sortByDateOut}>Check out</th>
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
      <div>{userClick}</div>
      <CustomerProfile userClick={userClick} />
    </div>
  );
};

export default SearchResults;
