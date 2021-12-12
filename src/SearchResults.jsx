import React from "react";
import TableRowStatic from "./TableRowStatic";
import TableRowsLoop from "./TableRowsLoop";

const SearchResults = props => {
  return (
    <table className="search-results-table">
      <tbody>
        {/* it was easiest for me to just separate
        these into separate components */}

        <TableRowStatic />
        <TableRowsLoop results={props.results} />
      </tbody>
    </table>
  );
};
export default SearchResults;
