import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
//import Bookings from "./Bookings"

function getDifferenceInDays(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60 * 24);
}

const SearchResults = (props) => {
    const [color, setColor] = useState(props.color);
    // const [bookingID, setBookingID] = useState("null");

    // function profileHandler (){
    //   setBookingID(1);
    // };

    function selected (color){
      setColor(color);
    }

    return(
        <div>
            <div>
            <table className = "tables">
                <thead>
                <tr className ={color} onClick ={() => selected("red")} onMouseOut ={() => selected("white")}>
                    <th>ID</th>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Check In Date</th>
                    <th>Check Out Date</th>
                    <th>Number of Nights</th>
                    <th>Customer Profile</th>
                </tr>
                </thead>
                {props.data.map((log, index) => (
                <tbody>
                <tr className ={color} onClick ={() => selected("yellow")} onMouseOut ={() => selected("white")}>
                    <td key = {index}>{log.id}</td>
                    <td key = {index}>{log.title}</td>
                    <td key = {index}>{log.firstName}</td>
                    <td key = {index}>{log.surname}</td>
                    <td key = {index}>{log.email}</td>
                    <td key = {index}>{log.checkInDate}</td>
                    <td key = {index}>{log.checkOutDate}</td>
                    <td key ={index}> {getDifferenceInDays(log.checkInDate, log.checkOutDate)}</td>
                    <td><button>Show Profile</button></td>
                </tr>
                </tbody>
            ))} 
            </table>
            </div>
        </div>
    )
}

export default SearchResults;

 