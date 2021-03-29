import React from "react";
import TableRows from "./TableRows";

const TableBody = props => {
  return (
    <tbody>
      {props.results.map((result, index) => (
        <TableRows result={result} key={index} />
      ))}
    </tbody>
  );
};

export default TableBody;
