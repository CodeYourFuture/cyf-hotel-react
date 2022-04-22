import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./searchResults.js";

const Bookings = () => {
  const [person, setPerson] = useState({
    firstName: "",
    surname: "",
    email: "",
    title: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });
  let [bookingData, setBookingData] = useState([]);

  let [searchVal, setSearchVal] = useState("");
  let [pending, setPending] = useState(true);

  const [error, setError] = useState(null);
  const search = searchVal => {
    setSearchVal(searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me") //use url: https://cyf-react.glitch.me/error to check for error catching and 'https://cyf-react.glitch.me/delayed' for pending req
      .then(resp => {
        if (!resp.ok) {
          throw Error("Sorry! An error has occurred while getting data");
        }
        return resp.json();
      })
      .then(data => {
        setBookingData(data);
        setPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setPending(false);
      });
  }, []);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (person.firstName && person.surname) {
      const newPerson = { ...person, id: bookingData.length + 1 };
      setBookingData([...bookingData, newPerson]);
      setPerson({
        firstName: "",
        surname: "",
        email: "",
        title: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: ""
      });
    }
    console.log(person);
    console.log(bookingData);
  };

  return !pending ? (
    <div className="App-content">
      {error && <h3>{error}</h3>}
      <div className="container">
        <Search search={search} />
        <SearchResults FakeBookings={bookingData} searchVal={searchVal} />
        <form className="register-form" onSubmit={handleSubmit}>
          <h3 className="tc">Registration Form</h3>
          <input
            type="text"
            placeholder="enter your first name"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="enter your last name"
            name="surname"
            value={person.surname}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="enter your title"
            name="title"
            value={person.title}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="enter your room id"
            name="roomId"
            value={person.roomId}
            onChange={handleChange}
          />
          <input
            placeholder="enter your check in date"
            onChange={handleChange}
            name="checkInDate"
            value={person.checkInDate}
            type="date"
          />
          <br />
          <input
            type="date"
            placeholder="check out date"
            name="checkOutDate"
            value={person.checkOutDate}
            onChange={handleChange}
          />
          <br />

          <button>Submit</button>
        </form>
      </div>
    </div>
  ) : (
    <h1>Please wait! Data is Loading in 5sec..........</h1>
  );
};

export default Bookings;
