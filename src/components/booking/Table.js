import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = props => {
  return (
    <table className="table">
      <TableHeader tableColumns={props.tableColumns} />
      <TableBody
        results={props.results}
        selectCustomer={props.selectCustomer}
      />
    </table>
  );
};

export default Table;
