import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults = ({ results }) => {
  return (
    <table className="table">
      <TableHead />
      <TableBody bookings={results} />
    </table>
  );
};

export default SearchResults;
