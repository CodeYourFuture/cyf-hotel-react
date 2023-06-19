import React from "react";
import TableRow from "./TableRow";

const TableBody = (props) => {
  return (
    <tbody>
      {props.bodyData.map((aBooking, index) => {
        return <TableRow key={index} aBooking={aBooking}></TableRow>;
      })}
    </tbody>
  );
};

export default TableBody;
