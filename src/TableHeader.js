import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check In Date</th>
        <th scope="col">Check Out Date</th>
        <th scope="col">Number Of Nights</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
