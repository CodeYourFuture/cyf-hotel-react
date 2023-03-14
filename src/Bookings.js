import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import moment from "moment";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("we will get and load the bookings from a remote API");
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setSearchValue(searchVal);
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        {isLoading ? (
          <p>Loading data...</p>
        ) : (
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
                      <th>profile</th>
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
                        searchValue={searchValue}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
