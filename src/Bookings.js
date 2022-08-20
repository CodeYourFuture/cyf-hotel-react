import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = React.useState([]);

  const [customerId, setCustomerId] = React.useState(null);
  // ^create state here so that SearchResultSingular button can use it... 2 levels deeper

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

  // console.log(bookings);

  return (
    <div className="bookings-container">
      <Search search={search} />
      <SearchResults results={bookings} setCustomerId={setCustomerId} />
      {customerId && <CustomerProfile id={customerId} />}
    </div>
  );
};

export default Bookings;
