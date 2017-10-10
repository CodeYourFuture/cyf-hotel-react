import React from 'react';
import moment from 'moment';
// import ResultRow from './ResultsRow.js';

const getTimeDifference = (checkInDate, checkOutDate)=>{
    checkOutDate = checkOutDate.split("-");
    checkInDate = checkInDate.split("-");
    return checkOutDate[2] - checkInDate[2]
}
const resultsAll = (bookings)=> {
       return bookings.results.map((booking,i)=>{
          return (<tr key={i}> 
              <td> {booking.title}</td> 
              <td> {booking.firstName} </td> 
              <td> {booking.surname} </td> 
              <td> {booking.email}  </td> 
              <td> {booking.roomId} </td> 
              <td> {booking.checkInDate} </td> 
              <td> {booking.checkOutDate} </td> 
              <td>{getTimeDifference(booking.checkInDate,booking.checkOutDate)}</td>
          </tr>);
       })
    }
const Results = props => ( 
    <div className = "container" >
        <div className = "row" >
            <div className = "col" >
                <table className = "table" >
                    <thead>
                        <tr>
                            <th > Title </th> 
                            <th > First name </th> 
                            <th > Surname </th> 
                            <th > Email </th> 
                            <th > Room id </th> 
                            <th > Check in date </th> 
                            <th > Check out date </th> 
                            <th > Staying days </th>
                        </tr> 
                    </thead> 
                    <tbody id = "rows">
                    {resultsAll(props)}
                    </tbody> 
                </table> 
            </div> 
        </div> 
    </div>
);
export default Results;