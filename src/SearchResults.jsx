import React,{ useState } from "react";
import moment from "moment"
const SearchResults = props => {
  const [orders,setOrders]= useState(0);
   return (
 <table className="table-hover" >
  <thead>
    <tr>
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
    {props.results.map(el => {
      let a = moment(el.checkInDate, "YYYY-MM-DD")
      let b = moment(el.checkOutDate, "YYYY-MM-DD")
      return(
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.firstName}</td>
            <td>{el.surname}</td>
            <td>{el.email}</td>
            <td>{el.roomId}</td>
            <td>{el.checkInDate}</td>
            <td>{el.checkOutDate}</td>
            <td>{moment(b).diff(a, "days")}
            </td>
            </tr>
)})}
  </tbody>
  </table>
   );
};
export default SearchResults;