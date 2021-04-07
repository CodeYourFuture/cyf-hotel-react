import React from "react";
import Table from "./Table";

const TableHeader = props => {
  return (
    <table>
    <thead>
      <tr>
        {props.tableColumns.map((column, index) => (
          <th scope="Col" key={index}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
    </table>
  );
};

export default TableHeader;
