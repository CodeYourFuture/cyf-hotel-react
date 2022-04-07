import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [isSelected, setSelected] = useState(false);
  const highlightRow = () => setSelected(!isSelected);
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>FirstName</th>
            <th>Surname</th>
            <th>Email</th>
            <th>RoomID</th>
            <th>CheckInDate</th>
            <th>CheckOutDate</th>
            <th>NumberOfNights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => {
            return (
              <tr
                key={index}
                className={isSelected ? "selected" : ""}
                onClick={highlightRow}
              >
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.firstName}</td>
                <td>{row.surname}</td>
                <td>{row.email}</td>
                <td>{row.roomId}</td>
                <td>{row.checkInDate}</td>
                <td>{row.checkOutDate}</td>
                <td>
                  {moment(row.checkOutDate).diff(
                    moment(row.checkInDate),
                    "day"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
