import React from "react";
import TableRowFixed from "./TableRowFixed";
import TableRowsLoop from "./TableRowsLoop";

const SearchResults = props => {
  return (
    <table className="search-results-table">
      <tbody>
        {/* it was easiest for me to just separate
        these into separate components */}
        <TableRowFixed />
        <TableRowsLoop results={props.results} />
      </tbody>
    </table>
  );
};
export default SearchResults;
