
import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";




const SearchResults = props => {
  function handleButtonClick(booking) {
    console.log(booking.title);
  }
  
  return (
    <div>
    <table className="table">
      <thead className="thead-dark">
        <tr >
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">nights</th>
          <th scope="col">Profiles</th>
          <th>
      
          </th>
        </tr>
      </thead>
      <tbody>
      
        
        {props.results.map(booking => {
          
              
          return (
          
         <tr  >
         
          
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
              
              {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
              <td>
                <button onClick={() => handleButtonClick(booking)}>
                  Show Profile 
                </button>
              </td>
             


              
              </td>
              
        <td>
         
        </td>
      </tr>
    );
        })}
      </tbody>
    </table>
 
 
     </div>
    
   
    
  );
};


export default SearchResults;
