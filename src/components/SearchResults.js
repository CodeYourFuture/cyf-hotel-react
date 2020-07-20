import React from "react";
import TableHeadingRow from "./TableHeadingRow";
import TableBodyRow from "./TableBodyRow";

const SearchResults = ({ results }) => (
  <table className="table">
    <thead>
      <TableHeadingRow />
    </thead>
    <tbody>
      {results.map(result => (
        <TableBodyRow key={result.roomId} content={result} />
      ))}
    </tbody>
  </table>
);

export default SearchResults;
