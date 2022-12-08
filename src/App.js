import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
// import SearchResults from "./SearchResults";

const App = () => {
  let cardAttributes = [
    {
      img:
        "https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      city: "Glasgow",
      src: "http://peoplemakeglasgow.com",
      text:
        "is a city in scotland and it is the capital and largest city of scotland "
    },
    {
      img:
        "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      city: "Manchester",
      src: "http://visitmanchester.com",
      text:
        " is the city in the north of United Kingdom popular for its football team 'Manchester United"
    },
    {
      img:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      city: "London",
      src: "http://visitlondon.com",
      text:
        " is the capital of United Kingdom where you can find museum,library and palaceand has many attarctions."
    }
  ];

  let footerComponents = [
    "123 Fake Street",
    "London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Bookings />
      <Heading />
      <TouristInfoCards cardAttributes={cardAttributes} />
      <Footer footerComponents={footerComponents} />
      {/* <SearchResults /> */}
    </div>
  );
};

export default App;
