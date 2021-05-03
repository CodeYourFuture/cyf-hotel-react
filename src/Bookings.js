import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState("");
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
    fetch("https://cyf-react.glitch.me")
      .then(resp => resp.json())
      .then(data => {
        setBookings(data);
      });
  }, []);
  const [buttonId, setButtonId] = useState(null);
  function changeButtonId(e) {
    setButtonId(e.target.id);
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div className="searchresults-profile-wrapper">
          <div className="search-result-table">
            <table className="table  ">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
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
    </div>
  );
};

export default Bookings;
