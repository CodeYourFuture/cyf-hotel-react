import React from "react";
import Footer from "./Footer.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import TouristInfoCards from "./TouristInfoCards.js";







const Bookings = () => {
  
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={FakeBookings} />
       
        
        <TouristInfoCards  town="Visit Glasgow"  link = "http://peoplemakeglasgow.com" imageSource = "https://peoplemakeglasgow.com/imager/general/109009/City-centre-George-Square-Content-Block_aa93d8ee9a3cc573b9a01b328410e8b2.jpg"/>
        <TouristInfoCards town = "Visit Manchester" link = "http://visitmanchester.com" imageSource = "https://media.wired.co.uk/photos/6357b98e09e6f1942a2a8a9a/16:9/w_1280,c_limit/HSBC%20MANCHESTER.jpeg"/>
        <TouristInfoCards town = "Visit London" link = "http://visitlondon.com" imageSource = "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0"/>
        <Footer/>
       
      
       

        
 
      </div>
    </div>
  );
};

export default Bookings;
