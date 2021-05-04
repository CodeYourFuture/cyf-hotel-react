import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

//import SearchResults from "./SearchResults";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        city="glassgow"
        cityInfo="This is a good city"
        cityImg="https://ctfimages.intoglobal.com/xw2h6mjophtz/1TYSrypcMzY3kKddGhuZo1/e69f694bcf4f68aa214016cfc4f4259f/manchester_Skyline__Craig_1_small.jpg?w=1255&q=80"
      />
      <TouristInfoCards
        city="London"
        cityImg="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg"
        cityInfo="London is full of business"
      />
      <TouristInfoCards
        city="Manchester"
        cityImg="https://ctfimages.intoglobal.com/xw2h6mjophtz/1TYSrypcMzY3kKddGhuZo1/e69f694bcf4f68aa214016cfc4f4259f/manchester_Skyline__Craig_1_small.jpg?w=1255&q=80"
        cityInfo="Funy english accent"
      />
      <Bookings />
      <Restaurant />
      <Footer
        contactInfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}

        // <SearchResults  />
      />
    </div>
  );
};

export default App;
