import React, { useEffect, useState } from "react";
import Search from "./Search.js";

// import FakeBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults.js";
import moment from "moment";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("we will get and load the bookings from a remote API");
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <div className="App-content">
          <div className="container">
            <div className="tbl-container">
              <table className="tbl">
                <thead className="tableHead">
                  <tr>
                    <th>id</th>
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
                <tbody>
                  {bookings.map((item) => (
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
                </tbody>
                {/* <SearchResult result={Bookings} />  */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
