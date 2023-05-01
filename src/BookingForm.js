import React, { useState, useEffect } from "react";
import validator from "validator";

const BookingForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    title: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });
  const [validInput, setValidInput] = useState(true);
  const [currentInput, setCurrentInput] = useState(null);
  const [formValid, setFormValid] = useState(false);

  const handleChange = ({ target }) => {
    const trimmedVal = target.value.trim();
    console.log(trimmedVal);
    setCurrentInput(target.name);
    switch (target.name) {
      case "firstName":
      case "surname":
        setValidInput(validator.isAlpha(trimmedVal));
        break;
      case "email":
        setValidInput(validator.isEmail(trimmedVal));
        break;
      case "roomId":
        if (
          trimmedVal > 0 &&
          trimmedVal <= 100 &&
          validator.isNumeric(trimmedVal)
        ) {
          setValidInput(true);
        } else setValidInput(false);
        break;
    }

    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      addBooking(formData);
      setFormData({
        firstName: "",
        surname: "",
        email: "",
        title: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: "",
      });
      setFormValid(false);
    }
  };

  useEffect(() => {
    const isFormValid = Object.values(validInput).every((val) => val === true);
    setFormValid(isFormValid);
  }, [validInput]);

  return (
    <form name="Booking Form" className="booking-form" onSubmit={handleSubmit}>
      <h2>Booking Form</h2>
      <label>
        Title:
        <select
          id="title"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
        </select>
      </label>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-field"
        />
        <p>
          {!validInput && currentInput === "firstName" && (
            <>Only letters allowed</>
          )}
        </p>
      </label>
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          className="form-field"
        />
        <p>
          {!validInput && currentInput === "surname" && (
            <>Only letters allowed</>
          )}
        </p>
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-field"
        />
        <p>
          {!validInput && currentInput === "email" && (
            <>Please enter a valid email</>
          )}
        </p>
      </label>
      <label>
        Room ID:
        <input
          type="text"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
          className="form-field"
        />
        <p>
          {!validInput && currentInput === "roomId" && (
            <>Please enter a number between 0 and 100</>
          )}
        </p>
      </label>
      <label>
        Check-In Date:
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          min="2023-05-01"
          onChange={handleChange}
          className="form-field"
          required
        />
      </label>
      <label>
        Check-Out Date:
        <input
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          min="2023-05-01"
          onChange={handleChange}
          className="form-field"
          required
        />
      </label>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
