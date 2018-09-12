
import React, { Component } from 'react';
//import fakeBookings from './data/fakeBookings.json';
const Results = (props) => {
  let fakeBooking= {
    "id": 1,
    "title": "Mr",
    "firstName": "John",
    "surname": "Doe",
    "email": "johndoe@doe.com",
    "roomId": 2,
    "checkInDate": "2017-11-21",
    "checkOutDate": "2017-11-23"
  }
  return(

    <div>
      {fakeBooking.map(name=>(

      <ais-Results inline-template>
         <table>
           <tbody>
             <tr >
               <td>{props.results.name}</td>
             </tr>
           </tbody>
         </table>
      </ais-Results>
      ))}
    </div>  
  )
}
 export default Results;


// // Create a Results component that shows a table of results. 
// Show it on the Bookings page using hard coded data.
//  Hint: look in `src/containers/Bookings.js` for where to load it. 
//  Be sure to split out your components, similar to the method used in exercise 1








// {/*
//       <tr v-for="result in results" :key="result.objectID">
//         <td>{{ result.name }}</td>
//         <td>{{ result.description }}</td>
//      */}