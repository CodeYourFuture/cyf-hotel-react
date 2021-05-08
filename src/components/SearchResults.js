/* I had help with task: L2 T15 */

import React from "react";
import { Table } from "reactstrap";
import SearchTableHead from "./SearchTableHead";
import SearchTableRow from "./SearchTableRow";
import useSortableData from "./useSortableData";
import "./SearchResults.css";

const SearchResults = props => {
  const { items: sortedItems, requestSort } = useSortableData(props.results);

  return (
    <div>
      <Table responsive className="table table-color table-bordered">
        <thead className="text-center">
          <SearchTableHead requestSort={requestSort} />
        </thead>
        <tbody className="text-center">
          {sortedItems.map((booking, index) => (
            <SearchTableRow booking={booking} key={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SearchResults;
