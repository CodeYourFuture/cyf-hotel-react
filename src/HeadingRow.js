import React from "react";

const HeadingRow = ({ sortBookings }) => (
  <tr>
    <th scope="col">ID</th>
    <th scope="col" title="title" onClick={sortBookings}>
      Title
    </th>
    <th scope="col" title="firstName" onClick={sortBookings}>
      First name
    </th>
    <th scope="col" title="surname" onClick={sortBookings}>
      Surname
    </th>
    <th scope="col" title="email" onClick={sortBookings}>
      Email
    </th>
    <th scope="col" title="roomId" onClick={sortBookings}>
      Room ID
    </th>
    <th scope="col" title="checkInDate" onClick={sortBookings}>
      Check in date
    </th>
    <th scope="col" title="checkOutDate" onClick={sortBookings}>
      Check out date
    </th>
    <th scope="col"># of nights</th>
  </tr>
);

export default HeadingRow;
