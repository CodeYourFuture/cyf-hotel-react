import React, { Component } from "react";
import Heading from "./Heading";
import Button from "./Button";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Button />
        <TouristInfoCards
          image="https://i0.wp.com/falkusjoinery.co.uk/wp-content/uploads/2018/06/London-city-scape-400x400.png?ssl=1"
          city="london"
          link="https://www.visitlondon.com/"
        />
        <TouristInfoCards
          image=""
          city="Manchester"
          link="https://www.visitlondon.com/"
        />

        <TouristInfoCards
          image="https://i0.wp.com/falkusjoinery.co.uk/wp-content/uploads/2018/06/London-city-scape-400x400.png?ssl=1"
          city="london"
          link="https://www.visitlondon.com/"
        />

        <Bookings />
        <Restaurant />

        <Footer
          footer={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789"
          ]}
        />
      </div>
    );
  }
}

export default App;
