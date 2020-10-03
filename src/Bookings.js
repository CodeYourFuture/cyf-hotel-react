import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // useEffect(() => {
  //   console.log("@@@@@@@@@use effect");
  //   fetch("https://cyf-react.glitch.me")
  //     .then(function(obj) {
  //       return obj.json();
  //     })
  //     .then(function(data) {

  //      setBookings(booking1.concat(data));

  //     // console.log("++++++++++++++++++++++"+booking1[0].title)
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // });

  return (
    <div className="App-content">
      <div className="container">
        <Search />
        {<SearchResults people={fakeBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
