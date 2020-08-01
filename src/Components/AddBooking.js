import React, { useState } from "react";
import AddBookingForm from "./Bookings/AddBookingForm";

const AddBooking = ({ bookings, setBookings }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="add-booking">
      <h4 className="text-left">Add a Booking</h4>
      <hr />
      <div className="title-add-booking">
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowAddForm(!showAddForm);
          }}
        >
          Add a booking
        </button>
      </div>

      <div
        className={
          showAddForm ? "show-AddBookingForm" : "not-show-AddBookingForm"
        }
      >
        <AddBookingForm
          bookings={bookings}
          setBookings={setBookings}
          showAddForm={showAddForm}
          setShowAddForm={setShowAddForm}
        />
      </div>
    </div>
  );
};

export default AddBooking;
