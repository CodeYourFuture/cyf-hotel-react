import React from 'react';
import StayedInDays from './StayedInDays';
const ResultsTableRow = (props) => {
  return (
    <tr className="rows-border">
      <td>{props.title}</td>
      <td>{props.firstName} </td>
      <td>{props.surname} </td>
      <td>{props.email} </td>
      <td>{props.roomId} </td>
      <td>{props.checkInDate} </td>
      <td>{props.checkOutDate} </td>
      <td><StayedInDays
        checkInDate={props.checkInDate}
        checkOutDate={props.checkOutDate}
      /></td>
    </tr>
  )
}
export default ResultsTableRow;
