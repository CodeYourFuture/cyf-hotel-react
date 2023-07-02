import React from "react";
import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <TouristInfoCard
        image="london.jpg"
        title="London"
        description="As one of the world's major global cities, London exerts a strong influence on its arts, entertainment, fashion, commerce and finance, education, health care, media, science and technology, tourism, and transport and communications"
        link="https://visitlondon.com"
      />
      <TouristInfoCard
        image="manchester.jpg"
        title="Manchester"
        description="The city is notable for its architecture, culture, musical exports, media links, scientific and engineering output, social impact, sports clubs, and transport connections. It is home to two world famous football clubs - City and United"
        link="https://visitmanchester.com"
      />
      <TouristInfoCard
        image="glasgow.jpg"
        title="Glasgow"
        description="Glasgow has the largest economy in Scotland and the 3rd highest GDP per capita of any city in the UK. Glasgow's major cultural institutions is the Burrell Collection, Kelvingrove Art Gallery and Museum, the Royal Conservatoire of Scotland."
        link="https://peoplemakeglasgow.com"
      />
    </div>
  );
};

export default TouristInfoCards;
