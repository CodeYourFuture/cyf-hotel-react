import React, {useState} from "react";
import moment from "moment"


const SearchResults = props => {
  const [selectedRow, setSelectedRow] = useState(0)
  
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
          <tr key={booking.id}>
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