import React, { useState } from "react";

export default function CreateNewBooking({ setBookings }) {
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
  const [roomId, setRoomId] = useFormState("");
  const [checkInDate, setCheckInDate] = useFormState("");
  const [checkOutDate, setCheckOutDate] = useFormState("");

  function handleSubmitEvent(submitEvent) {
    submitEvent.preventDefault();
    const newCustomer = {
      id: firstName + surname, //TO-DO: WILL BE UNIQUE
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    };
    setBookings(previous => previous.concat(newCustomer));
  }

  return (
    <section className="newCustomerSection">
      <h3>
        <span className="badge badge-success">Add New Customer</span>
      </h3>
      <form onSubmit={handleSubmitEvent}>
        <div className="form-group">
          <label htmlFor="customerTitle">Title</label>
          <input
            required
            type="text"
            value={title}
            name="title"
            className="form-control"
            id="customerTitle"
            placeholder="Mr Ms Doctor etc"
            onChange={setTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            required
            type="text"
            value={firstName}
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="Enter First Name"
            onChange={setFirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            required
            type="text"
            value={surname}
            name="surname"
            className="form-control"
            id="surname"
            placeholder="Enter Surname"
            onChange={setSurname}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Addresss</label>
          <input
            required
            type="email"
            value={email}
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={setEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomId">Room Id</label>
          <input
            required
            type="text"
            value={roomId}
            name="roomId"
            className="form-control"
            id="roomId"
            placeholder="Enter roomId"
            onChange={setRoomId}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check In Date</label>
          <input
            required
            type="date"
            value={checkInDate}
            name="checkInDate"
            className="form-control"
            id="checkInDate"
            onChange={setCheckInDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check Out Date</label>
          <input
            required
            type="date"
            value={checkOutDate}
            name="checkOutDate"
            className="form-control"
            id="checkOutDate"
            onChange={setCheckOutDate}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
