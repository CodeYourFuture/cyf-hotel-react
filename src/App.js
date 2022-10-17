import React from "react";
import Bookings from "./Bookings";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import cityInfo from "./CityInfo";
import "./App.css";
import Footer from "./Footer";
import Search from "./Search";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
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
