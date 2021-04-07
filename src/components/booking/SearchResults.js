import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import Table from "./Table";

const SearchResults = props => {
  const [selectedCustomer, setSelectedCustomer] = useState("");

  const selectCustomer = customerId => {
    setSelectedCustomer(customerId);
  };

  const tableColumns = [
    "ID",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room ID",
    "Check-In Date",
    "Check-Out Date",
    "Number of Nights",
    "Button"
  ];

  return (
    <>
      <Table
        tableColumns={tableColumns}
        results={props.results}
        selectCustomer={selectCustomer}
      />
      <CustomerProfile id={selectedCustomer} />
    </>
  );
};

export default SearchResults;
