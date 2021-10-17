import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import SubmitButton from "./SubmitButton";

// Renders bookings table, search and the booking form, called by `App.js`.
const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [existingAndNewBookings, setExistingAndNewBookings] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  // Form state values
  const [firstName, setFirstName] = useState("");
  const [title, setTitle] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bookingType, setBookingType] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  // Fetch and convert data to a usable format with error/status checking.
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      // fetch("https://cyf-react.glitch.me/error") // Left in for debug & testing
      .then(response =>
        response.status >= 200 && response.status <= 299
          ? response.json()
          : setFetchError(response.status)
      )
      .then(data => {
        setBookings(data);
        setDataFetched(true);
      })
      .catch(error => console.log(`Error received: ${error}`));
  }, []);

  // Filter booking data and set the results to state variable `filteredBookings`, called by `SearchResults`
  const search = searchVal => {
    if (searchVal === "") {
      setFilteredBookings(bookings);
    } else {
      let bookingMatches = bookings.filter(booking => {
        return (
          booking.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
          booking.surname.toUpperCase().includes(searchVal.toUpperCase())
        );
      });
      setFilteredBookings(bookingMatches);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Generate a new id using either `existingAndNewBookings` or `bookings` as a baseline, keeping
    // the generated id concurrent with existing data.
    let newId = null;
    existingAndNewBookings.length
      ? (newId = existingAndNewBookings.length + 1)
      : (newId = bookings.length + 1);

    // Pull all booking information stored in state into an object.
    const newBooking = [
      {
        id: newId,
        title: title,
        firstName: firstName,
        surname: surname,
        email: email,
        phoneNumber: phoneNumber,
        bookingType: bookingType,
        roomId: roomId,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate
      }
    ];

    // Append using spread `newBooking` to either `existingAndNewBookings` or `bookings` depending
    // on `existingAndNewBookings` length.
    setExistingAndNewBookings(
      existingAndNewBookings.length
        ? [...existingAndNewBookings, ...newBooking]
        : [...bookings, ...newBooking]
    );
  };

  // Render bookings table if fetch completed and bookings contains data. Sends either `bookings` state variable
  // or the `filteredBookings` state variable depending on whether there has been a search and `filteredBookings` contains elements.
  return (
    <div>
      {dataFetched && !fetchError ? (
        <div className="Bookings-content">
          <div className="container">
            <Search search={search} />
            <SearchResults
              results={
                filteredBookings.length
                  ? filteredBookings
                  : existingAndNewBookings.length > bookings.length
                  ? existingAndNewBookings
                  : bookings
              }
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center m-5">
            <span className="spinner-border text-primary" role="status" />
            <div className="px-3">
              {" "}
              {fetchError ? `Error Loading: ${fetchError}` : "Loading..."}
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center p-5">
        <div>
          <h2 className="text-center">Add Restaurant Booking</h2>

          <form className="Bookings-form-width" onSubmit={handleSubmit}>
            <div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>

                <select
                  id="title"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                  required
                >
                  <option value="defaultValue" defaultValue>
                    Select Title...
                  </option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Prince">Prince</option>
                  <option value="Princess">Princess</option>
                  <option value="Sir">Sir</option>
                  <option value="Dame">Dame</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>

                <input
                  id="firstName"
                  className="form-control"
                  placeholder="Joe"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={event => setFirstName(event.target.value)}
                  maxLength="20"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="surname" className="form-label">
                  Surname
                </label>

                <input
                  id="surname"
                  className="form-control"
                  placeholder="Blogs"
                  type="text"
                  name="surname"
                  value={surname}
                  onChange={event => setSurname(event.target.value)}
                  maxLength="37"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>

                <input
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  id="email"
                  className="form-control"
                  placeholder="joeblogs@nice.com"
                  type="text"
                  name="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  maxLength="37"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>

                <input
                  className="form-control"
                  type="tel"
                  name="phoneNumber"
                  placeholder="01324 716256"
                  value={phoneNumber}
                  onChange={event => setPhoneNumber(event.target.value)}
                  maxLength="13"
                  required
                />
              </div>
              <div>
                <label htmlFor="bookingType" className="form-label">
                  Booking Type
                </label>

                <select
                  id="bookingType"
                  className="form-control"
                  name="bookingType"
                  value={bookingType}
                  onChange={event => setBookingType(event.target.value)}
                  required
                >
                  <option value="defaultValue" defaultValue>
                    Select Booking Type...
                  </option>
                  <option value="StandardBooking">Standard Booking</option>
                  <option value="VIPBooking">VIP Booking</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="roomId" className="form-label">
                  Room ID
                </label>

                <input
                  className="form-control"
                  type="number"
                  placeholder="1-999"
                  name="roomId"
                  value={roomId}
                  onChange={event => setRoomId(event.target.value)}
                  maxLength="3"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="checkInDate" className="form-label">
                  Check In
                </label>
                <input
                  className="form-control"
                  type="date"
                  name="checkInDate"
                  value={checkInDate}
                  onChange={event => setCheckInDate(event.target.value)}
                  maxLength="10"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="checkOutDate" className="form-label">
                  Check Out
                </label>

                <input
                  className="form-control"
                  type="date"
                  name="checkOutDate"
                  value={checkOutDate}
                  onChange={event => setCheckOutDate(event.target.value)}
                  maxLength="10"
                  required
                />
              </div>
            </div>
            <div>
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
