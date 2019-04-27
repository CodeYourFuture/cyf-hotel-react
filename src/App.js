import React, { Component } from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Header from "./Heading";
import Footer from "./Footer";
import "./App.css";

const CityCards = [{
  "id":1,
  "name": "Glaskow", 
  "imageSource": "https://peoplemakeglasgow.com/images/Clydeside1.jpg", 
  "cityText": "Glasgow is one of Europe's most vibrant and dynamic cities, that's been voted the world's friendliest city.",
  "link": "https://peoplemakeglasgow.com/"
},{
  "id": 2,
  "name": "Manchester",
  "imageSource": "https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2",
  "cityText": "Whether you’re seeking culture, nightlife, history, or just good fun, there are plenty of things to do in Manchester.",
  "link": "https://visitmanchester"
},
{
  "id": 3,
  "name": "London",
  "imageSource": "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
  "cityText": "London is a diverse and exciting city with some of the world's best sights, attractions and activities. With so much to do, it's hard to narrow down the long list of reasons to visit.",
  "link": "https://visitlondon.com"
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TouristInfoCards CityCards={CityCards}/>
        <Bookings />
        <Restaurant />
        <Footer contactDetails={["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]}/>
      </div>
    );
  }
}

export default App;

/*
Within src/App.js, render the <Restaurant /> component (that is provided for you
   in src/Restaurant.js) underneath the <Bookings /> component.
Then convert the <Restaurant /> component to a class component.
*/