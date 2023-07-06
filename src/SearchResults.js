import { React, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [customerId, setCustomerId] = useState("");
  function handleIdClick(id) {
    setCustomerId(id);
  }
  return (
    <div>
      <table class="table table-hover">
        <TableHead />
        <tbody>
          {props.results.map((result) => {
            return <TableRow result={result} handleClick={handleIdClick} />;
            //return TableRow({props: result});
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
