import React from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

const SearchResults = props => {
  return (
    <div className="table-responsive-md">
      <table className="table table-hover">
        <TableHeading />
        <TableBody data={props} />
      </table>
    </div>
  );
};

export default SearchResults;
