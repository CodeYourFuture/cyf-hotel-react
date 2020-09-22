import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

function SearchResults() {
  return (
    <table class="table table-hover table-dark">
      <TableHead />
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
}

export default SearchResults;
