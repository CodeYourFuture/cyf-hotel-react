import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";
import Spinner from "react-bootstrap/Spinner";
import FakeBookings from "./data/fakeBookings.json";
import BookingForm from "./BookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState("");
  const [buttonId, setButtonId] = useState(null);
  const [loading, setLoading] = useState(true);

  // const [title, setTitle] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [roomId, setRoomId] = useState("");
  // const [checkInDate, setCheckInDate] = useState("");
  // const [checkOutDate, setCheckOutDate] = useState("");

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
        booking.surname.toUpperCase().includes(searchVal.toUpperCase())
      );
    });
    setBookings(filteredBookings);
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(resp => resp.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      });
  }, []);
  function changeButtonId(e) {
    setButtonId(e.target.id);
  }
  //  function handleFormChange(event) {
  //    if (event.target.name === "title") {
  //      setTitle(event.target.value);
  //      console.log(event.target.value);
  //    } else if (event.target.name === "firstName") {
  //      setFirstName(event.target.value);
  //      console.log(event.target.value);
  //    } else if (event.target.name === "lastName") {
  //      setLastName(event.target.value);
  //      console.log(event.target.value);
  //    } else if (event.target.name === "roomId") {
  //      setRoomId(event.target.value);
  //      console.log(event.target.value);
  //    } else if (event.target.name === "checkInDate") {
  //      setCheckInDate(event.target.value);
  //      console.log(event.target.value);
  //    } else if (event.target.name === "checkOutDate") {
  //      setCheckOutDate(event.target.value);
  //      console.log(event.target.value);
  //    }
  //  }

  //  function submitHandler(event) {
  //    event.preventDefault();
  //    console.log("submitted");
  //  }
  const [columnClicked, setColumnClicked] = useState([
    false,
    false,
    false,
    false
  ]);

  function columnSorter(e) {
    console.log(typeof e.target.id);
    if (e.target.id == 0) {
      if (columnClicked[0] === false) {
        setColumnClicked([true, false, false, false]);
        let newBookings = bookings.sort((book1, book2) => {
          return book2.id - book1.id;
        });
        newBookings = [...newBookings];
        setBookings(newBookings);
      } else {
        setColumnClicked([false, false, false, false]);
        let newBookings = bookings.sort((book1, book2) => {
          return book1.id - book2.id;
        });
        newBookings = [...newBookings];
        setBookings(newBookings);
      }
    } else if (e.target.id == 1) {
      setColumnClicked([false, true, false, false]);
      let newBookings = bookings.sort((book1, book2) => {
        return book1.firstName.localeCompare(book2.firstName);
      });
      newBookings = [...newBookings];
      setBookings(newBookings);
    } else if (e.target.id == 2) {
      setColumnClicked([false, false, true, false]);
      let newBookings = bookings.sort((book1, book2) => {
        return book1.surname.localeCompare(book2.surname);
      });
      newBookings = [...newBookings];
      setBookings(newBookings);
    } else if (e.target.id == 3) {
      setColumnClicked([false, false, false, true]);
      let newBookings = bookings.sort((book1, book2) => {
        return book1.email.localeCompare(book2.email);
      });
      newBookings = [...newBookings];
      setBookings(newBookings);
    }
    // console.log(newBookings);
    // setBookings(newBookings);
  }
  console.log(bookings);
  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  } else {
    return (
      <div className="App-content">
        <div className="">
          <Search search={search} />
          <div className="searchresults-profile-wrapper">
            <div className="search-result-table">
              <table className="table  ">
                <thead>
                  <tr>
                    <th onClick={columnSorter} id="0" scope="col">
                      id
                    </th>
                    <th onClick={columnSorter} id="1" scope="col">
                      First Name
                    </th>
                    <th onClick={columnSorter} id="2" scope="col">
                      Last Name
                    </th>
                    <th onClick={columnSorter} id="3" scope="col">
                      Email
                    </th>
                    <th scope="col">Room Id</th>
                    <th scope="col">Check In Date</th>
                    <th scope="col">Check Out date</th>
                    <th scope="col">Number of Nights</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings
                    ? bookings.map((booking, index) => {
                        return (
                          <SearchResults
                            bookings={bookings}
                            setBookings={setBookings}
                            changeButtonId={changeButtonId}
                            results={booking}
                            key={index}
                          />
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
            <CustomerProfile buttonId={buttonId} />
          </div>
        </div>
        <BookingForm bookings={bookings} setBookings={setBookings} />
      </div>
    );
  }
};

export default Bookings;
