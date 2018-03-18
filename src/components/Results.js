import React from "react";
import SortableHeaders from "./SortableHeaders";
import ResultBody from "./ResultBody";

const Results = ({ data, sortBy }) => (
  <div>
    <table className="table search-table">
      <SortableHeaders sortBy={sortBy} />
      <ResultBody data={data} />
    </table>
  </div>
);
export default Results;
