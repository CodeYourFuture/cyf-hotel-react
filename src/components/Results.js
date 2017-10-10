import React from 'react';
import moment from 'moment';
// import ResultRow from './ResultsRow.js';
import ResultTableHeaders from './ResultTableHeaders';
import ResultTableRows from './ResultTableRows';
// const getTimeDifference = (checkInDate, checkOutDate)=>{
//     checkOutDate = moment(checkOutDate);
//     checkInDate = moment(checkInDate);
//     return checkOutDate.diff(checkInDate,'days')
// }

const getTimeDifference = (bookings)=>{
   bookings.map(booking =>{
     let checkOutDate = moment(booking.checkOutDate);
     let checkInDate = moment(booking.checkInDate);
     //calculate the difference and include the result,totalDays, to the booking object
     return booking.totalDays = checkOutDate.diff(checkInDate,'days')
   })
  
}
// const resultsAll = (bookings)=> {
//        return bookings.results.map((booking,i)=>{
//           return (<tr key={i}> 
//               <td> {booking.title}</td> 
//               <td> {booking.firstName} </td> 
//               <td> {booking.surname} </td> 
//               <td> {booking.email}  </td> 
//               <td> {booking.roomId} </td> 
//               <td> {booking.checkInDate} </td> 
//               <td> {booking.checkOutDate} </td> 
//               <td>{getTimeDifference(booking.checkInDate,booking.checkOutDate)}</td>
//           </tr>);
//        })
//     }
const Results = props => ( 
    <div className = "container" >
        <div className = "row" >
            <div className = "col" >
                <p> Results ( <span className="text-danger">{props.results.length}</span> found ) </p>
                {/*calculate the total days and map it with each booking object*/}
                {getTimeDifference(props.results)}
                <table className = "table" >
                    <thead>
                        <tr>{/* use the first object's keys as the value for the table heading*/}
                             <ResultTableHeaders resultHeading = {Object.keys(props.results[0])} onClick={props.headerclick}/>
                        </tr> 
                    </thead> 
                    <tbody id = "rows">
                      <ResultTableRows bookings = {props.results}/>
                    </tbody> 
                </table> 
            </div> 
        </div> 
    </div>
);
export default Results;