import React, { useState } from "react";
import AddBookingButton from "./AddBookingButton";

const AddBooking = props => {
  const [addTitle, setAddTitle] = useState("");
  const [addName, setAddName] = useState("");
  const [addSurname, setAddSurname] = useState("");
  const [addRoomId, setAddRoomId] = useState("");
  const [addCheckInDate, setAddCheckInDate] = useState("");
  const [addCheckOutDate, setAddCheckOutDate] = useState("");

  /* function handleSubmit(event) {
    event.preventDefault();  
  };
 */

  return (
    <div className="form-col mb-5 mt-5">
      <div className="page-header">
        <h4 className=" text-left">Add Booking</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col-sm-8">
          <form
            className="form-group search-box mt-5"
            onSubmit={event => {
              event.preventDefault();
              props.addBooking({
                title: addTitle,
                firstName: addName,
                surname: addSurname,
                email: "",
                roomId: addRoomId,
                checkInDate: addCheckInDate,
                checkOutDate: addCheckOutDate
              });
            }}
          >
            <label htmlFor="addCustomerName">Customer title</label>
            <div className="search-row mb-3">
              <input
                type="text"
                id="addCustomerTitle"
                className="form-control"
                placeholder="Title"
                value={addTitle}
                onChange={event => {
                  setAddTitle(event.target.value);
                }}
              />
            </div>

            <label htmlFor="addCustomerName">Customer name</label>
            <div className="search-row mb-3">
              <input
                type="text"
                id="addCustomerName"
                className="form-control"
                placeholder="Name"
                value={addName}
                onChange={event => {
                  setAddName(event.target.value);
                }}
              />
            </div>

            <label htmlFor="addCustomerSurname">Customer surname</label>
            <div className="search-row mb-3">
              <input
                type="text"
                id="addCustomerSurname"
                className="form-control"
                placeholder="Surname"
                value={addSurname}
                onChange={event => {
                  setAddSurname(event.target.value);
                }}
              />
            </div>

            <label htmlFor="addRoomId">Room Id</label>
            <div className="search-row mb-3">
              <input
                type="text"
                id="addRoomId"
                className="form-control"
                placeholder="Room id"
                value={addRoomId}
                onChange={event => {
                  setAddRoomId(event.target.value);
                }}
              />
            </div>

            <label htmlFor="addCheckInDate">Customer Check In Date</label>
            <div className="search-row mb-3">
              <input
                type="text"
                id="addCheckInDate"
                className="form-control"
                placeholder="Check In Date"
                value={addCheckInDate}
                onChange={event => {
                  setAddCheckInDate(event.target.value);
                }}
              />
            </div>

            <label htmlFor="addCheckOutDate">Customer Check Out Date</label>
            <div className="search-row mb-3">
              <input
                type="text"
                id="addCheckOutDate"
                className="form-control"
                placeholder="Check Out Date"
                value={addCheckOutDate}
                onChange={event => {
                  setAddCheckOutDate(event.target.value);
                }}
              />
            </div>

            <AddBookingButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooking;
