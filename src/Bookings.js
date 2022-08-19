import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    // console.log(`search function ran with searchVal: ${searchVal}`);
    const filterBookings = bookings.filter(element => {
      return (
        element.firstName.toLowerCase().startsWith(searchVal.toLowerCase()) ||
        element.surname.toLowerCase().startsWith(searchVal.toLowerCase())
      );
    });
    // console.log(filterBookings)
    setBookings(filterBookings);
  };

  console.log(bookings);

  return (
    <div className="bookings-container">
      <Search search={search} />
      <SearchResults results={bookings} />
    </div>
  );
};

export default Bookings;
