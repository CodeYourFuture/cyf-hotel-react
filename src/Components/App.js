import React, { useState } from "react";
import Heading from "./Partials/Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Partials/Footer";
import "../Styles/App.css";
import Restaurant from "./Restaurant";
import NewBooking from "./Bookings/NewBooking";

const App = () => {
  const [dataObj, setDataObj] = useState([]);
  console.log("This is data object on initial load", dataObj);
  const dataConvert = dataArray => {
    console.log("This is the function return", dataArray);
    console.log("This is the state before set", dataObj);
    setDataObj([...dataObj, ...dataArray]);
    console.log("This is data array after set", dataArray);
    console.log("This happens before React changes the state", dataObj);
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
