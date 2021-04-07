import React from "react";
import TableRows from "./TableRows";
import Table from "./Table";

const TableBody = props => {
  return (
    <tbody>
    <TableRows results={props.results} />
    </tbody>
  );
};

export default TableBody;
