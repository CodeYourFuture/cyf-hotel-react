import React from 'react';
import moment from 'moment';

const TableRow = function(props) {
  
return(
  
    <tr>
      <td >{props.title}</td>
      <td >{props.firstName}</td>
      <td >{props.surname}</td>
      <td >{props.email}</td>
      <td >{props.roomId}</td>
      <td >{props.checkInDate}</td>
      <td >{props.checkOutDate}</td>
      <td >{moment(props.checkOutDate).diff(props.checkInDate, 'days')}</td>

    </tr>
  
);
}
export default TableRow;
