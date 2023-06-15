import React from 'react';

const BookingTable = () => {
  const bookings = [
    {
      id: 1,
      title: 'Mr',
      firstName: 'Keanu',
      surname: 'Hunter',
      email: 'keanu@example.com',
      roomId: 101,
      checkInDate: '2023-06-16',
      checkOutDate: '2023-06-20',
    },
    {
      id: 2,
      title: 'Mrs',
      firstName: 'Jane',
      surname: 'Sane',
      email: 'jane@example.com',
      roomId: 102,
      checkInDate: '2023-06-18',
      checkOutDate: '2023-06-23',
    },
  ];

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
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
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
  );
};

export default BookingTable;