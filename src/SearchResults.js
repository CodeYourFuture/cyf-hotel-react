import { useState } from "react";
import React from "react";
import Search from "./Search";
import moment from "moment";
import "./App.css";
moment().format();

function SearchResults(props) {
  const [isClicked, setIsClicked] = useState(false);

  function toggleColor(event) {
    setIsClicked(!isClicked);
    isClicked
      ? (event.target.parentNode.className = "highlight")
      : (event.target.parentNode.className = "noHighlight");
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
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th>Stay Length</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return (
            <tr onClick={toggleColor}>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {Math.ceil(
                  moment(result.checkOutDate).diff(moment(result.checkInDate)) /
                    86400000
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
