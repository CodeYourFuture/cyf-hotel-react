import React from "react";

function nightsInHotel(checkOutDate, checkInDate) {
    const checkOut = new Date(checkOutDate);
    const checkIn = new Date(checkInDate);
    const timeDifference = checkOut - checkIn;
    const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return nights;
}

const BookingRow = ({ booking }) => {
    const numberOfNights = nightsInHotel(booking.checkOutDate, booking.checkInDate);
    return (
        <tr>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>{numberOfNights}</td>
        </tr>
    );
};

const SearchResults = ({ bookings }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Room ID</th>
                        <th>Check-in Date</th>
                        <th>Check-out Date</th>
                        <th>Nights</th>
                    </tr>
                </thead>
                <tbody>

                    {bookings.map((booking) => (
                        <BookingRow key={booking.id} booking={booking}  />

                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default SearchResults;