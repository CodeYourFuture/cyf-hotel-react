import React from 'react';
import ResultsTableRow from './ResultsTableRow';

const ResultsTable = (props) => {
  console.log(props.bookings);
  return(
    <div >
      <table>
      <tbody className="rows-border">
      <tr>
          <th onClick={() => (props.sortIt('title'))}>Title</th>
          <th onClick={() => (props.sortIt('firstName'))}>First Name </th>
          <th>surname</th>
          <th>email</th>
          <th>roomId</th>
          <th>checkInDate</th>
          <th>checkOutDate</th>
          <th>Number of Days</th>

        </tr>
      {props.bookings.map((fakeBooking)=>

          <ResultsTableRow {...fakeBooking}/>
      )}
      </tbody>
    </table>
    </div>
  )
}
export default ResultsTable ;
