import React, { useState, useEffect } from "react";
import SearchDetails from "./SearchDetails";
import Profile from "./Profile";

const SearchResults = props => {
  const [profileID, setProfileID] = useState(5);
  // const [newCustomers, setNewCustomers] = useState(props.list);
  const [sortAscending, setSortAscending] = useState(true);

  function handleClickProfile(clickedId) {
    setProfileID(clickedId);
  }

  const columnSort = col => {
    // alert(col)
    if (sortAscending) newCustomers.sort((a, b) => a[{ col }] - b[{ col }]);
    else newCustomers.sort((a, b) => b[{ col }] - a[{ col }]);
    setSortAscending(!sortAscending);
  };

  // useEffect(() => {
  //   setNewCustomers(newCustomers);
  // }, [sortAscending]);

  return (
    <div className="table-container">
      <table className="table table-sm">
        <thead className="table-header">
          <tr>
            <th onClick={() => columnSort("id")}>ID</th>
            <th onClick={() => columnSort("title")}>Title</th>
            <th onClick={() => columnSort("firstName")}>First Name</th>
            <th onClick={() => columnSort("surname")}>Surname</th>
            <th onClick={() => columnSort("email")}>Email</th>
            <th onClick={() => columnSort("roomId")}>Room ID</th>
            <th onClick={() => columnSort("checkInDate")}>CheckIn Date</th>
            <th onClick={() => columnSort("checkOutDate")}>CheckOut Date</th>
            <th>Number of Nights</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.list.map((obj, index) => {
            return (
              <SearchDetails
                key={index}
                bookings={obj}
                handleClick={handleClickProfile}
              />
            );
          })}
        </tbody>
      </table>
      {profileID && <Profile id={profileID} />}
    </div>
  );
};

export default SearchResults;
