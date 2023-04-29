import React, { Suspense } from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCard from "./TouristInfoCard";
import "./App.css";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <Heading />
      <Suspense fallback={<div>Loading...</div>}>
        <TouristInfoCard />
      </Suspense>
      <Bookings />
      <Restaurant />
      <Footer newProp={address} />
    </div>
  );
};

export default App;
