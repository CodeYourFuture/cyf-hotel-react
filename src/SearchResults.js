import React from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

const SearchResults = props => {
  return (
    <table className="table table-hover">
      <TableHeading />
      <TableBody data={props} />
    </table>
  );
};

export default SearchResults;
