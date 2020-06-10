import React from "react";
import TableRow from "./TableRow";

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
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
          {props.results.map((result, index) => {
            return <TableRow result={result} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
