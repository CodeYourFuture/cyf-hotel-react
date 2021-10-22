import React, { useState } from "react";
import Table from "./Table";
import AddCustomer from "./AddCustomer";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [id, setId] = useState(null);
  function getProfileId(id) {
    setId(id);
  }
  return (
    <div>
      <table className="table">
        <Table />
        <AddCustomer getProfileId={getProfileId} result={props.results} />
      </table>
      <CustomerProfile id={id} />
    </div>
  );
};

export default SearchResults;
