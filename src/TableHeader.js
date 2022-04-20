import React from "react";

const TableHeader = ({ headers }) => (
  <thead className="search-result-table-head">
    <tr>
      {headers.map(heading => {
        return (
          <th key={heading} scope="col">
            {heading}
          </th>
        );
      })}
    </tr>
  </thead>
);

export default TableHeader;
