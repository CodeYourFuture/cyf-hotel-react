import React from "react";
import "./RowBackground.css";
import { TableRows } from "./TableRows";

export const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Num. of Night(s)</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((val, index) => {
            return <TableRows index={index} eachRow={props.results[index]} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
