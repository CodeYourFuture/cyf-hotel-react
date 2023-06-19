import React from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  console.log("props value", props);
  return (
    <div>
      <table className="table">
        <TableHeading />
        <TableBody bodyData={props.results} />
      </table>
      <CustomerProfile id={props.results.id} />
    </div>
  );
};

export default SearchResults;
