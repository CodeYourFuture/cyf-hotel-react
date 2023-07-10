import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
const bookings=props.results;
//  const [selectedRows, setSelectedRows]=useState([]);
 const [selectedCustomerId, setSelectedCustomerId] = useState(null);
 const handleRowClick = (id) => {
setSelectedCustomerId(id); 
 };
// setSelectedRows((prevSelectedRows) => {
//         if(prevSelectedRows.includes(id)) {
//             return prevSelectedRows.filter((rowId)=> rowId !== id);
//         }else{
//             return [...prevSelectedRows, id];
//         }
//     });
// };

    return (
        <div>
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
    <th>Profile</th>
   
</tr>
 </thead>
 <tbody>
    {bookings.map((booking, index) => (
        <tr key={booking.id}>
        {/* onClick={()=> handleRowClick(booking.id)}
        className={selectedRows.includes(booking.id) ? "selected" : ""}> */}
<td>{booking.id}</td>
<td>{booking.title}</td>
<td>{booking.firstName}</td>
<td>{booking.surname}</td>
<td>{booking.email}</td>
<td>{booking.roomId}</td>
<td>{booking.checkInDate}</td>
<td>{booking.checkOutDate}</td>
<td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")}</td>
<td><button onClick={() => handleRowClick(booking.id)}>Show profile</button></td>
</tr>
    ))}
 </tbody>
 </table>
 {selectedCustomerId && <CustomerProfile id={selectedCustomerId} />}
   </div>    
    );
};

export default SearchResults;