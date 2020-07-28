import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function SearchResults({ results }) {
  return (
    <div>
      <table className="table">
        <TableHeader />

        <tbody>
          {results.map((item, index) => {
            return <TableRow item={item} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
