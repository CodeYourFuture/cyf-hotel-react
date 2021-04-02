import React from "react";
import TableRow from "./TableRow";

const TableBody = props => {
  return (
    <tbody>
      {props.results.map((result, index) => (
        <TableRow
          result={result}
          selectCustomer={props.selectCustomer}
          key={index}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
