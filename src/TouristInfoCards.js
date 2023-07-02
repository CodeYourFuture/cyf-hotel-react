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
        description="Manchester is a major city in the northwest of England with a rich
        industrial heritage..."
        link="https://visitmanchester.com"
      />
      <TouristInfoCard
        image="glasgow.jpg"
        title="Glasgow"
        description="Glasgow is a port city on the River Clyde in Scotland's western
        Lowlands. It's famed for its Victorian and art nouveau architecture..."
        link="https://peoplemakeglasgow.com"
      />
    </div>
  );
};

export default TouristInfoCards;
