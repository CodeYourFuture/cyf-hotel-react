import React, { useState, useEffect } from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [customerProfileId, setCustomerProfileId] = useState("");

  console.log("props value", props);
  return (
    <div>
      <table className="table">
        <TableHeading />
        <TableBody bodyData={props.results} customerProfileId={customerProfileId} setCustomerProfileId={setCustomerProfileId} setDeleteRow={props.setDeleteRow} />
      </table>
      <CustomerProfile customerProfileId={customerProfileId} />
    </div>
  );
};

export default SearchResults;
