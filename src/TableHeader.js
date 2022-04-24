import React from "react";

function TableHeader({ headers }) {
  return (
    <thead className="search-result-table-head">
      <tr>
        {headers.map(heading => {
          return (
            <th key={heading} scope="col">
              {heading}&nbsp;&nbsp;
              <button className="btn btn-outline-secondary">
                &#8595; &#8593; &#9;
              </button>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
export default TableHeader;
