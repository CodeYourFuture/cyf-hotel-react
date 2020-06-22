import React, { useState } from "react";
import AddBookingForm from "./Bookings/AddBookingForm";

const AddBooking = ({ bookings, setBookings }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [removeInputValue, setRemoveInputValue] = useState("");

  function removeBooking(roomID) {
    var filteredBooking = bookings.filter(
      booking => booking.roomId.toString() !== roomID
    );
    setBookings(filteredBooking);
  }

  function handleChange(e) {
    setRemoveInputValue(e.target.value);
  }

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
        <div className="btn-remove">
          <button
            className="btn btn-primary"
            onClick={() => {
              removeBooking(removeInputValue);
            }}
          >
            Remove a booking
          </button>

          <input onChange={handleChange} placeholder="enter room id" />
        </div>
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
