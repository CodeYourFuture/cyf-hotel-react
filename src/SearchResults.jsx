import moment from "moment";
import React from "react";
import { useState } from "react";

function SearchResults(prop) {
  const [selectedIndex, setSelectedIndex] = useState();

  function rowClick(index) {
    if (selectedIndex === index) setSelectedIndex(null);
    else setSelectedIndex(index);
  }
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
          <th>Check In</th>
          <th>Check Out</th>
          <th>No of Nights</th>
        </tr>
      </thead>

      <tbody>
        {prop.results.map((data, index) => {
          return (
            <tr
              key={index}
              onClick={() => rowClick(index)}
              className={selectedIndex === index ? "red" : "white"}
            >
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>
                {moment(data.checkOutDate).diff(
                  moment(data.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
