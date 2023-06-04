import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";


const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel DJMS</header> */}
      <Heading />

      <Bookings />
      <TouristInfoCards />
      <Footer
        addressDetail={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
