import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import Order from "./Order";

const App = () => {
  const contact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        image="https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/4f007762-5423-497d-920f-f4a5b6c86259/glasgow-crime-books-min.png"
        title="Glasgow"
        link="href=https://peoplemakeglasgow.com"
        description="Is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe.Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland"
      />
      <TouristInfoCards
        image="https://www.picturesforwalls.com/blackandwhite/manchester/images/curvedpassage.jpg"
        title="Manchester"
        link="href=https://visitmanchester.com"
        description="Is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry."
      />
      <TouristInfoCards
        image="https://images.unsplash.com/photo-1581950196064-0b98a6586d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
        title="London"
        link="href=https://visitlondon.com"
        description="The capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations"
      />
      <Bookings />
      <Restaurant />
      {/* <Order /> */}

      <Footer contact={contact} />
    </div>
  );
};

export default App;
