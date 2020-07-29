import React from "react";

function handleSubmit(e) {
  console.log("clicked!");
  e.preventDefault();
}

const InputForm = () => {
  return (
    <form className="d-flex-column text-center">
      <p className="lead">Enter New Booking</p>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          //   onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          //   onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          //   onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          //   onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="roomid"
          placeholder="Room No"
          //   onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="checkin"
          placeholder="Check-in Date"
          //   onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="checkout"
          placeholder="Check-out Date"
          //   onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default InputForm;
