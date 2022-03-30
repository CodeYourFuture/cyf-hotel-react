import React from "react";
import moment from 'moment';

const SearchResults = (props) => {

const headingsKeys = ['id', 'title', 'firstName', 'surname', 'email', 'roomId', 'checkInDate', 'checkOutDate'];
 
return (
<table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>  
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room Id</th>
      <th scope="col">Check-In Date</th>
      <th scope="col">Check-Out Date</th>
      <th scope="col">Number of Nights</th>
    </tr>
  </thead>
    <tbody>
      
         {props.theBookings.map((booking, index)  => {
             return (
           <tr key={index}>
                                 <th scope="col">{booking.id}</th>
                                 <td>{booking.title}</td>
                                 <td>{booking.firstName}</td>
                                 <td>{booking.surname}</td>
                                 <td>{booking.email}</td>
                                 <td>{booking.roomId}</td>
                                 <td>{booking.checkInDate}</td>
                                 <td>{booking.checkOutDate}</td>
                                 
                                 <td><DateDiff twoDates={{a:booking.checkInDate, b:booking.checkOutDate}}/></td>
           </tr>
                        
         )})}
      
      </tbody>
</table>
)};

const DateDiff = (props) => {
        const earlierDate = props.twoDates.a.split('-').map(element => +element);
        const laterDate = props.twoDates.b.split('-').map(element => +element);;
        // console.log(props.twoDates.a, props.twoDates.b); // EG 2017-11-21 2017-11-23
        let earlierMoment = moment(props.twoDates.a);
        let laterMoment = moment(props.twoDates.b);
        // console.log(laterMoment.diff(earlierMoment,'days')); // EG 2
        let theDiff = laterMoment.diff(earlierMoment,'days');
        return theDiff;
};

export default SearchResults;