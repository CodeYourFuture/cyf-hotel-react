import React, { useState, useEffect } from "react";
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";
import NewBookingForm from "./components/NewBookingForm";
import "./App.css";

const contactInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("Please wait the page is isLoaded");
  const [newBooking, setNewBooking] = useState({
    id: 0,
    firstName: "",
    surname: "",
    title: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  function search(e, searchVal) {
    e.preventDefault();
    let filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setFilteredBookings(filteredBookings);
  }

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then(data => {
        setBookings(data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error);
        setMessage("Something went wrong");
      });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedBooking = { ...newBooking, [name]: value };

    setNewBooking(updatedBooking);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let arrOfIds = bookings.map(({ id }) => id);
    let latestId = Math.max(...arrOfIds) + 1;
    let addedBooking = { ...newBooking, id: latestId };
    setBookings(bookings.concat(addedBooking));
  }

  return (
    <div className="App">
      <Heading />
      {isLoaded ? (
        <NewBookingForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
      <Bookings
        search={e => search(e, searchInput)}
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
        bookings={bookings}
        filteredBookings={filteredBookings}
        isLoaded={isLoaded}
        message={message}
      />
      <Restaurant />
      <TouristInfoCards />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default App;
