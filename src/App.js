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
        image=""
        title="Glasgow"
        link="href=https://peoplemakeglasgow.com"
        description="Is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe"
      />
      <TouristInfoCards
        image=""
        title="Manchester"
        link="href=https://visitmanchester.com"
        description="Is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry."
      />
      <TouristInfoCards
        image=""
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
