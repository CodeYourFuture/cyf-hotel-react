import React, { useState } from "react";
import SearchResults from "./SearchResults.js";
import TableRow from "./TableRow.js";
function BookingForm({ handleNewBooking }) {
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [newBookingInfo, setNewbookingInfo] = useState({
    id: "0",
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    items: []
  });

  function handleSelect(event) {
    let newId = 5;
    newId++;
    const updatedCustomerInfo = {
      id: newId,
      title: event.target.value
    };
    setNewbookingInfo(updatedCustomerInfo);
  }

  function handleChange(event) {
    const updatedCustomerInfo = {
      ...newBookingInfo,
      [event.target.name]: event.target.value
    };
    setNewbookingInfo(updatedCustomerInfo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let items = [];
    const temp = {
      id: newBookingInfo.id,
      title: newBookingInfo.title,
      firstName: newBookingInfo.firstName,
      surname: newBookingInfo.surname,
      email: newBookingInfo.email,
      roomId: newBookingInfo.roomId,
      checkInDate: newBookingInfo.checkInDate,
      checkOutDate: newBookingInfo.checkOutDate
    };
    items.push(temp);

    setNewbookingInfo({
      items,
      id: "0",
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    });
    handleNewBooking(newBookingInfo.items);

    setSubmitClicked(true);
    // return(

    //   isSubmitClicked ? <SearchResults results={newBookingInfo.items} /> : <h1>Loading...</h1>
    // )
  }

  return (
    <>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Title</label>
            <select
              id="inputState"
              className="form-control"
              onClick={handleSelect}
            >
              <option>Choose...</option>
              <option name="title" value="Mr">
                Mr
              </option>
              <option name="title" value="Mrs">
                Mrs
              </option>
              <option name="title" value="Miss">
                Miss
              </option>
              <option name="title" value="Dame">
                Dame
              </option>
              <option name="title" value="Doctor">
                Doctor
              </option>
              <option name="title" value="Madam">
                Madam
              </option>
              <option name="title" value="Prince">
                Prince
              </option>
              <option name="title" value="Earl">
                Earl
              </option>
              <option name="title" value="Lady">
                Lady
              </option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Surname</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label>Room-ID</label>
          <input
            type="number"
            className="form-control"
            name="roomId"
            placeholder="Check-Out Date"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Check-in</label>
          <input
            type="date"
            className="form-control"
            id="checkIn"
            name="checkInDate"
            placeholder="CheckIn Date"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Check-Out</label>
          <input
            type="date"
            className="form-control"
            id="checkOut"
            name="checkOutDate"
            placeholder="Check-Out Date"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      {/* {isSubmitClicked ? (
        <SearchResults results={newBookingInfo.items} />
      ) : null} */}
    </>
  );
}

export default BookingForm;
