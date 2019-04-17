import React, { Component } from "react";
import Heading from "./Heading";
import Button from "./Button";
import TouristInfoCard from "./TouristInfoCard";
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
        <TouristInfoCard
          image="https://i0.wp.com/falkusjoinery.co.uk/wp-content/uploads/2018/06/London-city-scape-400x400.png?ssl=1"
          city="london"
          link="https://www.visitlondon.com/"
        />
        <TouristInfoCard
          image="https://media.timeout.com/images/101691121/image.jpg"
          city="Manchester"
          link="https://www.visitmanchester.com/"
        />

        <TouristInfoCard
          image="https://i2-prod.glasgowlive.co.uk/incoming/article11130566.ece/ALTERNATES/s615/GettyImages-140339251.jpg"
          city="glasgow"
          link="https://www.visitglasgow.com/"
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
