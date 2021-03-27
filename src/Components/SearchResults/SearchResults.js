import React from "react";
import TableElement from "../Table/Table";

const SearchResults = props => {
  const selectBooking = e => {
    if (e.target.classList.contains("toStopEvent")) return;
    const target = e.target.closest("tr");

    target.classList.contains("selected")
      ? target.classList.remove("selected")
      : target.classList.add("selected");
  };

  return (
    <TableElement
      selectIdHandlerFunction={props.selectIdHandlerFunction}
      selectHandler={selectBooking}
      tableHeader={props.tableHeader}
      fakeBooking={props.fakeBooking}
    />
  );
};

export default SearchResults;
