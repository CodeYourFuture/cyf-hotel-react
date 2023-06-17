
import react from "react";

const SearchResults=({hotelBookings})=>{
    return (
        <table className="table table-striped" style={{marginBottom:"2em"}}>
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
                </tr>
            </thead>
            <tbody>
                {hotelBookings.map(booking=>(<tr  key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.title}</td>
                    <td>{booking.firstName}</td>
                    <td>{booking.surname}</td>
                    <td>{booking.email}</td>
                    <td>{booking.roomId}</td>
                    <td>{booking.checkInDate}</td>
                    <td>{booking.checkOutDate}</td>
                </tr>))}
            </tbody>
        </table>   
    );
};

export default SearchResults;
