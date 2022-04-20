import React, { useState } from "react";

export default function AddBooking({ addNewBooking }) {
  const [formBooking, setFormBooking] = useState({});
  const handleInputValue = e => {
    let name = e.target.name;
    let value = e.target.value;
    setFormBooking({ ...formBooking, [name]: value });
    console.log(formBooking);
  };
  const submitAddBooking = e => {
    e.preventDefault();
    addNewBooking(formBooking);
  };
  return (
    <div className="form-container">
      <form>
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            onChange={handleInputValue}
            type="text"
            name="title"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label for="firstName" className="form-label">
            Name
          </label>
          <input
            required
            onChange={handleInputValue}
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
          />
        </div>
        <div className="mb-3">
          <label for="lastName" className="form-label">
            Surname
          </label>
          <input
            required
            onChange={handleInputValue}
            type="text"
            name="surname"
            className="form-control"
            id="lastName"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            required
            onChange={handleInputValue}
            type="email"
            name="email"
            className="form-control"
            id="email"
          />
        </div>

        <div className="mb-3">
          <label for="roomId" className="form-label">
            Room_Id
          </label>
          <input
            onChange={handleInputValue}
            type="number"
            name="roomId"
            className="form-control"
            id="roomId"
          />
        </div>
        <div className="mb-3">
          <label for="checkInDate" className="form-label">
            Check In date
          </label>
          <input
            onChange={handleInputValue}
            type="text"
            placeholder="yyyy-mm-dd"
            name="checkInDate"
            className="form-control"
            id="checkInDate"
          />
        </div>
        <div className="mb-3">
          <label for="checkOutDate" className="form-label">
            Check Out date
          </label>
          <input
            placeholder="yyyy-mm-dd"
            onChange={handleInputValue}
            name="checkOutDate"
            className="form-control"
            id="checkOutDate"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitAddBooking}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
