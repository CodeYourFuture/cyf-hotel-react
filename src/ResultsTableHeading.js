import React from "react";

// Render bookings table heading, called by `SearchResults.js`
const ResultsTableHeading = () => {
  return (
    <thead>
      <tr className="text-center">
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check In Date</th>
        <th scope="col">Check Out Date</th>
        <th scope="col">Staying</th>
      </tr>
    </thead>
  );
};

export default ResultsTableHeading;
