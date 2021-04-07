import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ results, selectCustomer }) => {
  return (
    <tbody>
      {results.map((result, index) => (
        <TableRow result={result} selectCustomer={selectCustomer} key={index} />
      ))}
    </tbody>
  );
};

export default TableBody;
