import React from "react";
import Restaurant from "./Restaurant";
import Bookings from "./Bookings";
import "./App.css";
//Added my heading//
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import NewBooking from "./NewBooking";

const cities = [
  {
    name: "Glasgow",
    img:
      "https://i1.wp.com/www.hisour.com/wp-content/uploads/2018/05/Architecture-in-Glasgow.jpg?fit=1024%2C640&ssl=1",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    name: "Manchester",
    img:
      "https://assets.hs2.org.uk/wp-content/uploads/2018/03/30101135/H5A1HwPQ-unsplash-900x600.jpg",
    link: "https://visitmanchester.com/"
  },
  {
    name: "London",
    img: "https://lp-cms-production.imgix.net/2019-06/55425108.jpg",
    link: "https://visitlondon.com/"
  }
];
const App = () => {
  return (
    <div className="App">
       <Heading />
      <TouristInfoCards cities={cities} />
      <Bookings />
      <div className="order-newBooking">
        <Restaurant />
        <NewBooking />
      </div>
      <Footer
        address={
          ["123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"]
        }
      />
 </div>
  );
};
