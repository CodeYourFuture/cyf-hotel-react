import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [color, setColor] = useState("red");
  const highLight = () => {
    setColor("blue");
  };

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Sur Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">No.of Days</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, i) => {
            let checkIn = moment(result.checkInDate);
            let checkOut = moment(result.checkOutDate);
            return (
              <tr key={i} className={color} onClick={highLight}>
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{checkOut.diff(checkIn, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
