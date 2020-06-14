import React, { useState } from "react";
const AddNew = ({ updateData }) => {
  const [addBooking, setAddBooking] = useState({
    title: "",
    firstName: "",
    surname: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });
  const submitHandel = event => {
    event.preventDefault();
    updateData(addBooking);
  };
  const handleInputChange = event => {
    const updateData = {
      ...addBooking,
      [event.target.name]: event.target.value
    };
    setAddBooking(updateData);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Add Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group" onSubmit={submitHandel}>
            <label htmlFor="customerName">New Customer</label>
            <div className="search-rows">
              <div className="box">
                <p scope="co1"> Title: </p>
                <select onChange={handleInputChange.title}>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Professor">Professor</option>
                  <option value="Prince">Prince</option>
                  <option value="Dame">Dame</option>
                  <option value="Madam">Madam</option>
                </select>
                <p> First Name:</p>
                <input type="text" onChange={handleInputChange} />
                <p scope="co1"> Sure Name:</p>
                <input type="text" onChange={handleInputChange} />
              </div>
              <div className="box">
                <p scope="co1"> Email: </p>
                <input type="Email" onChange={handleInputChange} />
                <p scope="co1"> Phone number: </p>
                <input type="Number" onChange={handleInputChange} />
              </div>
              <div className="box">
                <p scope="co1"> Room: </p>
                <select onChange={handleInputChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <p scope="co1"> Check In Date: </p>
                <input type="Date" onChange={handleInputChange} />
                <p scope="co1"> Check Out Date: </p>
                <input type="Date" onChange={handleInputChange} />
              </div>
            </div>
            <button className="btn btn-primary add">New Customer</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddNew;
