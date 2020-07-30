import React, { useState } from "react";
import TableInfo from "./TableInfo.js";
import TableRow from "./TableRow.js";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <table className="table table-striped">
        <TableInfo />
        <tbody>
          {props.results.map((data, index) => {
            return (
              <TableRow key={index} data={data} handleClick={setSelectedId} />
            );
          })}
        </tbody>
      </table>
      {selectedId && <CustomerProfile customerId={selectedId} />}
    </div>
  );
}

export default SearchResults;
