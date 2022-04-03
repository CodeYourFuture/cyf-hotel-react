import React, { useState } from "react";

import TableCell from "./TableCell";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState();

  const changeCustomerId = id => {
    setCustomerId(id);
  };

  return (
    <div className="search-results">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room id</th>
            <th>Check in date</th>
            <th>Check out date</th>
            <th>Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(
            ({
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate
            }) => {
              return (
                <TableCell
                  key={id}
                  title={title}
                  firstName={firstName}
                  surname={surname}
                  email={email}
                  roomId={roomId}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  changeId={changeCustomerId}
                  clickId={id}
                />
              );
            }
          )}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
