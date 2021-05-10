import React, { useState, useEffect } from "react";

const TableHeading = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Title</th>
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Staying length</th>
        <th scope="col">Customer info</th>
      </tr>
    </thead>
  );
};

export default TableHeading;
