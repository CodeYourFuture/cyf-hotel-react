import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const SearchResults = props => {
  return (
    <div>
      <table>
        <TableHead />
        <TableBody newData={props.results} />
      </table>
    </div>
  );
};

export default SearchResults;
