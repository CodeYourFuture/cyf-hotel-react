import React from "react";
import TableRow from "./TableRow";

const SearchResults = props => (
  <table className="table">
    <thead>
      <tr className="tr">
        <th scope="col" className="th">
          Id
        </th>
        <th scope="col">Title</th>
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Nights</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map((info, index) => {
        return <TableRow key={index} info={info} />;
      })}
    </tbody>
  </table>
);

export default SearchResults;
