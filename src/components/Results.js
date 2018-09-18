import React from "react";
import "../Results.css";
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
const Results = ( {results} ) => {
    // console.log('testing...', results)
  if (results && results.length > 0) {
    return (
      <table className="Results">
        <TableHeader />
        {results.map((result, key) => <TableRow key= {key} {...result} />)}
      </table>
    );
  } else {
    return <h1>No results found!</h1>;
  }
};

export default Results;
