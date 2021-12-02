import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import TableRow from "./TableRow";

const SearchResults = props => {
  const [profileToRender, setProfileToRender] = useState(0);

  const clickEvent = id => setProfileToRender(id);

  return (
    <div className="d-flex m-5 ">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Title</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Total Nights Stayed</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((person, index) => (
            <TableRow
              person={person}
              index={index}
              key={person.firstName}
              clickEvent={clickEvent}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile profileID={profileToRender} />
    </div>
  );
};

export default SearchResults;
