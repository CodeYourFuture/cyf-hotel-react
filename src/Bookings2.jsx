import React, {useEffect, useState} from 'react';
import BookingTable from './BookingTable';
// import bookingsData from './data/fakeBookings.json';

const Bookings2 = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('https://cyf-react.glitch.me')
    .then (response => response.json())
    .then (data => {setBookings(data);
  })
  .catch(error => {
    console.error('Error fetching bookings:', error);
  });
  }, []);

  return (
    <div>
      <h1>CYF Hotel Bookings</h1>
      <BookingTable bookings={bookings} />
    </div>
  );
};



export default Bookings2;