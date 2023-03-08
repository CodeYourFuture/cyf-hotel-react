import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import data from "./data/fakeBookings.json";
import moment from "moment";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    console.log("using API for Data");

    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBooking(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  if (bookings) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <div className="tbl-container">
            <table className="tbl">
              <thead>
                <tr>
                  <th> id</th>
                  <th>title</th>
                  <th> first name</th>
                  <th> surname</th>
                  <th> email </th>
                  <th> room id</th>
                  <th> check in date</th>
                  <th>check out date </th>
                  <th>nights</th>
                </tr>
              </thead>

              {bookings.map(item => (
                <SearchResults
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  firstName={item.firstName}
                  surname={item.surname}
                  email={item.email}
                  roomId={item.roomId}
                  checkInDate={item.checkInDate}
                  checkOutDat={item.checkOutDate}
                  nights={moment(item.checkOutDate).diff(
                    moment(item.checkInDate),
                    "days"
                  )}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Bookings;
