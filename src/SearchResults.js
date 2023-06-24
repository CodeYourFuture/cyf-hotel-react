import React, { useState } from "react";
import moment from "moment";
const SearchResults = () => {
    const bookings = [
{
id: 1,
title: "Mr",
firstName: "John",
Surname: "Doe",
Email: "johndoe@doe.com",
roomId: 2,
checkInDate: "2017-11-21",
checkOutDate: "2017-11-23",

},

{
    id: 2,
    title: "Doctor",
    firstName: "Sadia",
    surname: "Begum",
    email: "begum_sadia@sadia.org",
    roomId: 1,
    checkInDate: "2018-02-15",
    checkOutDate: "2018-02-28",  
},

{
    id: 3,
    title: "Prince",
    firstName: "Henry",
    surname: "Wales",
    email: "harry@wales.com",
    roomId: 5,
    checkInDate: "2018-03-01",
    checkOutDate: "2018-04-09", 
},

{
    id: 4,
    title: "Dame",
    firstName: "Judi",
    surname: "Dench",
    email: "Judi@dench.co.uk",
    roomId: 6,
    checkInDate: "2017-12-25",
    checkOutDate: "2018-01-03",
  }, 
{
    id: 5,
    title: "Madam",
    firstName: "Anuradha",
    surname: "Selvam",
    email: "anu@selvam.net",
    roomId: 3,
    checkInDate: "2017-08-30",
    checkOutDate: "2017-10-02",

}
 ];

 const [selectedRows, setSelectedRows]=useState([]);
 const handleRowClick = (id)=> {
    setSelectedRows((prevSelectedRows) => {
        if(prevSelectedRows.includes(id)) {
            return prevSelectedRows.filter((rowId)=> rowId !== id);
        }else{
            return [...prevSelectedRows, id];
        }
    });
 };

    return (
        <table className="table">
            <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
        <th>First Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Room ID</th>
    <th>Check-In Date</th>
    <th>Check-Out Date</th>
    <th>Nights</th>
   
</tr>
 </thead>
 <tbody>
    {bookings.map((booking, index) => (
        <tr key={booking.id}
        onClick={()=> handleRowClick(booking.id)}
        className={selectedRows.includes(booking.id) ? "selected" : ""}>
<td>{booking.id}</td>
<td>{booking.title}</td>
<td>{booking.firstName}</td>
<td>{booking.Surname}</td>
<td>{booking.Email}</td>
<td>{booking.roomId}</td>
<td>{booking.checkInDate}</td>
<td>{booking.checkOutDate}</td>
<td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")}</td>
</tr>
    ))}
 </tbody>
        </table>
    );
};

export default SearchResults;