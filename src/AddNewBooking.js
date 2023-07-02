import { useState } from "react"

function AddNewBooking (props) {
     const [newBooking, setNewBooking] = useState(
      {
        id: 6,
        title: "",
        firstName: "",
        surname: "",
        email: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: "",
      }
    );
      
    function handleChange(event) {
    const updatedUserData = {
        ...newBooking,
        [event.target.name]: event.target.value,
      };
      setNewBooking(updatedUserData);
    }

    function submitForm(event) {
      event.preventDefault();
      props.adding(newBooking);
      
    }
    return (
      <div className="formDiv">
        <form onSubmit={submitForm}>
          <label>
            {" "}
            Title
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newBooking.title}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            {" "}
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={newBooking["first name"]}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            {" "}
            Surname
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={newBooking.surname}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            {" "}
            Email
            <input
              type="email"
              name="email"
              placeholder="email"
              value={newBooking.email}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            {" "}
            Room Number
            <input
              type="number"
              name="roomId"
              placeholder="Room Number"
              value={newBooking["roomId"]}
              onChange={handleChange}
            ></input>
          </label>
          <label className="dates">
            {" "}
            Check In Date
            <input
              type="date"
              name="checkInDate"
              placeholder="Check In Date"
              value={newBooking["checkIinDate"]}
              onChange={handleChange}
            ></input>
          </label>
          <label className="dates">
            {" "}
            Check Out Date
            <input
              type="date"
              name="check out date"
              placeholder="checkOutDate"
              value={newBooking["checkOutDate"]}
              onChange={handleChange}
            ></input>
          </label>
        </form>
        <button type="submit" onClick={submitForm}>
          SUBMIT
        </button>
      </div>
    );
}

export default AddNewBooking;