import React from "react";

// I need to unpack dateDiff from date.js cause I havent export it as default
import { dateDiff } from "./utils/date";

function SearchResult(props) {
  const { results } = props;

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>title</th>
            <th>firstName</th>
            <th>surname</th>
            <th>email</th>
            <th>roomId</th>
            <th>checkInDate</th>
            <th>checkOutDate</th>
            <th>numberOfNights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(row => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.firstName}</td>
                <td>{row.surname}</td>
                <td>{row.email}</td>
                <td>{row.roomId}</td>
                <td>{row.checkInDate}</td>
                <td>{row.checkOutDate}</td>
                <td>{dateDiff(row.checkInDate, row.checkOutDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResult;
