import React from "react";
import TableRows from "./TableRows";

const TableBody = props => {
  return (
    <tbody>
      {props.results.map(result => (
        <TableRows result={result} />
      ))}
    </tbody>
  );
};

export default TableBody;
