import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [sort, setSort] = useState("asc");
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
  // function search (searchVal){}
  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    // searchVal is the value coming from search component. That is way we use Paranthasess in search component.

    // Filter
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
      setSurnameInput(e.target.value);
    } else if (e.target.name === "email") {
      setEmailInput(e.target.value);
    } else if (e.target.name === "roomId") {
      setRoomIdInput(e.target.value);
    } else if (e.target.name === "checkInDate") {
      setCheckInDateInput(e.target.value);
    } else if (e.target.name === "checkOutDate") {
      setCheckOutDateInput(e.target.value);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    //console.log(e.target["title"].value);
    setBookings([
      ...bookings,
      {
        title: e.target["title"].value,
        firstName: e.target["firstName"].value,
        surname: e.target["surname"].value,
        email: e.target["email"].value,
        roomId: e.target["roomId"].value,
        checkInDate: e.target["checkInDate"].value,
        checkOutDate: e.target["checkOutDate"].value
      }
    ]);
    //console.log(bookings);
    // After submitting, clear all inputs
    setTitleInput("");
    setFirstNameInput("");
    setSurnameInput("");
    setEmailInput("");
    setRoomIdInput("");
    setCheckInDateInput("");
    setCheckOutDateInput("");
  };
  // sort
  const sortHandler = col => {
    if (sort === "acs") {
      setBookings(prev => {
        prev.sort((a, b) => (a[col] > b[col] ? 1 : b[col] > a[col] ? -1 : 0));
      });
      // setBookings(() => sorted)
      setSort("dsc");
    }
    if (sort === "dsc") {
      setBookings(prev => {
        prev.sort((a, b) => (a[col] < b[col] ? 1 : b[col] < a[col] ? -1 : 0));
      });
      // setBookings(() => sorted);
      setSort("asc");
    }
    //prev.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
    //prev.sort((a, b) => a.title - b.title)
    console.log("sort", bookings);
  };

  return (
    <div className="App-content">
      {/* if there is error, error will come up, display of table will stop */}
      {error && <div>{error}</div>}
      {/* if there is no error, error will be null, displaying of table will come up */}
      {display && <div>Loading...</div>}
      {bookings && (
        <div className="container">
          <Search search={search} />{" "}
          {/* the value from search component will come through search prop. as input to the function search. */}
          <SearchResults results={bookings} sortHandler={sortHandler} />
          <form class="needs-validation" onSubmit={submitForm}>
            <div class="form-row">
              {/*  */}
              <div class="col-md-4 mb-3">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title..."
                  class="form-control"
                  value={titleInput}
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-4 mb-3">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name..."
                  class="form-control"
                  value={firstNameInput}
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-4 mb-3">
                <label>Surname</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname..."
                  class="form-control"
                  value={surnameInput}
                  onChange={changeHandler}
                />
              </div>
              {/*  */}
            </div>
            <div class="form-row">
              {/*  */}
              <div class="col-md-6 mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email..."
                  class="form-control"
                  value={emailInput}
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-6 mb-3">
                <label>Room Id</label>
                <input
                  type="text"
                  name="roomId"
                  placeholder="Room Id..."
                  class="form-control"
                  value={roomIdInput}
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-6 mb-3">
                <label>Check In</label>
                <input
                  type="text"
                  name="checkInDate"
                  placeholder="Check In Date..."
                  class="form-control"
                  value={checkInDateInput}
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-6 mb-3">
                <label>Check Out</label>
                <input
                  type="text"
                  name="checkOutDate"
                  placeholder="Check Out Date..."
                  class="form-control"
                  value={checkOutDateInput}
                  onChange={changeHandler}
                />
              </div>
              {/*  */}
            </div>
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
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
