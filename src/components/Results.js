import React from 'react';
import FakeBookings from '../data/fakeBookings.json';
import moment from 'moment'
const dateDifference = (start, end) => {
  const startMoment = moment(start)
  const endMoment = moment(end)
  return endMoment.diff(startMoment, "days");
}

const Results = () => {
   
  return(
    <div className="row search-wrapper">
    <div className="col">
    <table>
    <thead>
    <tr>
      <th>Title</th>
      <th>First name</th>
      <th>Surname</th>
      <th>Email</th>
      <th>Room Id</th>
      <th>Check In Date</th>
      <th>Check Out Date</th>
      <th>booking length</th>
    </tr>
    </thead>
        {FakeBookings.map((item)=>(
    
         
        <tbody>
       
            <tr>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{dateDifference(item.checkInDate, item.checkOutDate)}</td>
            </tr>
        </tbody>
      
        ))}
       </table>
    </div>
  </div>

  )}
    





export default Results;