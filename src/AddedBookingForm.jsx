function AddedBookingForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Title *</label>
        <input type="text" name="Title" onChange={handleChange} />
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
      </div>
      <div>
        <label htmlFor="Surname">Surname *</label>
        <input type="text" name="Surname" onChange={handleChange} />
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
      </div>
      <div>
        <label htmlFor="CheckInDate">Check in date</label>
        <input type="date" name="CheckInDate" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="CheckOutDate">Check out date</label>
        <input type="date" name="CheckOutDate" onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default AddedBookingForm;
