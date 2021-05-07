import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";
let TotalResult;
const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const [error, setError] = useState({ status: false, message: "" });
  const [loaded, setLoaded] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [id, setId] = useState(6);
  const [email, setEmail] = useState("default@booking.com");
  const [msg, setMsg] = useState("");
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let searchRes = booking.filter(
      book =>
        book.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        book.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    if (searchVal == "" || searchVal == " ") setBooking(TotalResult);
    else setBooking(searchRes);
  };

  useEffect(() => {
    //   fetch(
    //     `https://cyf-react.glitch.me`
    //   )
    //     .then(res => res.json())
    //     .then(data => {
    //       TotalResult = data;
    //       setBooking(TotalResult);
    //     })
    //     .catch(err => {
    //       setError({ status: true, message: err });
    //     });;
    // }, []);

    fetch(`https://cyf-react.glitch.me`)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw `${response.status} ${response.statusText}`;
      })
      .then(function(data) {
        TotalResult = data;
        setBooking(TotalResult);
        setLoaded(true);
      })
      .catch(function(err) {
        setError({ status: true, message: err });
      });
  }, []);

  function handleChange(event) {
    if (event.target.name === "firstName") {
      console.log(event.target.name);
    } else if (event.target.name === "surName") {
      setSurname(event.target.value);
    } else if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "roomId") {
      setRoomId(event.target.value);
    } else if (event.target.name === "checkinDate") {
      setCheckInDate(event.target.value);
    } else if (event.target.name === "checkoutDate") {
      setCheckOutDate(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Sending data to server");
    if (
      firstName === "" ||
      surname === "" ||
      title === "" ||
      checkInDate === "" ||
      checkOutDate === "" ||
      roomId === ""
    ) {
      setMsg("Please, enter all data");
    } else {
      setMsg("");
      fetch("https://httpstat.us/200", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          surname: surname,
          title: title,
          roomId: roomId,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      setId(id + 1);
      let tempArr = {
        checkInDate,
        checkOutDate,
        email,
        firstName,
        id,
        roomId,
        surname,
        title
      };
      console.log(tempArr);
      setBooking(booking.concat(tempArr));
      console.log(booking);
      setFirstName("");
      setSurname("");
      setTitle("");
      setCheckInDate("");
      setCheckOutDate("");
      setRoomId("");
    }
  }

  return (
    <div className="App-content">
      {error.status ? (
        <h5>{error.message}</h5>
      ) : loaded ? (
        <div className="container">
          <Search search={search} />
          <SearchResults results={booking} />
        </div>
      ) : (
        <div>
          <h4>The Data is Loading, please wait ..</h4>
        </div>
      )}
      <h5>{msg}</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="my-label">First Name</label>
          <input
            className="my-input"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
          <label className="my-label">Title</label>
          <input
            className="my-input"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <label className="my-label">Check-in Date</label>
          <input
            className="my-input"
            type="text"
            name="checkinDate"
            value={checkInDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="my-label">Surname</label>
          <input
            className="my-input"
            type="text"
            name="surName"
            value={surname}
            onChange={handleChange}
          />
          <label className="my-label">Room ID</label>
          <input
            className="my-input"
            type="text"
            name="roomId"
            value={roomId}
            onChange={handleChange}
          />
          <label className="my-label">Check-out Date</label>
          <input
            className="my-input"
            type="text"
            name="checkoutDate"
            value={checkOutDate}
            onChange={handleChange}
          />
        </div>
        <button className="my-label btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Bookings;
