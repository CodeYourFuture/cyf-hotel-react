import React, { useState, useEffect } from "react";

import "../../App.css";
import Moment from "moment";

export default function SearchResults({ results }) {
  const [result, setResults] = useState([]);

  useEffect(() => {
    setResults(results);
  }, []);

  let checckDiff = (InDate, OutDate) => {
    const checkInDate = Moment(InDate, "YYYY-MM-DD");
    const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
    const diff = checkOutDate.diff(checkInDate, "days");
    return diff;
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">numberOfNight</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{checckDiff(item.checkInDate, item.checkOutDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
