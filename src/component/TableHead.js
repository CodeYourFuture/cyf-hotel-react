import React from "react";

const TableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room #</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Number of Night(s)</th>
      </tr>
    </thead>
  );
};

export default TableHead;
