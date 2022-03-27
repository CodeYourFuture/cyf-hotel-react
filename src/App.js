import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";

import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />

      <div className="containerOne">
        <TouristInfoCards
          image="https://media.gettyimages.com/photos/millenium-bridge-in-manchester-england-uk-millenium-bridge-picture-id667071566?s=612x612"
          name="Manchester"
          description="Cras eget convallis felis. Aliquam ut nibh enim. Fusce faucibus massa vitae ex scelerisque, a ultrices turpis 
          imperdiet. Nunc varius gravida justo in dignissim. Etiam pellentesque semper finibus. Praesent turpis nunc, ultrices at libero ac, tristique sollicitudin lorem. Quisque et ante dapibus, imperdiet odio vel, pharetra dolor. "
          button="Explore"
          link="https://www.visitmanchester.com/"
        />

        <TouristInfoCards
          image="https://thumbs.dreamstime.com/b/london-big-ben-houses-parliament-uk-49652572.jpg"
          name="London"
          description="Cras eget convallis felis. Aliquam ut nibh enim. Fusce faucibus massa vitae ex scelerisque, a ultrices turpis 
          imperdiet. Nunc varius gravida justo in dignissim. Etiam pellentesque semper finibus. Praesent turpis nunc, ultrices at libero ac, tristique sollicitudin lorem. Quisque et ante dapibus, imperdiet odio vel, pharetra dolor. "
          button="Explore"
          link="https://visitlondon.com"
        />

        <TouristInfoCards
          image="https://media.istockphoto.com/photos/squinty-bridge-glasgow-picture-id469974825?k=20&m=469974825&s=612x612&w=0&h=SHYq92xjEKGDNZU1sVBnhQJKsTtujh7vv-psQ_zCNyw="
          name="Glassgow"
          description="Cras eget convallis felis. Aliquam ut nibh enim. Fusce faucibus massa vitae ex scelerisque, a ultrices turpis imperdiet. Nunc varius gravida justo in dignissim. Etiam pellentesque semper finibus. Praesent turpis nunc, ultrices at libero ac, tristique sollicitudin lorem. Quisque et ante dapibus, 
          imperdiet odio vel, pharetra dolor. "
          button="Explore"
          link="https://peoplemakeglasgow.com/"
        />
      </div>

      <Bookings />
      <Restaurant />

      <div className="footer">
        <Footer
          const
          data={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789"
          ]}
        />
      </div>
    </div>
  );
};

export default App;
