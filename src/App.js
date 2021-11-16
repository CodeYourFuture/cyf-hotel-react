import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="card-group">
        <TouristInfoCards
          obj={{
            city: "Glasgow",
            url: "https://www.peoplemakeglasgow.com",
            img:
              "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?width=982&height=655&auto=webp&quality=75"
          }}
        />
        <TouristInfoCards
          obj={{
            city: "London",
            url: "https://www.visitlondon.com/",
            img:
              "https://media.istockphoto.com/photos/aerial-view-of-london-and-the-tower-bridge-picture-id1265900812?k=20&m=1265900812&s=612x612&w=0&h=gDUeVw65Hd8w1Yk0pE9Fbj27vfO20CgSNI03mvx2UDM="
          }}
        />
        <TouristInfoCards
          obj={{
            city: "Manchester",
            url: "https://www.visitmanchester.com",
            img:
              "https://omghcontent.affino.com/AcuCustom/Sitename/DAM/107/GREATER-MANCHESTER-MIN_MainSH.jpg"
          }}
        />
      </div>
      <Bookings />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
