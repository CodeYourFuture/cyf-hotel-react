import React, { useState } from "react";
import SearchResults from "./SearchResults.js";
import FakeData from "../data/fakeBookings.json";
const Bookings = props => {
  const [booking, setBooking] = useState(FakeData);
  // const [bookOreder, setBookOreder] = useState(false);
  // useEffect(() => {
  //   //setBookOreder(true);
  //   fetch('https://cyf-react.glitch.me/customers')
  //     .then((res) => res.json())
  //    .then((json) => setBooking(json));
  //  console.log(setBooking)
  //   setBookOreder(false);
  // }, []);
  // if (bookOreder) {
  // //   return <p>success loading</p>;
  // }
  return (
    <div className="App-content">
      <SearchResults results={booking} />
    </div>
  );
};

export default Bookings;
