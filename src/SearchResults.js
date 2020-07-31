import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

function SearchResults({ results }) {
  const [selectedId, setSelectedId] = useState("");
  return (
    <div>
      <table className="table">
        <TableHeader />

        <tbody>
          {results.map((item, index) => {
            return (
              <TableRow item={item} key={index} handleClick={setSelectedId} />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile customerId={selectedId} />
    </div>
  );
}

export default SearchResults;
