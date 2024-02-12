import React, { useState } from 'react';

const AddBookingForm = ({ onAddBooking }) => {
    const [newBooking, setNewBooking] = useState({
        title: '',
        firstName: '',
        surname: '',
        email: '',
        roomId: '',
        checkInDate: '',
        checkOutDate: '',
    });

    const handleChange = (e) => {
        setNewBooking({ ...newBooking, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBooking),
            });
            const data = await response.json();
            onAddBooking(data); // Update the bookings state with the new data
            setNewBooking({
                title: '',
                firstName: '',
                surname: '',
                email: '',
                roomId: '',
                checkInDate: '',
                checkOutDate: '',
            });
        } catch (error) {
            console.error('Error adding booking:', error);
        }
    };

    return (
        <form className="new-booking" onSubmit={handleSubmit}>
            {/* Input fields for booking data */}
            {/* Submit button */}
        </form>
    );
};

export default AddBookingForm;
