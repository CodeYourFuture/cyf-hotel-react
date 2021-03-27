import React from "react";
import TableElement from "../Table/Table";

const SearchResults = props => {
  const selectTrElementHAndler = e => {
    // if (e.target.closest("tr").classList.contains("tablesHeader")) return;
    // e.target.closest("tr").classList.add("selected");
  };

  const selectBooking = e => {
    const target = e.target.closest("tr");

    target.classList.contains("selected")
      ? target.classList.remove("selected")
      : target.classList.add("selected");
  };

  return (
    <TableElement
      selectHandler={selectBooking}
      tableHeader={props.tableHeader}
      fakeBooking={props.fakeBooking}
    />
  );
};

export default SearchResults;
