import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [input, setInput] = useState([]);
  useEffect(function() {
    fetch("https://cyf-react.glitch.me")
      .then(function(obj) {
        return obj.json();
      })
      .then(function(data) {
        setInput(data);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search />
        {<SearchResults people={input} />}
      </div>
    </div>
  );
};

export default Bookings;
