import React, { useState } from "react";

const AddBooking = ({ results, setBookings }) => {
  const [newBooking, setNewBooking] = useState({});

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setBookings([...results, { ...newBooking, id: results.length + 1 }]);
        }}
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <select
            className="form-control"
            id="title"
            onChange={e => setNewBooking({ title: e.target.value })}
          >
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Miss</option>
            <option>Madam</option>
            <option>Doctor</option>
            <option>Prince</option>
            <option>Dame</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            onChange={e =>
              setNewBooking({ ...newBooking, firstName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Surname"
            onChange={e =>
              setNewBooking({ ...newBooking, surname: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={e =>
              setNewBooking({ ...newBooking, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomId">Room id</label>
          <input
            type="number"
            min="0"
            className="form-control"
            id="roomId"
            placeholder="Room id"
            onChange={e =>
              setNewBooking({ ...newBooking, roomId: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check In Date</label>
          <input
            type="date"
            className="form-control"
            id="checkInDate"
            placeholder="Check In Date"
            onChange={e =>
              setNewBooking({ ...newBooking, checkInDate: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check Out Date</label>
          <input
            type="date"
            className="form-control"
            id="checkOutDate"
            placeholder="Check Out Date"
            onChange={e =>
              setNewBooking({ ...newBooking, checkOutDate: e.target.value })
            }
          />
        </div>
        <div>
          <button className="btn btn-primary">Add Booking</button>
        </div>
      </form>
    </div>
  );
};

export default AddBooking;
