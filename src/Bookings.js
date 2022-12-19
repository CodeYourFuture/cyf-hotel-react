import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResult from "./component/SearchResult.js";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";
const Bookings = () => {
  const [bookings, setBookigs] = useState([]);
  const [customerProfile, setCustomerProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const search = searchVal => {
    const searchValue = searchVal.toLowerCase();
    setBookigs(
      bookings.filter(element => {
        if (
          searchValue === "" ||
          element.firstName.toLowerCase().includes(searchValue) ||
          element.surname.toLowerCase().includes(searchValue)
        ) {
          return true;
        }
        // return false;
      })
    );
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        setBookigs(data);
        setIsLoading(false);
      });
  }, []);
  const showProfile = async id => {
    const rest = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    if (rest.status === 200) {
      const data = await rest.json();
      setCustomerProfile(data);
    }
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading && <h1 className="loading"> loading ...</h1>}
        <SearchResult results={bookings} showProfile={showProfile} />
        <CustomerProfile customerProfile={customerProfile} />
      </div>
    </div>
  );
};
export default Bookings;
