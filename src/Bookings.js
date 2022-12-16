import React, { useState, useEffect, useContext } from "react";
import Search from "./Search.js";
import SearchResults from "./myComponents/table/SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import ThemeContext from "./myComponents/ThemeContext";
import CustomerProfile from "./myComponents/CustomerProfile";

const Bookings = () => {
  const theme = useContext(ThemeContext);
  const [bookings, setBookings] = useState([]);
  const [customerProfile, setCustomerProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me/delayed")
  //     // fetch("https://cyf-react.glitch.me/error")
  //     .then(res => res.json())
  //     .then(data => {
  //       setBookings(data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       setLoading(false);
  //       setError(true);
  //     });
  // }, []);

  useEffect(() => {
    const getBookings = async () => {
      const res = await fetch("https://cyf-react.glitch.me");
      // const res = await fetch("https://cyf-react.glitch.me/delayed");
      // const res = await fetch("https://cyf-react.glitch.me/error");

      if (res.status === 200) {
        const data = await res.json();
        setBookings(data);

        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        console.log(data);
      }
    };
    getBookings();
  }, []);
  if (loading) {
    return <h1 style={{ color: "green" }}>Loading...</h1>;
  }
  if (error) {
    return <h1 style={{ color: "red" }}>Whoops something went wrong!"</h1>;
  }
  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal ||
          booking.surname.toLowerCase() === searchVal
      )
    );
  };
  const showProfile = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);

    if (res.status === 200) {
      const data = await res.json();
      setCustomerProfile(data);
    }
  };
  // console.log(bookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} showProfile={showProfile} />
        <CustomerProfile customerProfile={customerProfile} />
      </div>
    </div>
  );
};

export default Bookings;
