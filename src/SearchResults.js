
import React, {useState} from "react";
import moment from "moment";

const SearchResults=({results})=>{
 
const[selectedRow,setSelectedRow]=useState();
      
    return (
        <table className="table" style={{marginBottom:"2em"}}>
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Room ID</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Nights</th>
                </tr>
            </thead>
            <tbody>

                {results.map((booking) => {
                const checkInDate = moment(booking.checkInDate);
                const checkOutDate = moment(booking.checkOutDate);
                const nights = checkOutDate.diff(checkInDate, "days");
                let className1=""
                if (selectedRow ===booking.id){
                    className1="rowSelected"
                }
                return (
                    <tr className={className1} key={booking.id} onClick={()=>{setSelectedRow(booking.id)}}>
                    <td>{booking.id}</td>
                    <td>{booking.title}</td>
                    <td>{booking.firstName}</td>
                    <td>{booking.surname}</td>
                    <td>{booking.email}</td>
                    <td>{booking.roomId}</td>
                    <td>{checkInDate.format("YYYY-MM-DD")}</td>
                    <td>{checkOutDate.format("YYYY-MM-DD")}</td>
                    <td>{nights}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>   
    );
};

export default SearchResults;
