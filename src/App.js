import React from "react";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import cityInfo from "./components/CityInfo";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
      <Restaurant />
      <div className="d-flex justify-content-center">
        <TouristInfoCards
          img={cityInfo[0].img}
          name={cityInfo[0].name}
          url={cityInfo[0].url}
        />

        <TouristInfoCards
          img={cityInfo[1].img}
          name={cityInfo[1].name}
          url={cityInfo[1].url}
        />

        <TouristInfoCards
          img={cityInfo[2].img}
          name={cityInfo[2].name}
          url={cityInfo[2].url}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
