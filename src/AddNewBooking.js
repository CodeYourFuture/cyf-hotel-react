import { useState } from "react"

function AddNewBooking (props) {
     const [newBooking, setNewBooking] = useState(
      {
        
        title: "",
        firstName: "",
        surname: "",
        email: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: "",
      }
    );
      props.chosenID ? setNewBooking(props.chosenID) : newBooking;
      const [validationErrors, setValidationErrors] = useState({});

    function handleChange(event) {
    const updatedUserData = {
        ...newBooking,
        [event.target.name]: event.target.value,
      };
      setValidationErrors(validate(updatedUserData))
      setNewBooking(updatedUserData);
    }

    const validate = (values) => {
      const errors = {}
      const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      let date = new Date().toJSON().slice(0, 10);
      
      if (!values.title) {
        errors.title = "Title is required";
      }
      if (!values.firstName) {
        errors.firstName = "First Name is required";
      }
      if (!values.surname) {
        errors.surname = "Surname is required";
      }
      if (!values.email) {
        errors.email = "email is required";
      } else if(!regex.test(values.email)){
        errors.email = "INVALID email"
      }
      if (!values.roomId) {
        errors.roomId = "Room Number is required";
      }
      if (!values.checkInDate) {
        errors.checkInDate = "CheckIn Date is required";
      } 
      // else if(values.checkInDate < date) {
      //   errors.checkInDate = "Date can't be in the past"
      // }
      if (!values.checkOutDate) {
        errors.checkOutDate = "CheckOut Date is required";
      } 
      // else if (values.checkOutDate < date) {
      //   errors.checkOutDate = "Date can't be in the past";
      // }
      return errors;
    }

    function submitForm(event) {
      event.preventDefault();
      if(newBooking.title === ""){
        alert("Fill in the Form!")
      } else {
        //  props.adding();
         fetch("https://booking-server-98w3.onrender.com/bookings", {
           method: "POST", // or 'PUT'
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(newBooking),
         })
           .then((response) => response.json())
           .then((data) => {
             console.log(data), props.adding();
           });
      }
     
    }
    return (
      <div className="formDiv">
        <form onSubmit={submitForm}>
          <label className="form-label">
            {" "}
            Title<br></br>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newBooking.title}
              onChange={handleChange}
            ></input>
            <p className="errorMsg">{validationErrors.title}</p>
          </label>
          <label>
            {" "}
            First Name<br></br>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={newBooking["first name"]}
              onChange={handleChange}
            ></input>
            <p className="errorMsg">{validationErrors.firstName}</p>
          </label>
          <label>
            {" "}
            Surname<br></br>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={newBooking.surname}
              onChange={handleChange}
            ></input>
            <p className="errorMsg">{validationErrors.surname}</p>
          </label>
          <label className="form-label">
            {" "}
            Email<br></br>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={newBooking.email}
              onChange={handleChange}
            ></input>
            <p className="errorMsg">{validationErrors.email}</p>
          </label>
          <label>
            {" "}
            Room Number<br></br>
            <input
              type="number"
              name="roomId"
              placeholder="Room Number"
              value={newBooking["roomId"]}
              onChange={handleChange}
            ></input>
            <p className="errorMsg">{validationErrors.roomId}</p>
          </label>
          <label className="dates">
            {" "}
            Check In Date<br></br>
            <input
              type="date"
              name="checkInDate"
              placeholder="Check In Date"
              value={newBooking["checkIinDate"]}
              onChange={handleChange}
            ></input>
            <p className="errorMsg">{validationErrors.checkInDate}</p>
          </label>
          <label className="dates">
            {" "}
            Check Out Date<br></br>
            <input
              type="date"
              name="checkOutDate"
              value={newBooking["checkOutDate"]}
              onChange={handleChange}
            ></input>
            <p className="errorMsg">{validationErrors.checkOutDate}</p>
          </label>
        </form>
        <button type="submit" onClick={submitForm} disabled={Object.keys(validationErrors).length === 0 ? false : true}>
          SUBMIT
        </button>
      </div>
    );
}

export default AddNewBooking;