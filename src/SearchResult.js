import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResult = results => {
  return (
    <table className="table">
      <TableHead />
      <TableBody bookings={results.results} />
    </table>
  );
};

export default SearchResult;
