import React,{ useState } from "react";
import CustomerProfile from"./SearchButton";
import moment from "moment"

const SearchResults = props => {
const [selectedRow,setSelectedRow]= useState(0);
const colors = ["grey", "blue", "pink", "purple", "yellow", "green", "beige"];
const random = Math.floor(Math.random() * colors.length);
function Highlight (rowId){
  //setSelectedRow(rowId === selectedRow ? null:rowId);  
  setSelectedRow(rowId);
  }

   return (
    <>
 <table className="primary-table">
  <thead>
    <tr>
      <th>ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Night Stay</th>
          <th scope="col">button</th>
    </tr>
  </thead>
  <tbody>
    {props.results.map(el => {
      let a = moment(el.checkInDate, "YYYY-MM-DD")
      let b = moment(el.checkOutDate, "YYYY-MM-DD")

      return(
          <tr key={el.id} onClick={()=>Highlight(el.id)} style={{backgroundColor:el.id===selectedRow? colors[random]: "white"}}>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.firstName}</td>
            <td>{el.surname}</td>
            <td>{el.email}</td>
            <td>{el.roomId}</td>
            <td>{el.checkInDate}</td>
            <td>{el.checkOutDate}</td>
            <td>{moment(b).diff(a, "days")}</td>
            <td><button>Show Profile</button></td>
            <CustomerProfile />
            </tr>
)})}
  </tbody> 
  </table>  
  <CustomerProfile /> 
  </>  
   );
   
};
export default SearchResults;