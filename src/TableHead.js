import React from "react";

const TableHead = ({ handleClick }) => {
  return (
    <thead>
      <tr>
        <th scope="col" onClick={() => handleClick("title")}>
          Title
        </th>
        <th scope="col" onClick={() => handleClick("firstName")}>
          First name
        </th>
        <th scope="col" onClick={() => handleClick("surname")}>
          Surname
        </th>
        <th scope="col" onClick={() => handleClick("email")}>
          Email
        </th>
        <th scope="col" onClick={() => handleClick("roomId")}>
          Room id
        </th>
        <th scope="col" onClick={() => handleClick("checkInDate")}>
          Check in date
        </th>
        <th scope="col" onClick={() => handleClick("checkOutDate")}>
          Check out date
        </th>
        <th scope="col" onClick={() => handleClick("numberOfNights")}>
          Number of nights
        </th>
        <th scope="col">Profile</th>
      </tr>
    </thead>
  );
};

export default TableHead;
