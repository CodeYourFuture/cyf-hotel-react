import React from "react";

//const moment = require("moment");

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>ID</td>
          <td>title</td>
          <td>firstName</td>
          <td>surname</td>
          <td>email</td>
          <td>roomId</td>
          <td>checkInDate</td>
          <td>checkOutDate</td>
        </tr>
      </thead>
      <tbody>
        {props.results.map(res => (
          <tr>
            <td>{res.id}</td>
            <td>{res.title}</td>
            <td>{res.id}</td>
            <td>{res.id}</td>
            <td>{res.id}</td>
            <td>{res.id}</td>
            <td>{res.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
