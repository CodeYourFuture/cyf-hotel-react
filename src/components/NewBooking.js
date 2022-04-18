import React, { useState } from "react";

function NewBooking({ results, setBookings }) {
  const [newBooking, setNewBooking] = useState({});

  return (
    <div className="order-container">
      <form
        className="form-group"
        onSubmit={e => {
          e.preventDefault();
          setBookings([...results, { ...newBooking, id: results.length + 1 }]);
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Titel:</label>
          <select
            className="form-control"
            required
            id="exampleFormControlSelect1"
            onChange={e => setNewBooking({ title: e.target.value })}
          >
            <option>Open this select menu</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Mrs">Ms</option>
            <option value="Doctor">Doctor</option>
            <option value="Prince">Prince</option>
            <option value="Dame">Dame</option>
            <option value="Madam">Madam</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">First Name:</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, firstName: e.target.value })
            }
            required
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            placeholder="Customer first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Last Name :</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, surname: e.target.value })
            }
            required
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            placeholder="Customer second name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Email address:</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, email: e.target.value })
            }
            required
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Room Number:</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, roomId: e.target.value })
            }
            required
            type="number"
            name="roomNumber"
            id="roomNumber"
            className="form-control"
            placeholder="Room Id"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Check in:</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, checkInDate: e.target.value })
            }
            required
            type="date"
            name="checkInDate"
            id="checkInDate"
            className="form-control"
            placeholder="Check In Date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Check out:</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, checkOutDate: e.target.value })
            }
            required
            type="date"
            name="checkOutDate"
            id="checkOutDate"
            className="form-control"
            placeholder="Check Out Date"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default NewBooking;
