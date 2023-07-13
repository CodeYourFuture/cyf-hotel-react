import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((booking) => {
          const {
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate,
          } = booking;
          const isSelected = selectedRows.includes(id);

          return (
            <tr
              key={id}
              className={isSelected ? "selected-row" : ""}
              onClick={() => toggleRowSelection(id)}
            >
              <td>{id}</td>
              <td>{title}</td>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>{calculateNights(checkInDate, checkOutDate)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const calculateNights = (checkInDate, checkOutDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const startDate = new Date(checkInDate);
  const endDate = new Date(checkOutDate);
  const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
  return diffDays;
};

export default SearchResults;