import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <TouristInfoCards />
        <Bookings />
      </div>
      <Footer
        arrayProp={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
