import React, { useState } from "react";
import TableHeadingRow from "./TableHeadingRow";
import TableBodyRow from "./TableBodyRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [customerId, setCustomerId] = useState(null);

  return (
    <div>
      <table className="table">
        <thead>
          <TableHeadingRow />
        </thead>
        <tbody>
          {results.map(result => (
            <TableBodyRow
              key={result.roomId}
              content={result}
              setCustomerId={setCustomerId}
            />
          ))}
        </tbody>
      </table>
      {customerId && <CustomerProfile id={customerId} />}
    </div>
  );
};

export default SearchResults;
