import React, { useState } from "react";
import TableHeader from "./TableHeader";
// import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";
// import ID from "./TableRowEach";
import TableRowEach from "./TableRowEach";

const SearchResults = ({ results }) => {
  const [id, setId] = useState("");
  const idSetter = (e, id) => {
    // e.stopPropagation();
    setId(id);
  };
  return (
    <div className="search-results">
      <table className="table table-bordered">
        <TableHeader />
        <tbody>
          {results.map((entry, index) => {
            return (
              <TableRowEach entry={entry} key={index} idSetter={idSetter} />
            );
          })}
        </tbody>
      </table>
      {id === "" ? null : (
        <CustomerProfile customerId={id} className="customer-profile" />
      )}
    </div>
  );
};

export default SearchResults;
