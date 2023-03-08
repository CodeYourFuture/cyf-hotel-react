import React, { useState } from "react";
import moment from "moment"


const SearchResults = props => {
  
  const [selectedRow, setSelectedRow] = useState(null)
  function handleClick(rowId){
    setSelectedRow (rowId === selectedRow? null : rowId);

  }  
   return (
 <table className=" table table-hover table table-sm">
  <thead>
    <tr className="table-primary">
      
      <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in Date</th>
          <th>Check out Date</th>
          <th>Night Stay</th>

    </tr>
  </thead>
  <tbody>
    {props.results.map(booking => {
      let a = moment(booking.checkInDate, "YYYY-MM-DD") 
      let b = moment(booking.checkOutDate, "YYYY-MM-DD")
      return(
          <tr onClick={() => handleClick(booking.id)}
          style={{backgroundColor: booking.id === selectedRow ? "#f2def2" : "#f7f7f7"}}>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>{moment(b).diff(a, "days")}
            </td>
            </tr>
)})}
  </tbody>
  </table>
   );
};

export default SearchResults;