import React from "react";
import TrElement from "./TrElement/TrElement";

const TableElement = props => {
  return (
    <table>
      <tbody>
        <TrElement th={true} tableHeader={props.tableHeader} />
        {props.fakeBooking.map((item, index) => {
          return <TrElement key={index} th={false} fakeBookingItem={item} />;
        })}
      </tbody>
    </table>
  );
};

export default TableElement;
