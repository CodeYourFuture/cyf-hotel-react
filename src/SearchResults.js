import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

function SearchResults(props) {
  // console.log("dOWN HERE IS PROPS")
  // console.log(props.BookingData[0]);
  return (
    <table className="table table-dark">
      <TableHead />
      <tbody>
        <TableRow booking={props.BookingData[0]} />
        <TableRow booking={props.BookingData[1]} />
        <TableRow booking={props.BookingData[2]} />
        <TableRow booking={props.BookingData[3]} />
        <TableRow booking={props.BookingData[4]} />
      </tbody>
    </table>
  );
}

export default SearchResults;
