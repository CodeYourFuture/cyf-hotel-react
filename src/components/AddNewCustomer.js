import { doc } from "prettier";
import React, { useState } from "react";
import Bookings from "../Bookings";

export default function AddNewCustomer({ newID, setBookings }) {
  // const checkRequirements = () => {
  //   // if(title.length>0)
  //   //   document.getElementById("title").style.color = "Red";
  //   return title.length>0
  // }

  function useFormState(initial) {
    const [value, setValue] = useState(initial);
    function setEventValue(event) {
      setValue(event.target.value);
    }
    return [value, setEventValue];
  }
  const [title, setTitle] = useFormState("");
  const [firstName, setFirstName] = useFormState("");
  const [surname, setSurname] = useFormState("");
  const [email, setEmail] = useFormState("");
  const [phone, setPhone] = useFormState("");
  const [roomId, setRoomId] = useFormState("");
  const [checkInDate, setCheckInDate] = useFormState("");
  const [checkOutDate, setCheckOutDate] = useFormState("");
  const [vip, setVip] = useFormState("");

  function handleSubmitEvent(submitEvent) {
    submitEvent.preventDefault();
    //!checkRequirements() && exit;
    const newCustomer = {
      id: newID,
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      phoneNumber: phone,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      vip: vip
    };
    setBookings(previous => previous.concat(newCustomer));
  }
  return (
    <>
      <a
        className="btn btn-success"
        data-toggle="collapse"
        href="#collapseAdd"
        id="collapseAddBtn"
        role="button"
        aria-expanded="false"
        aria-controls="collapseAdd"
      >
        Add new customer
      </a>
      <div className="collapse form-group" id="collapseAdd">
        <form onSubmit={handleSubmitEvent}>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter customer's title."
                onChange={setTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter customer's first name."
                onChange={setFirstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                placeholder="Enter customer's surname."
                onChange={setSurname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter customer's email address."
                onChange={setEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="phone"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter customer's phone number."
                onChange={setPhone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="roomId">Room ID</label>
              <input
                type="number"
                className="form-control"
                id="roomId"
                name="roomId"
                placeholder="Enter customer's room id."
                onChange={setRoomId}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkInDate">CheckIn Date</label>
              <input
                type="date"
                className="form-control"
                id="checkInDate"
                name="checkInDate"
                placeholder="Enter customer's check-in date."
                onChange={setCheckInDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">CheckOut Date</label>
              <input
                type="date"
                className="form-control"
                id="checkOutDate"
                name="checkOutDate"
                placeholder="Enter customer's check-out date."
                onChange={setCheckOutDate}
              />
            </div>
            <div className="form-group">
              <input
                className="form-check-input"
                type="checkbox"
                id="vip"
                name="vip"
                defaultValue={undefined}
                onChange={setVip}
              />
              <label className="form-check-label" htmlFor="vip">
                {" "}
                Vip
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
