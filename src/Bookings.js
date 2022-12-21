import React, { useEffect, useState } from "react";
import CustomerProfile from "./components/CustomerProfile .jsx";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const [customerProfile, setcustomerProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erorr, setErorr] = useState(false);
  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    setBooking(
      booking.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal ||
          booking.surname.toLowerCase() === searchVal
      )
    );

    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => (response.status === 200 ? response.json() : <></>))
      .then(data => {
        setLoading(false);
        setBooking(data);
      })
      .catch(erorr => console.log(erorr));
  }, []);

  const showProfile = async custmerId => {
    const res = await fetch(
      `https://cyf-react.glitch.me/customers/${custmerId}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setcustomerProfile(data);
    }
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? <h1>Loding...</h1> : <></>}
        {!loading ? (
          <>
            {" "}
            <SearchResults bookings={booking} showProfile={showProfile} />
            <CustomerProfile customerProfile={customerProfile} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Bookings;
