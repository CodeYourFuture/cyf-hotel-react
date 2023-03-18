import datepicker from "js-datepicker";
import { useEffect } from "react";

function AddedBookingForm({ handleSubmit, handleChange, errors }) {
  useEffect(() => {
    const checkInPicker = datepicker(".start", {
      id: 1,
      onSelect: (instance, date) => {
        const event = {
          target: {
            name: "CheckInDate",
            value: date
              .toLocaleDateString()
              .split("/")
              .reverse()
              .join("-")
          }
        };
        handleChange(event);
      }
    });
    const checkOutPicker = datepicker(".end", {
      id: 1,
      onSelect: (instance, date) => {
        const event = {
          target: {
            name: "CheckOutDate",
            value: date
              .toLocaleDateString()
              .split("/")
              .reverse()
              .join("-")
          }
        };
        handleChange(event);
      }
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Title *</label>
        <input type="text" name="Title" onChange={handleChange} />
        <p>{errors.Title}</p>
      </div>
      <div>
        <label htmlFor="FirstName">First name *</label>
        <input
          id="F"
          type="text"
          name="FirstName"
          onChange={handleChange}
          required
        />
        <p>{errors.FirstName}</p>
      </div>
      <div>
        <label htmlFor="Surname">Surname *</label>
        <input type="text" name="Surname" onChange={handleChange} />
        <p>{errors.Surname}</p>
      </div>

      <div>
        <label htmlFor="Email">Email *</label>
        <input
          type="email"
          name="Email"
          onChange={handleChange}
          pattern=".+@.+\..+"
          required
        />
        <p>{errors.Email}</p>
      </div>

      <div>
        <label htmlFor="RoomID">Room ID</label>
        <input
          type="number"
          min={0}
          max={100}
          name="RoomID"
          onChange={handleChange}
        />
        <p>{errors.RoomID}</p>
      </div>
      <div>
        <label htmlFor="CheckInDate">Check in date</label>
        <input className="start" id="1" type="text" name="CheckInDate" />
        <p>{errors.CheckInDate}</p>
      </div>
      <div>
        <label htmlFor="CheckOutDate">Check out date</label>
        <input
          className="end"
          id="1"
          type="text"
          name="CheckOutDate"
          onChange={handleChange}
        />
        <p>{errors.CheckOutDate}</p>
      </div>
      <button className="pointer">Submit</button>
    </form>
  );
}

export default AddedBookingForm;
