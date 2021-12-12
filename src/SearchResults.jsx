import React, { useState } from "react";
import TableRowStatic from "./TableRowStatic";
import TableRowsLoop from "./TableRowsLoop";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [currentCustomerID, setCurrentCustomerID] = useState(null);
  const customerIDSwitcher = id => {
    setCurrentCustomerID(id);
  };
  return (
    <>
      <table className="search-results-table">
        <tbody>
          {/* it was easiest for me to just separate
        these into separate components */}

          <TableRowStatic />
          <TableRowsLoop
            results={props.results}
            idSwitcher={customerIDSwitcher}
          />
        </tbody>
      </table>
      <CustomerProfile customerID={currentCustomerID} />
    </>
  );
};
export default SearchResults;
