import React, { useState } from "react";
import Bookings from "./Bookings";
import "./App.css";
import "./Heading";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import ErrorMessage from "./ErrorMessage";

const App = () => {
  let array = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  const [error, setError] = useState(false);

  return (
    <div className="App">
      {error ? (
        <ErrorMessage />
      ) : (
        <div>
          <Heading />
          <TouristInfoCards />
          <Bookings setError={setError} />
          <Restaurant />
          <Footer footerList={array} />
        </div>
      )}
    </div>
  );
};

export default App;
