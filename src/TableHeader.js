import React from "react";
const TableHeader = () => {
  return (
    <thead>
      <tr className="table-header">
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room-ID</th>
        <th scope="col">Check-In Date</th>
        <th scope="col">Check-Out Date</th>
        <th scope="col">Total Number of Nights</th>
        <th>Visit Customer Profile</th>
      </tr>
    </thead>
  );
};
export default TableHeader;
