export const NewBookingForm = () => {
  const [title, setTitle] = "";
  const [firstName, setFirstName] = "";
  const [surname, setSurname] = "";
  const [email, setEmail] = "";
  const [roomId, setRoomId] = "";
  const [checkInDate, setCheckInDate] = "";
  const [checkOutDate, setCheckOutDate] = "";

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    findingCustomersInfo(searchInput);
  }
  return (
    <div>
      <form>
        <label for="title">Title</label>
        <input
          value="title"
          onChange={event => setTitle(event.target.value)}
          type="text"
          id="title"
          name="title"
        />
        <label for="first-name">First Name</label>
        <input
          value="first-name"
          onChange={event => setFirstName(event.target.value)}
          type="text"
          id="first-name"
          name="first-name"
        />
        <label for="surname">Surname</label>
        <input
          value="surname"
          onChange={event => setSurname(event.target.value)}
          type="text"
          id="surname"
          name="surname"
        />
        <label for="email">Email</label>
        <input
          value="email"
          onChange={event => setEmail(event.target.value)}
          type="text"
          id="email"
          name="email"
        />
        <label for="room-id">Room Id</label>
        <input
          value="room-id"
          onChange={event => setRoomId(event.target.value)}
          type="text"
          id="room-id"
          name="room-id"
        />
        <label for="check-in-date">Check in Date</label>
        <input
          value="check-in-date"
          onChange={event => setCheckInDate(event.target.value)}
          type="text"
          id="check-in-date"
          name="check-in-date"
        />
        <label for="check-out-date">Check out Date</label>
        <input
          value="check-out-date"
          onChange={event => setCheckOutDate(event.target.value)}
          type="text"
          id="check-out-date"
          name="check-out-date"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
