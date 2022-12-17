import React from "react";
import Footer from "./Footer";
import Bookings from "./Bookings";
import { useEffect } from "react";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Resturant from "./Restaurant";
// import SearchResults from "./SearchResults";
const App = () => {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
      });
  }, []);

  //  return <div className="App">App</div>;

  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Resturant />
      <Footer />
    </div>
  );
};

export default App;
