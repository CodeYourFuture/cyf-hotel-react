import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <table className="table table-bordered">
        <TableHeader />
        <tbody>
          <TableRow results={results} />
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
