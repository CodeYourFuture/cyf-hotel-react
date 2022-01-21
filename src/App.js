import React from "react";

import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Search from "./Search";
import Heading from "./Heading";

<Heading />;
const Footer = props => {
  return (
    <div>
      <ul className="footer">
        {props.info.map(element => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  return (
    // <div className="App-content">
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
    // </div>
  );
};

export default App;
