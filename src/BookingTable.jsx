import React from 'react';
import moment from 'moment';

const BookingTable = ({bookings}) => {
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
        <th>Check In Date</th>
        <th>Check Out Date</th>
        <th>Nights</th>
      </tr>
    </thead>
  
    <tbody>
      {bookings.map((booking) => {
        const checkInDate = moment(booking.checkInDate);
        const checkOutDate = moment(booking.checkOutDate);
        const nights = checkOutDate.diff(checkInDate, 'days');
        return ( <tr key={booking.id}>
          <td>{booking.id}</td>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
          <td>{nights}</td>
        </tr>
      );
})};
    </tbody>
  </table>
 );
};

export default BookingTable;

