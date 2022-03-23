import React from "react";
const moment = require("moment");

function TableHeader() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">firstName</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
    </table>
  );
}

function SearchResults(props) {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.title}</td>
          <td>{props.firstName}</td>
          <td>{props.surname}</td>
          <td>{props.email}</td>
          <td>{props.room}</td>
          <td>{props.dateIn}</td>
          <td>{props.dateOut}</td>
          <td>{moment(props.dateOut).diff(moment(props.dateIn), "day")}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SearchResults;
export { TableHeader };
