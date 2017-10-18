
import React from 'react';
import moment from 'moment';
console.log(moment);
const ResultRow = props => {
  const durationOut = moment(props.result.checkOutDate,"YYYY-MM-DD")
  const durationIn = moment(props.result.checkInDate,"YYYY-MM-DD")
  const duration = durationOut.from(durationIn)

   return(
   <tr>
     <td>{props.result.title ? props.result.title : "None"} </td>
     <td>{props.result.firstName ? props.result.firstName : "None"}</td>
     <td>{props.result.surname ? props.result.surname : "None"}</td>
     <td>{props.result.email ? props.result.email : "None"}</td>
     <td>{props.result.roomId ? props.result.roomId : "None"}</td>
     <td>{props.result.checkInDate ? props.result.checkInDate : "None"}</td>
     <td>{props.result.checkOutDate ? props.result.checkOutDate : "None"}</td>
     <td>{duration}</td>
   </tr>
 )
}
export default ResultRow;
