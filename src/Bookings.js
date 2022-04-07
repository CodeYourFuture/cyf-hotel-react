import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialData, setInitialData] = useState();
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(data => data.json())
      .then(data => {
        setBookings(data);
        setInitialData(data);
      })
      .catch(err => console.log(err));
  }, []);
  const search = searchVal => {
    setBookings(
      initialData.filter(
        value =>
          value.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          value.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  const HandleErrorsAndLogin = prop => {
    console.log(prop, "prop");
    if (prop.data) {
      return <SearchResults results={bookings} />;
    } else if (prop.data?.error) {
      return <p>Error</p>;
    } else {
      return <p>Loading...</p>;
    }
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <HandleErrorsAndLogin data={initialData} />
      </div>
    </div>
  );
};

export default Bookings;
