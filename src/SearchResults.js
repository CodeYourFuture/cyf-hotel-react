import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults = ({ results }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <TableHead />
        </thead>
        <tbody>
          <TableBody data={results} color="red" />
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
