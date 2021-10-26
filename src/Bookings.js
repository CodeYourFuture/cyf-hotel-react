import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  // useStates for input
  const [titleInput, setTitleInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [roomIdInput, setRoomIdInput] = useState("");
  const [checkInDateInput, setCheckInDateInput] = useState("");
  const [checkOutDateInput, setCheckOutDateInput] = useState("");

  // useState for displaying Loading and error
  const [display, setDisplay] = useState(true);
  const [error, setError] = useState(null);
  // search bar to find out the details of guests
  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    const filteredVal = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    console.log("Filtered", filteredVal);

    // update bookings state to the result of filter
    setBookings(() => filteredVal);
    //console.log("bookings", bookings)
  };

  useEffect(() => {
    console.log("Page Uploaded");
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        // if there is error throw this text
        if (!response.ok) {
          throw Error("We could not fetch the data for that resource");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // when data is fetched without errors update bookings state
        setBookings(data);
        // when data is fetched without errors update display state to false (Loading won't be displayed)
        setDisplay(false);
        // when data is fetched without errors update error state to null (for sure)
        setError(null);
      })
      .catch(err => {
        // catch is used to catch thrown message
        console.log("error message: ", err.message);
        // when there is error in fetching, update error state to the message we wrote
        setError(err.message);
        // when there is error in fetching, update display state to false, so stop displaying everything
        setDisplay(false);
      });
  }, []);

  // function handling change of input
  const changeHandler = e => {
    if (e.target.name === "title") {
      //console.log("title: ", e.target.value);
      setTitleInput(e.target.value);
    } else if (e.target.name === "firstName") {
      setFirstNameInput(e.target.value);
    } else if (e.target.name === "surname") {
      setFirstNameInput(e.target.value);
    } else if (e.target.name === "email") {
      setFirstNameInput(e.target.value);
    } else if (e.target.name === "roomId") {
      setFirstNameInput(e.target.value);
    } else if (e.target.name === "checkInDate") {
      setFirstNameInput(e.target.value);
    } else if (e.target.name === "checkOutDate") {
      setFirstNameInput(e.target.value);
    }
  };

  return (
    <div className="App-content">
      {/* if there is error, error will come up, display of table will stop */}
      {error && <div>{error}</div>}
      {/* if there is no error, error will be null, displaying of table will come up */}
      {display && <div>Loading...</div>}
      {bookings && (
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />

          <form class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label for="validationCustom01">First name</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title..."
                  value={titleInput}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <input
              type="text"
              name="firstName"
              placeholder="First Name..."
              value={firstNameInput}
              onChange={changeHandler}
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname..."
              value={surnameInput}
              onChange={changeHandler}
            />
            <input
              type="email"
              name="email"
              placeholder="Email..."
              value={emailInput}
              onChange={changeHandler}
            />
            <input
              type="text"
              name="roomId"
              placeholder="Room Id..."
              value={roomIdInput}
              onChange={changeHandler}
            />
            <input
              type="text"
              name="checkInDate"
              placeholder="Check In Date..."
              value={checkInDateInput}
              onChange={changeHandler}
            />
            <input
              type="text"
              name="checkOutDate"
              placeholder="Check Out Date..."
              value={checkOutDateInput}
              onChange={changeHandler}
            />
          </form>
        </div>
      )
      // ) : (
      //   <h1>Loading...</h1>
      // )
      }
    </div>
  );
};

export default Bookings;
