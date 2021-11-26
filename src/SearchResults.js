import React, { useState } from "react";

const SearchResults = prop => {
  const [rowColour, setRowColour] = useState([]);
  const highlight = id => {
    const selectedRow = [...rowColour];
    if (selectedRow.includes(id)) {
      const index = selectedRow.indexOf(id);
      selectedRow.splice(index, 1);
      setRowColour(selectedRow);
    } else {
      selectedRow.push(id);
      setRowColour(selectedRow);
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in date</th>
          <th scope="col">Check-out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {prop.results.map((booking, ind) => {
          const d1 = new Date(booking.checkOutDate);
          const d2 = new Date(booking.checkInDate);

          return (
            <tr
              className={rowColour.includes(booking.id) ? "lightColour" : ""}
              onClick={e => {
                highlight(booking.id);
              }}
              key={ind}
            >
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{Math.abs((d1 - d2) / (1000 * 24 * 60 * 60))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
