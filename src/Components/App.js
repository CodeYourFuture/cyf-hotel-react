import React from "react";
import Heading from "./Partials/Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Partials/Footer";
import "../Styles/App.css";
import Restaurant from "./Restaurant";
import NewBooking from "./Bookings/NewBooking";

let counter = 0
/*
On click the dataConvert is called - I need to use this event to pass data to bookings and then add it to the table,
by removing the useState from App.js I prevent the issue of the state being reset every-time it loads,
 the counter might still be useful in this process.
*/

const App = () => {
  const dataConvert = dataArray => {
    if (counter === 0){
    counter++;
    return console.log("counter updated", counter);
    }
  };
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <NewBooking DataFunc={dataConvert} />
      <Footer
        Address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
