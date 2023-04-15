import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import moment from "moment";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage("");

    fetch("https://hotel-server-elahe.glitch.me/bookings")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setBookings(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage("Error fetching data from server");
      });
  }, []);

  const search = (searchVal) => {
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  if (isLoading) {
    return <p>Loading bookings data...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div className="tbl-container">
          <table className="tbl">
            <thead className="tableHead">
              <tr>
                <th>id</th>
                <th>title</th>
                <th>first name</th>
                <th>surname</th>
                <th>email</th>
                <th>room id</th>
                <th>check in date</th>
                <th>check out date</th>
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
                  checkOutDate={item.checkOutDate}
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
  );
};

export default Bookings;
