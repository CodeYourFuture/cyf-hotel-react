import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";
// import SearchResults from "./SearchResults.js";

const App = () => {
  return (
    <div className="App">
      <Heading className="App-header" />
      <div className="card-container">
        <TouristInfoCards
          src="https://upload.wikimedia.org/wikipedia/commons/3/31/NS5765_The_Clyde%2C_and_%27Squinty%27_bridge%2C_Glasgow.jpg"
          cityName="Glasgow"
          cityInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          href="https://peoplemakeglasgow.com/"
          buttonText="More Information"
        />
        <TouristInfoCards
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/Deansgate%2C_Manchester_-_geograph.org.uk_-_2121040.jpg"
          cityName="Manchester"
          cityInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          href="https://www.visitmanchester.com/"
          buttonText="More Information"
        />
        <TouristInfoCards
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/Volvo_B7TL_-_route_159_London.JPG"
          cityName="London"
          cityInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          href="https://www.visitlondon.com/"
          buttonText="More Information"
        />
      </div>
      <Bookings />

      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
