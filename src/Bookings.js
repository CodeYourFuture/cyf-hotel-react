import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const search = (searchVal) => {
    setSearchData(searchVal.toLowerCase());
  };
  // `https://cyf-react.glitch.me`;
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
    .then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          setBookings(data);
          setLoading(false);
        });
      } else {
        setErrorOccurred(true);
      }
    });
  }, []);
  
  const filteredSearch = bookings.filter((booking) =>
    `${booking.firstName} ${booking.surname}`.toLowerCase().includes(searchData)
  );

  return (
    //style={{backgroundColor: selectedId === booking.id  ? "purple" : ""}}

    <div className="App-content">
      <div className="container">
        {loading && <span>loading..</span>}
        {errorOccurred && <span>error..</span>}

        <Search search={search} />
        <SearchResults results={filteredSearch} />
      </div>
    </div>
  );
};

export default Bookings;
