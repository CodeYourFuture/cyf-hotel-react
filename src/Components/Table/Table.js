import React from "react";
import TrElement from "./TrElement/TrElement";

const TableElement = props => {
  return (
    <table>
      <TrElement th={true} tableHeader={props.tableHeader} />
      {props.fakeBooking.map(item => {
        return <TrElement th={false} fakeBookingItem={item} />;
      })}
    </table>
  );
};

export default TableElement;
