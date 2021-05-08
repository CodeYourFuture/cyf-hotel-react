import React from "react";
const BookingForm = ({
  showDisplay,
  submitHandler,
  changeHandler,
  data,
  setShowDisplay
}) => {
  const {
    title,
    firstName,
    surname,
    roomId,
    checkInDate,
    checkOutDate,
    email
  } = data;
  return (
    <form
      className={`${showDisplay} lg-col-6 col-11 `}
      onSubmit={submitHandler}
    >
      <div>
        <label className="lable lg-col-2">Title :</label>
        <input
          onChange={changeHandler}
          name="title"
          type="text"
          className="lg-col-4 input"
          value={title}
          required
        />
        <label className="lable lg-col-2">First Name:</label>
        <input
          onChange={changeHandler}
          name="firstName"
          type="text"
          className="lg-col-4 input"
          value={firstName}
          required
        />
        <label className="lable lg-col-2">Surname:</label>
        <input
          onChange={changeHandler}
          name="surname"
          type="text"
          className="lg-col-4 input"
          value={surname}
          required
        />
        <label className="lable lg-col-2">Room Id:</label>
        <input
          onChange={changeHandler}
          name="roomId"
          type="number"
          className="lg-col-4 input"
          value={roomId}
          required
        />
        <label className="lable lg-col-2">CheckInDate:</label>
        <input
          onChange={changeHandler}
          name="checkInDate"
          type="date"
          className="lg-col-4 input"
          value={checkInDate}
          required
        />
        <label className="lable lg-col-2">CheckOutDate:</label>
        <input
          onChange={changeHandler}
          name="checkOutDate"
          type="date"
          className="lg-col-4 input"
          value={checkOutDate}
          required
        />
        <label className="lable lg-col-2">Email :</label>
        <input
          onChange={changeHandler}
          name="email"
          type="text"
          className="lg-col-4 input"
          value={email}
          required
        />
      </div>
      <div className=" form-buttons lg-col-10">
        <button className="submit-form lg-col-2">Submit</button>
        <button
          className="submit-form lg-col-2"
          type="button"
          onClick={() => setShowDisplay("hide")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
