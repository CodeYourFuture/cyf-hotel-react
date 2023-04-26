import React, { useState } from "react";
import ResultRow from "./ResultRow";
import CustomerProfile from "./CustomerProfile";


const SearchResults = (props) => {
  const ourObject = props.results;
const myBookings = props.bookings;
  return (
    <div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {myBookings.map((result) => (
            <ResultRow
              key={result.id}
              result={result}
              id={props.id}
              setID={props.setID}
            />
          ))}
        </tbody>
      </table>
      {/* {ourObject.some((profile) => profile.id === props.id) ? (
        <CustomerProfile id={props.id} />
      ) : null} */}
    </div>
  );
};

export default SearchResults;
