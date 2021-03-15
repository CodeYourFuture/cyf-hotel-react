import React from "react";
import TableRow from "./TableRow";

const TableBody = props => {
  return (
    <tbody>
      {props.results.map(result => (
        <TableRow result={result} />
      ))}
    </tbody>
  );
};

export default TableBody;
