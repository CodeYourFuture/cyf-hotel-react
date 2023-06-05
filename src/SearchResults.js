import React from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";


const SearchResults = (props) => {
  return (
    <table className="table">
      <TableHeading />
      <TableBody bodyData={props.results} />
    </table>
  );
};

export default SearchResults;
