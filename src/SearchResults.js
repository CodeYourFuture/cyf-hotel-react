import moment from "moment";
import React, { useState } from "react";

const SearchResults = ({ results }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>title</th>
          <th>Firstname</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in</th>
          <th>Check out</th>
          <th>Staying nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(record => {
          return (
            <tr
              onClick={() => {
                setIsClicked(!isClicked);
              }}
              style={isClicked ? { border: "2px solid red" } : {}}
            >
              <td>{record.title}</td>
              <td>{record.firstName}</td>
              <td>{record.surname}</td>
              <td>{record.email}</td>
              <td>{record.roomId}</td>
              <td>{record.checkInDate}</td>
              <td>{record.checkOutDate}</td>
              <td>
                {moment(record.checkOutDate).diff(record.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
