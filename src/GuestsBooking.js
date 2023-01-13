import React, { useState } from "react";
import moment from "moment";

const GuestsBooking = () => {
  const date = moment().format("YYYY-MM-DD");

  const [checkOutDate, setCheckOutDate] = useState(date);

  const handleDate = e => {
    setCheckOutDate(
      moment(e.target.value, "YYYY-MM-DD")
        .add(1, "days")
        .format("YYYY-MM-DD")
    );
  };
  return (
    <div className="border border-info">
      <h1 className="lead">Guests Booking Form</h1>
      <form method="POST" action="/guest/registration">
        <select className="form-control" name="title">
          <option>Mr</option>
          <option>Ms</option>
          <option>Mrs</option>
          <option>Doctor</option>
          <option>Prince</option>
          <option>Dame</option>
          <option>Madam</option>
          <option>Queen</option>
          <option>King</option>
          <option>Princess</option>
        </select>
        {/*action="/guest/registration">*/}
        <input
          className="form-control"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <input
          className="form-control"
          type="text"
          name="surName"
          placeholder="Last Name"
        />
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="form-control"
          type="text"
          name="roomID"
          placeholder="Room ID"
        />
        <input
          className="form-control"
          type="date"
          min={date}
          name="checkInDate"
          onChange={handleDate}
          placeholder="Check in Date"
        />
        <input
          className="form-control"
          type="date"
          min={checkOutDate}
          name="checkOutDate"
          placeholder="CHeck out Date"
        />
        <input type="submit" className="btn btn-primary form-control" />
      </form>
    </div>
  );
};

export default GuestsBooking;
