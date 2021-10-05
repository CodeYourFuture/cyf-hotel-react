import React from "react";
import "./ResultsTableHeading.css";

// Render bookings table heading, called by `SearchResults.js`.
const ResultsTableHeading = () => {
  return (
    <thead>
      <tr className="text-center ResultsTableHeading-tr">
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check In Date</th>
        <th scope="col">Check Out Date</th>
        <th scope="col">Stay Length</th>
      </tr>
    </thead>
  );
};

export default ResultsTableHeading;
