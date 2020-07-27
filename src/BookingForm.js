import React from "react";

function BookingForm() {
  return (
    <>
      {/* <form>
            <div className="form-row">
            <div className="form-group col-md-6">
            <label>Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>

            </div>

            </div>
        </form> */}
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Title</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
              <option>Dame</option>
              <option>Doctor</option>
              <option>Madam</option>
              <option>Prince</option>
              <option>Earl</option>
              <option>Lady</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Surname</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="Surname"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group col-md-6">
          <label>Check-in</label>
          <input
            type="date"
            class="form-control"
            id="checkIn"
            placeholder="CheckIn Date"
          />
        </div>
        <div class="form-group col-md-6">
          <label>Check-Out</label>
          <input
            type="date"
            class="form-control"
            id="checkOut"
            placeholder="Check-Out Date"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
}

export default BookingForm;
