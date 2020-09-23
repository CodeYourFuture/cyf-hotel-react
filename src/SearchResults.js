import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const SearchResults = ({ bookingsList }) => {
  return (
    <div>
      <table className="table">
        <TableHead bookingsList={bookingsList} />
        <TableBody bookingsList={bookingsList} />
      </table>
    </div>
  );
};

export default SearchResults;
