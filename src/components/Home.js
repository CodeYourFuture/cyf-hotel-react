import React from "react";
import Destinations from "./destinations/Destinations";
import FormDetails from "./formDetails/FormDetails";
import Selects from "./selects/Selects";
import ImgCarousel from "./carousel/ImgCarousel";
function Home() {
  return (
    <div>
      <Destinations />
      <FormDetails />
      <Selects />
      <ImgCarousel />
    </div>
  );
}

export default Home;
