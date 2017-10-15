import React from 'react';
import Resulttablerows from './Resulttablerows';

const Resulttable = (props) => {
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

          <ResulttableRows {...fakeBooking}/>
      )}
      </tbody>
    </table>
    </div>
  )
}
export default Resulttable ;
