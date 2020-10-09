import React from "react";

const TableHead = ({ sortBookings }) => {
  if (sortBookings) {
    const sortIt = e => {
      console.log(e.target.innerText);
      sortBookings(e.target.innerText);
    };
    return (
      <thead>
        <tr>
          <th className="sortHeader" scope="col" onClick={sortIt}>
            id
          </th>
          <th className="sortHeader" scope="col" onClick={sortIt}>
            Title
          </th>
          <th className="sortHeader" scope="col" onClick={sortIt}>
            First name
          </th>
          <th className="sortHeader" scope="col" onClick={sortIt}>
            Surname
          </th>
          <th className="sortHeader" scope="col" onClick={sortIt}>
            Email
          </th>
          <th className="sortHeader" scope="col" onClick={sortIt}>
            Room id
          </th>
          <th className="sortHeader" scope="col" onClick={sortIt}>
            Check in date
          </th>
          <th className="sortHeader" scope="col" onClick={sortIt}>
            Check out date
          </th>
          <th scope="col">Qty of nights</th>
        </tr>
      </thead>
    );
  } else {
    return (
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
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
  }
};

export default TableHead;
