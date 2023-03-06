import React from "react";
import Cities from "./data/cities.json";
import TouristInfoCard from "./TouristInfoCard";
import "./Attractions.css";

const Attractions = () => {
  return (
    <div className="attractions">
      <h1>Attractions</h1>
      <div className="info-cards">
        {Cities.map((city) => {
          return <TouristInfoCard key={city.id} city={city} />;
        })}
      </div>
    </div>
  );
};

export default Attractions;
