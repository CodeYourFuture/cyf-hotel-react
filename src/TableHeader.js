import React from "react";

function TableHeader({ headers, sortBookings }) {
  return (
    <thead className="search-result-table-head">
      <tr>
        {headers.map(heading => {
          return (
            <th key={heading?.title} scope="col">
              {heading?.title}&nbsp;&nbsp;
              {heading?.target ? (
                <button
                  onClick={() => sortBookings(heading?.target)}
                  className="btn btn-outline-secondary"
                >
                  &#8595; &#8593;
                </button>
              ) : (
                ""
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
export default TableHeader;
