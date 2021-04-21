import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

const App = () => {
  const touristInformation = [
    {
      city: "Glasgow",
      site: "https://peoplemakeglasgow.com/",
      imageURL:
        "https://frontline-collections.com/wp-content/uploads/2018/02/Glasgow-Debt-Collection.jpg"
    },
    {
      city: "Manchester",
      site: "https://www.visitmanchester.com/",
      imageURL:
        "https://www.prolificnorth.co.uk/sites/default/files/styles/lightbox_large/public/images/news/manchester-cityscape0.jpg?itok=VjQDdTYJ"
    },
    {
      city: "London",
      site: "https://www.visitlondon.com/",
      imageURL:
        "https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg"
    }
  ];

  const contactInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards touristInformation={touristInformation} />
      <Bookings />
      <Restaurant />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default App;
