import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [selectedCustomer, setSelectCustomer] = useState("");
  const selectCustomer = customerId => {
    console.log("yeyyyy" + customerId);
    setSelectCustomer(customerId);
  };

  return (
    <div>
      <CustomerProfile id={selectedCustomer} />
      <table className="table">
        <TableHead />
        <TableBody bookings={props.results} selectCustomer={selectCustomer} />
      </table>
    </div>
  );
};

export default SearchResults;
