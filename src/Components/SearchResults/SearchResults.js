import React from "react";
import TableElement from "../Table/Table";

const SearchResults = props => {
  return (
    <TableElement
      tableHeader={props.tableHeader}
      fakeBooking={props.fakeBooking}
    />
  );
};

export default SearchResults;
