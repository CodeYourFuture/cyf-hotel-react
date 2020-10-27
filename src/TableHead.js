import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col ">id</th>
        <th scope="col ">Title</th>
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Qty of nights</th>
      </tr>
    </thead>
  );
};

export default TableHead;
