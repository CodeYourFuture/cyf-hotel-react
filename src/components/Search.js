import React from "react";
import SearchControls from "./SearchControls";
const searchById = {
  htmlFor: "customerId",
  searchBy: "customer Id",
  id: "customerId",
  placeholder: "Customer Id",
  btn_label: "Search IDs",
  enteredValue: "enteredId"
};
const searchByName = {
  htmlFor: "customerName",
  searchBy: "customer Name",
  id: "customerName",
  placeholder: "Customer Name",
  btn_label: "Search Names",
  enteredValue: "enteredName"
};
const Search = ({ searchHandler }) => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row search-wrapper">
      <SearchControls {...searchById} searchHandler={searchHandler} />
      <SearchControls {...searchByName} searchHandler={searchHandler} />
    </div>
  </div>
);

export default Search;
