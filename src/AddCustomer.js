import React, { useState } from "react";

function AddBooking({ results, setBookings }) {
  const [newBooking, setNewBooking] = useState({});
  console.log(newBooking);
  return (
    <div className="container">
      <form
        className="form-group search-box"
        onSubmit={e => {
          e.preventDefault();
          setBookings([...results, { ...newBooking, id: results.length + 1 }]);
        }}
      >
        <label htmlFor="customerName">Add New Customer </label>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Select</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={e => setNewBooking({ title: e.target.value })}
          >
            <option>Ms</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Doctor</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">First Name</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, firstName: e.target.value })
            }
            type="text"
            name="firstName"
            id="customerName"
            className="form-control"
            placeholder="Customer first name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Second Name</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, surname: e.target.value })
            }
            type="text"
            name="secondName"
            id="customerName"
            className="form-control"
            placeholder="Customer second name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, email: e.target.value })
            }
            type="email"
            name="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Room Id</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, roomId: e.target.value })
            }
            type="number"
            name="checkOutDate"
            id="customerName"
            className="form-control"
            placeholder="Room Id"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Check In Date</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, checkInDate: e.target.value })
            }
            type="date"
            name="checkInDate"
            id="customerName"
            className="form-control"
            placeholder="Check In Date"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Check Out Date</label>
          <input
            onChange={e =>
              setNewBooking({ ...newBooking, checkOutDate: e.target.value })
            }
            type="date"
            name="checkOutDate"
            id="customerName"
            className="form-control"
            placeholder="Check Out Date"
          />
        </div>
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
}

export default AddBooking;
