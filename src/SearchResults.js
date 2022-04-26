import React, { useState, useEffect } from "react";
import CustomRow from "./CustomRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [id, setId] = useState(null);

  function handleShowProfileButton(event, clickedId) {
    event.stopPropagation();
    setId(clickedId);
  }

  return (
    <div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">daysStay</th>
            <th scope="col">showProfile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(booking => {
            return (
              <CustomRow
                booking={booking}
                handleClick={handleShowProfileButton}
              />
            );
          })}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
    </div>
  );
};

export default SearchResults;
