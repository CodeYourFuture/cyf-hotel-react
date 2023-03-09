import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  useEffect(() => {
    console.log("Fetching Information  be patient ... ");
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [bookings, setBookings] = useState([]);
  const [showList, setShowList] = useState(true);

  const search = (searchVal) => {
    const filterBookings = bookings.filter((booking) => {
      booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.lastName.toLowerCase().includes(searchVal.toLowerCase());
    });
    setBookings(filterBookings);
    setShowList(searchVal.length == 0);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={showList ? bookings : filterBookings} />

        {/* { <table className="table">}
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">FirstName</th>
              <th scope="col">SureName</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check in</th>
              <th scope="col">Check out</th>
              <th scope="col">Nights</th>
            </tr>
          </thead>
          <SearchResults results={bookings} />
        </table> */}
      </div>
    </div>
  );
};

export default Bookings;
