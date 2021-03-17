import React from "react";
import TableElement from "../Table/Table";
import classes from "./SearchResults.css";

const SearchResults = props => {
  const selectTrElementHAndler = e => {
    if (e.target.closest("tr").classList.contains("tablesHeader")) return;
    e.target.closest("tr").classList.toggle("selected");
  };

  return (
    <TableElement
      selectHandlerClick={selectTrElementHAndler}
      tableHeader={props.tableHeader}
      fakeBooking={props.fakeBooking}
    />
  );
};

export default SearchResults;
