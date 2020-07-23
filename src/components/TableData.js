import React, { useState } from "react";

import TableRow from "./TableRow";
function TableData(props) {
  return (
    <tbody>
      {props.results.map((data, index) => {
        return <TableRow key={index} data={data} />;
      })}
    </tbody>
  );
}
export default TableData;
