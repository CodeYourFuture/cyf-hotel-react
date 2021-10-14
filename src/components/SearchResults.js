import React from "react";
import Table from "./Table";
import AddCustomer from "./AddCustomer";

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <Table />
        <AddCustomer result={props.results} />
      </table>
    </div>
  );
};

export default SearchResults;
