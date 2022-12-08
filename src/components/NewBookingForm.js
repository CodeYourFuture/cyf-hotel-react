import React from "react";

const NewBookingForm = () => {
  return (
    <form className="m-5 p-5">
      <h3>New Booking Form</h3>
      <div className="row">
        <div className="form-group col mb-2">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group col mb-2">
          <label htmlFor="first-name">First Name</label>
          <input type="text" className="form-control" id="first-name" />
        </div>
        <div className="form-group col mb-2">
          <label htmlFor="surname">Surname</label>
          <input type="text" className="form-control" id="surname" />
        </div>
      </div>
      <div className="row">
        <div className="form-group col">
          <label htmlFor="room-id">Room Id</label>
          <input type="number" className="form-control" id="room-id" />
        </div>
        <div className="form-group col">
          <label htmlFor="check-in">Check in date</label>
          <input
            type="date"
            className="form-control"
            id="check-in"
            value={new Date()}
            min={new Date()}
          />
        </div>
        <div className="form-group col">
          <label htmlFor="check-out">Check out date</label>
          <input
            type="date"
            className="form-control"
            id="check-out"
            value={new Date()}
            min={new Date()}
          />
        </div>
      </div>
    </form>
  );
};

export default NewBookingForm;
