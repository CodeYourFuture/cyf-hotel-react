import React from "react";

const TableHeader = props => {
  return (
    <thead>
      <tr>
        {props.tableColumns.map(column => (
          <th scope="Col">{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
