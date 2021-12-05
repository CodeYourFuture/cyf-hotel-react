import React from "react";

function Thead() {
  return (
    <thead className="text-white text-center bg-secondary">
      <tr>
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
  );
}

export default Thead;
