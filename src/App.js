import React from "react";
import allFiles from "./HotelReact.js"
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <allFiles.Heading />
      <allFiles.TouristInfoCards />
      <Bookings />
      
      <allFiles.Footer
        footer={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
