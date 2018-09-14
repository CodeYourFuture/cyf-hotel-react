import React from 'react';
import moment from 'moment';
//import FakeBookings from '../data/fakeBookings.json';

const ResultTable = props => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>First Name</th>
        <th>Surname</th>
        <th>email</th>
        <th>roomId</th>
        <th>Check In Date</th>
        <th>Check Out Date</th>
        <th>Number Of Stay</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map(row => (
          <tr>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.firstName}</td>
            <td>{row.surname}</td>
            <td>{row.email}</td>
            <td>{row.roomId}</td>
            <td>{row.checkInDate}</td>
            <td>{row.checkOutDate}</td>
            <td>{diffDays(row.checkInDate, row.checkOutDate)}</td>
          </tr>
        ))
      }

    </tbody>
  </table>
)

function diffDays (checkInDate, checkOutDate) {
 
  var checkInMoment = moment(checkInDate);
  var checkOutMoment = moment(checkOutDate);

 return checkOutMoment.diff(checkInMoment, 'days')
 
}
//console.log(diffDays());

  export default ResultTable;
