import "./AddBooking.css";
import React, { useState, useEffect } from "react";

const defaultState = {
    title: "",
    roomId: "",
    firstName: "",
    surname : "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: ""
  }
function AddBooking(props) {
  const [formData, setFormData] = useState(defaultState);

  function handleSubmit(event) {
    event.preventDefault();
    props.setBookings([...props.bookings, {...formData, id: props.bookings.length +1 }])
    setFormData(defaultState)
  }

  function handleChange (event){
    event.preventDefault();
    const newState = {... formData}
    newState[event.target.name] = event.target.value
    setFormData(newState)
  }

  return (
    <div id="booking" class="section">
      <div class="section-center">
        <div class="container">
          <div class="row">
            <div class="booking-form">
              <div class="form-header">
                <h1>Make your reservation</h1>
              </div>
              <form onSubmit={handleSubmit} >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter your Title"
                        value = {formData.title}
                        name = "title"
                        onChange={handleChange}
                      />
                      <span class="form-label">Title</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter you Room ID"
                        value = {formData.roomId}
                        name = 'roomId'
                        onChange={handleChange}
                      />
                      <span class="form-label">Room ID</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter your First Name"
                        value = {formData.firstName}
                        name = 'firstName'
                        onChange={handleChange}
                      />
                      <span class="form-label">First Name</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter you Last Name"
                        onChange={handleChange}
                        value = {formData.surname}
                        name = "surname"
                      />
                      <span class="form-label">Last Name</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input class="form-control" type="date" required onChange={handleChange}  value = {formData.checkInDate} name = "checkInDate"/>
                      <span class="form-label">Check In</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input class="form-control" type="date" required onChange={handleChange} value = {formData.checkOutDate} name = "checkOutDate"/>
                      <span class="form-label">Check out</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="email"
                        placeholder="Enter your Email"
                        value = {formData.email}
                        name = "email"
                        onChange={handleChange}
                      />
                      <span class="form-label">Email</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="tel"
                        placeholder="Enter you Phone"
                        value = {formData.phone}
                        name = "phone"
                        onChange={handleChange}
                      />
                      <span class="form-label">Phone</span>
                    </div>
                  </div>
                </div>
                <div class="form-btn">
                  <button class="submit-btn">Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBooking;
