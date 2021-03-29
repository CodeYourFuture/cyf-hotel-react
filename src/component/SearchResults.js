import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody bookings={props.results} />
      </table>
    </div>
  );
};

export default SearchResults;
