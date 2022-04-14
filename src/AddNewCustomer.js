import React from "react";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

const AddNewCustomer = props => {
  const inputChangeHandler = e => {
    const value = e.target.value;
  };
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
        <form
          className="card card-body"
          onSubmit={event => {
            const newData = {};
            const nnewData = new FormData(event.target);
            const value = Object.fromEntries(nnewData.entries());
            newData["id"] = parseInt(value.id);
            newData["title"] = value.title;
            newData["firstName"] = value.firstName;
            newData["surname"] = value.surname;
            newData["email"] = value.email;
            newData["roomId"] = value.roomId;
            newData["checkOutDate"] = value.checkOutDate;
            newData["checkInDate"] = value.checkInDate;

            props.handleClick(newData);
            event.preventDefault();
          }}
        >
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                placeholder="ID"
                id="id"
                name="id"
                className="form-control"
                onChange={inputChangeHandler}
                value="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter customer's title."
                onChange={inputChangeHandler}
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
                onChange={inputChangeHandler}
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
                onChange={inputChangeHandler}
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
                onChange={inputChangeHandler}
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
                onChange={inputChangeHandler}
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
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkInDate">CheckIn Date</label>
              <input
                type="date"
                className="form-control"
                id="checkInDate"
                name="checkInDate"
                defaultValue={today}
                placeholder="Enter customer's check-in date."
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">CheckOut Date</label>
              <input
                type="date"
                className="form-control"
                id="checkOutDate"
                name="checkOutDate"
                defaultValue={today}
                placeholder="Enter customer's check-out date."
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-check-input"
                type="checkbox"
                id="vip"
                name="vip"
                defaultValue={undefined}
                onChange={inputChangeHandler}
              />
              <label className="form-check-label" htmlFor="vip">
                {" "}
                Vip
              </label>
            </div>
          </div>
          <div>
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewCustomer;
