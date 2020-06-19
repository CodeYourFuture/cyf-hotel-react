import React, { useState } from "react";

function FormOfBooking() {
  const [bookingForm, setBookingForm] = useState();
  return (
    <form className="form-booking row">
      Title
      <input name="title" type="text" className="lg-col-2 input" />
      Name
      <input name="name" type="text" className="lg-col-4 input" />
      Surname
      <input name="surname" type="text" className="lg-col-4 input" />
      Room Id
      <input name="roomId" type="number" className="lg-col-2 input" />
      CheckInDate
      <input name="checkIn" type="date" className="lg-col-2 input" />
      CheckOutDate
      <input name="checkOut" type="date" className="lg-col-2 input" />
      <button className="lg-col-2 input">Submit</button>
    </form>
  );
}

export default FormOfBooking;
