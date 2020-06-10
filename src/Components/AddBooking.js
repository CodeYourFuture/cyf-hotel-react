import React from "react";

const AddBooking = () => {
  return (
    <div className="App-content">
      <div className="container">
        <div className="add-booking">
          <div className="title-add-booking">
            <h4 className="text-left">Add a Booking</h4>
            <hr />
            <button className="btn btn-primary">Add a booking</button>
          </div>

          <div className="form-booking">
            <form>
              <div>
                <input name="title" placeholder="Title" type="text" />
              </div>
              <div>
                <input name="firstName" placeholder="First name" type="text" />
              </div>
              <div>
                <input name="surname" placeholder="Surname" type="text" />
              </div>
              <div>
                <input name="room id" placeholder="Room id" type="number" />
              </div>
              <div>
                <input
                  name="check in date"
                  placeholder="Check in"
                  type="date"
                />
              </div>
              <div>
                <input
                  name="check out date"
                  placeholder="Check out"
                  type="date"
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AddBooking;
