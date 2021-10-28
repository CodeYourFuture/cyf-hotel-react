import React, { useState } from "react";
/*const [row1, setRow1] = useState("");
const [row2, setRow2] = useState("");
const [row3, setRow3] = useState("");
const [row4, setRow4] = useState("");*/

function SearchResults(props) {
  return (
    <table className="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">title</th>
          <th scope="col">First</th>
          <th scope="col">sureaname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in data</th>
          <th scope="col">check out data</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => (
          <tr key={index}>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default SearchResults;
