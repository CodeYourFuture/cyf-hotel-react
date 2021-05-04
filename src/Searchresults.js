import React from "react";
import moment from "moment";
import { useState } from "react";

const SearchResults = ({ results }) => {
  const [color, setColor] = useState("");

  const highlight = e => {
    e.preventDefault();
    if (color === "") {
      e.target.parentElement.className = "highlight";
      setColor("unhighlight");
    } else {
      e.target.parentElement.className = "unhighlight";
      setColor("");
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">First</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check-in</th>
            <th scope="col">Check-out</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(function(result, index) {
            let checkInDate = moment(result.checkInDate);
            let checkOutDate = moment(result.checkOutDate);
            return (
              <tr
                key={index}
                onClick={highlight}
                style={{ backgroundColor: color }}
              >
                <th scope="row">{result.id}</th>

                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{checkOutDate.diff(checkInDate, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
