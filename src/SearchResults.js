import React from "react";
import Table from "./Table";

const SearchResults = props => {
  const tableColumns = [
    "ID",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room ID",
    "Check-In Date",
    "Check-Out Date"
  ];

  return <Table tableColumns={tableColumns} results={props.results} />;
};

export default SearchResults;
