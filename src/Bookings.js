import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  let [getRespons, setRespons] = useState("");
  const [booking, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(respons => respons.json())
      .then(data => {
        setBookings(data);
      });
  }, [getRespons]);
  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me/delayed")
  //   .then(respons => {
  //     if (respons.status >=200 && respons.status<=299) {
  //
  //     }else {
  //       setRespons(respons.status);
  //       console.log(getRespons);
  //     }
  //   )
  //   }, [getRespons]);

  const search = searchVal => {
    // look to the first name and surname
    let data = booking.filter(
      costumer =>
        costumer.firstName === searchVal || costumer.surname === searchVal
    );

    setBookings(data);
    console.info("TO DO!", searchVal);
  };

  //it is function
  // let newBooking = booking.filter(function(date, index){
  //   return (
  //     date.firstName.toLowerCase() === searchVal.toLowerCase() || date.surname.toLowerCase() === searchVal.toLowerCase()
  //   );
  // });

  //   if (searchVal === null || searchVal === "") {
  //     setBookings(booking);
  //   }else {
  //     setBookings(data)
  //   }

  // };
  // if (!getRespons) {
  //   if (booking.length > 0) {
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={booking} />
        {/* <CustomerProfile /> */}
      </div>
    </div>
  );
};

// } else {
//   return (
//     <div className =" contanent">
//       <h3>Loading ...</h3>
//     </div>
//   );
// }
//   } else {
//   return(
//     <div className = "contanent">
//       <h2>Sorry, data not found{getRespons}</h2>
//     </div>
//   );
// };

export default Bookings;
