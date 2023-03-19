import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Search from "./Search";
import Heading from "./Heading"
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import SearchResults from "./Search";
import Restaurant from "./Restaurant";
import RestaurantButton from "./RestaurantButton";



const App = () => {
  const contact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <Heading />
      <div class="cards">
      <TouristInfoCards name="Glasgow" image="https://www.visitscotland.com/blog/wp-content/uploads/2021/10/Park_Circus_and_Kelvingrove_Park.jpg.jpg"  content="" info="https://peoplemakeglasgow.com/"/>
      <TouristInfoCards name="London" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVi5kIsFSbmxAd18dRrqTOKzR5bMSftf8Cg&usqp=CAU" content="" info="https://www.visitlondon.com/"/>
      <TouristInfoCards name="Manchester" image="https://img.etimg.com/thumb/msid-65081396,width-650,height-488,imgsize-361893,,resizemode-75/london-travel-thinkstock.jpg" content="" info="https://www.visitmanchester.com"/>
      </div>
      <Bookings />
      <Restaurant />
      {/* <RestaurantButton /> */}
      <Footer contact={contact} />
      
    </div>
  );
};




export default App;
