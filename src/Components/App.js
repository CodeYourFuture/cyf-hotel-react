import React from "react";
import Heading from "./Partials/Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Partials/Footer";
import "../Styles/App.css";
import Restaurant from "./Restaurant";
import NewBooking from "./Bookings/NewBooking";

let counter = 0

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
