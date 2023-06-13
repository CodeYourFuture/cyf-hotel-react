import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults = (props) => {
  return (
    <table class="table table-hover">
      <TableHead />
      <TableBody results={props.results} />
    </table>
  );
};

export default SearchResults;
