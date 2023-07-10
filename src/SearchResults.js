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
      <table className="table table-hover">
        <TableHead />
        <tbody>
          {props.results.map((result, index) => {
            return (
              <TableRow
                key={index}
                result={result}
                handleClick={handleIdClick}
              />
            );
            //return TableRow({props: result});
          })}
        </tbody>
      </table>
      {customerId && <CustomerProfile id={customerId} />}
    </div>
  );
};

export default SearchResults;
