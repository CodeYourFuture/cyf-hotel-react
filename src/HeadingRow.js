import React from "react";

const HeadingRow = ({ sortBookings }) => {
  const columns = {
    id: "ID",
    title: "Title",
    firstName: "First Name",
    surname: "Surname",
    email: " Email",
    roomId: "Room ID",
    checkInDates: "Check-In-Date",
    checkOutDates: "Check-Out-Date",
    nightsSpent: "Number of Nights"
  };

  return (
    <tr>
      {Object.entries(columns).map(([key, value]) => (
        <th scope="col" key={key} title={key} onClick={sortBookings}>
          {value}
        </th>
      ))}
    </tr>
  );
};
export default HeadingRow;
