import React from "react";

const TableHeader = props => {
  return (
    <thead>
      <tr>
        {props.tableColumns.map((column, index) => (
          <th scope="Col" key={index}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
