import React, { useState } from "react";


import SingleBooking from "./SingleBooking";

const SearchResults = ({ results }) => {
  
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Number nights</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking) => (
            <SingleBooking key={booking.id} booking={booking} />
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default SearchResults;
