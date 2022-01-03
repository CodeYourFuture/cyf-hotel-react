import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";
import handleClick from "./TableRowEach";

const SearchResults = ({ results }) => {
  //  const handleClick = (event) => {
  //    let customerProfileID = event.target.value;
  //    return customerProfileID;
  //    //  setProfileID(customerProfileID);
  //    //  console.log(customerProfileID);
  //  };
  return (
    <div className="search-results">
      <table className="table table-bordered">
        <TableHeader />
        <tbody>
          <TableRow results={results} />
        </tbody>
      </table>
      <CustomerProfile func={handleClick} className="customer-profile" />
    </div>
  );
};

export default SearchResults;
