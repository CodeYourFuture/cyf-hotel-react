import React from "react";
import TouristInfoCards from "./component/TouristInfoCards";
import Bookings from "./component/Bookings";
import Footer from "./component/Footer"
import "./App.css";
import Header from "./component/Header";
import Restaurant from "./component/Restaurant";
const App = () => {



  return (
    <>
    <div className="App">
      <Header/>
      <div className="touristInfoCard">
        <TouristInfoCards descriptions="Glasgow is one of Europe's most vibrant and cosmopolitan cities. It boasts world famous art collections, the best shopping in the UK outside of London, first-class sports and leisure facilities, a vast array of restaurants and bars, and the most vibrant and exciting nightlife in Scotland." name="Glasgow" img="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS-MTkd_tz-3PjogOAt9GSX-d0URIvsjNkN7d32_UOVQsPVZIX3mFYbvH7RfvWc3nAyq9ZDrCx1nwBldO7SiIRtIXzL3w" />
        <TouristInfoCards descriptions="What is London? London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre. " name="London" img="https://lh5.googleusercontent.com/p/AF1QipPNCWInlw7BoFL1uPM16LNueMYCyx6TruCivY5i=w548-h318-n-k-no" />
        <TouristInfoCards descriptions="Manchester is the nucleus of the largest metropolitan area in the north of England, and it remains an important regional city, but it has lost the extraordinary vitality and unique influence that put it at the forefront of the Industrial Revolution." name="Manchester" img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1"/>
      </div>
      <Bookings />
      <Restaurant />
      <Footer/>
   </div>
   </>
  );
};

export default App;
