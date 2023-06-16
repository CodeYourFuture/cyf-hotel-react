import React from "react";
import FakeBookings from "./data/fakeBookings.json";

const SearchResults = (props) => {
     return(
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
                </tr>
            </thead>
            <tbody className="tbody">
                {props.bookings.map((booking, key) => (
                <tr key={booking.id}>
                    <th scope="row">{booking.title}</th>
                     <td>{booking.firstName}</td>
                     <td>{booking.surname}</td>
                     <td>{booking.email}</td>
                     <td>{booking.roomId}</td>
                     <td>{booking.checkInDate}</td>
                     <td>{booking.checkOutDate}</td>
                </tr>
                ))}
             </tbody>
        </table>     
     )
}

export default SearchResults;