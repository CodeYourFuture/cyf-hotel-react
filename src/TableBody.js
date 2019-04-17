import React from "react";

import DaysCalculator from "./DaysCalculator";

var moment = require('moment');
moment().format();


const TableBody = (props) => {
return(
<tbody>
     {props.searchOutput.map(searchOutput => {
  return(
    <tr>
     <th scope= "row"> {searchOutput.id}</th>
       <td>{searchOutput.title}</td>
       <td>{searchOutput.firstName}</td>
       <td>{searchOutput.surname}</td>
       <td>{searchOutput.email}</td>
       <td>{searchOutput.roomId}</td>
       <td>{searchOutput.checkInDate}</td>
       <td>{searchOutput.checkOutDate}</td>
       <td> <DaysCalculator dateout = {searchOutput.checkOutDate} datein = {searchOutput.checkInDate} /> </td>
       </tr>     
         )})}    
  </tbody>)
}
export default TableBody;