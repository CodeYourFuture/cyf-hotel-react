import React, { useState } from "react";
import moment from "moment/moment";
import CostumerProfile from "./CostumerProfile";

const SearchResults = (props) => {
   const [selectedRows, setSelectedRows] = useState([]); 
   const [selectedCostumerId, setSelectedCostumerId] = useState(null);

   const handleShowProfile = (id) => {
    setSelectedCostumerId(id);
   }

   const selectedClicks = (bookingId) => {
    setSelectedRows((selectedClickedRows) => {
        if (selectedClickedRows.includes(bookingId)) {
            return selectedClickedRows.filter((id) => id !== bookingId)
        } else {
            return [...selectedClickedRows, bookingId];
        }
    });
    }
    

   return(
    <div>
        <CostumerProfile id={selectedCostumerId}/>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Room ID</th>
                    <th scope="col">CheckIn</th>
                    <th scope="col">CheckOut</th>
                    <th scope="col">Nights</th>
                    <th scope="button">Costumer Profile</th>
                </tr>
            </thead>
            <tbody className="tbody">
                {props.bookings.map((booking, key) => (
                <tr 
                key={booking.id}
                className={selectedRows.includes(booking.id) ? "selected-row" : ""}
                onClick={() => selectedClicks(booking.id)}>
                    <th scope="row">{booking.title}</th>
                     <td>{booking.firstName}</td>
                     <td>{booking.surname}</td>
                     <td>{booking.email}</td>
                     <td>{booking.roomId}</td>
                     <td>{booking.checkInDate}</td>
                     <td>{booking.checkOutDate}</td>
                     <td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")}</td>
                    <td>
                        <button onClick={() => handleShowProfile(booking.id)}>Show Profile</button>
                    </td>
                </tr>
                ))}
             </tbody>
        </table>     
        </div>
     )
};
export default SearchResults;