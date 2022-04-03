import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults.js";
const Bookings = props => {
  const [booking, setBooking] = useState([]);
  const [bookOreder, setBookOreder] = useState(false);

  useEffect(() => {
    setBookOreder(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(json => setBooking(json));
    setBookOreder(false);
  }, []);
  if (bookOreder) {
    return <p>success loading</p>;
  }
  return (
    <div className="App-content">
      <SearchResults results={booking} />
    </div>
  );
};

export default Bookings;
