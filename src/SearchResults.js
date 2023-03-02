import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  
  const [selectedRows, setSelectedRows] = useState([]);
  // create a new state variable 'selectedRows' using the useState hook.
//  here will be store the selected rows 
// we start from empty array

  const handleRowClick = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
// the function, which checks whether the id of the clicked row is already in the selectedRows state array. 
// If yes- it removes the id from the array using the filter method, and updates the selectedRows state with the new array using the setSelectedRows function. 
// If not - it adds the id to the array using the spread operator and updates the selectedRows state.
  return (
    <table className="table">
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
          <th>Numb days</th>
        </tr>
      </thead>
      <tbody>
        {results.map(booking => (
          <tr
            key={booking.id}
            className={selectedRows.includes(booking.id) ? "selected" : ""}
            // If the id is included in 'selectedRow' -the "selected" class is applied, if not - an empty string is used.
            onClick={() => handleRowClick(booking.id)}
            // onClick prop is used to add or remove the id of the clicked row to (or from) the 'selectedRows' state array
          >
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>
              {moment(booking.checkOutDate).diff(
                booking.checkInDate,
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;