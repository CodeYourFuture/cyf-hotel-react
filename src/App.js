import React from "react";
import Search from "./Search";
import Bookings from "./Bookings";
import "./App.css";
import InfoCard from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <div className="headerImg">
        <InfoCard
          imageSource="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/6c/33.jpg"
          href="http://peoplemakeglasgow.com/"
          title="Glasgow"
          paragraph="You’re guaranteed to find accommodation in Glasgow which suits your taste and budget. Whether you’re looking for something uniquely Glaswegian, a trendy hotel, a vibrant hostel or a comfortable city centre apartment, you can be assured of a warm welcome."
        />
        <InfoCard
          imageSource="https://media.istockphoto.com/id/1313298677/photo/autumn-in-manchester-new-hampshire.jpg?b=1&s=170667a&w=0&k=20&c=HorrwlIcpOPXBw0RNLY06OkprjLADWAH8bNoAPQqEn8="
          href="http://visitmanchester.com/"
          title="Manchester"
          paragraph="What’s On in Manchester
As one of the most vibrant and cosmopolitan cities in the UK, there’s always something on in Manchester. With a rolling calendar of events, exhibitions, concerts, markets and theatre you’ll never be stuck for world-class entertainment..."
        />
        <InfoCard
          imageSource="https://media.istockphoto.com/id/1294454411/photo/london-symbols-with-big-ben-double-decker-buses-and-red-phone-booth-in-england-uk.jpg?b=1&s=170667a&w=0&k=20&c=SR5FBt8VvpZEOIxZcTmoEf9XxU0oiSnbobD3E6ZB358="
          href="http://visitlondon.com/"
          title="London"
          paragraph="Navigate London with ease with this guide to the latest traveller information, including visas and money. Discover how to get around London by bus, bicycle, Tube, train, cable car and river boat. Find free London travel maps, familiarise yourself with the London Underground and learn how to use an Oyster card."
        />
      </div>

      <Bookings />

      <Footer />
    </div>
  );
};

export default App;
