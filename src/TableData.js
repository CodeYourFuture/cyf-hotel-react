import React from "react";
import TableRow from "./TableRow";

function TableData(props) {
  return (
    <tbody>
      {props.results.map((item, index) => {
        return <TableRow item={item} key={index} />;
      })}
    </tbody>
  );
}

export default TableData;
