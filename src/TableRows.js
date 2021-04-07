import React from "react";
// import moment from "moment";
import TableBody from "./TableBody";
// moment().format();

const TableRows = props => {
  // const startDate = moment(props.results.checkInDate.split("-"));
  // console.log("khalid")
  // const endDate = moment(props.results.checkOutDate.split("-"));
  // let numberOfNights = endDate.diff(startDate, "days", true);
  // if (isNaN(numberOfNights)) {
  //   numberOfNights = "Unknown";
  // }

  return (
    <tbody>
    {props.results.map(result => {
      const moment = require ("moment");
      const checkIn = moment(result.checkInDate);
      const checkOut = moment(result.checkOutDate);
      const numberOfNights = checkOut.diff(checkIn, "days");
      return (
        <tr>
         <th scope="row">{result.id}</th>
         <td>{result.title}</td>
         <td>{result.firstName}</td>
         <td>{result.surname}</td>
         <td>{result.email}</td>
         <td>{result.roomId}</td>
         <td>{result.checkInDate}</td>
         <td>{result.checkOutDate}</td>
         <td>{numberOfNights}</td>
        </tr>
        

      )
    })}
     
    </tbody>
  );
};
export default TableRows;
