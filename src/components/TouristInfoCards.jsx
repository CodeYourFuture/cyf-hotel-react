import React from "react";
import CityCard from "./CityCard";
import data from "./data.json";

const TouristInfoCards = () => {
  return (
    <div className="card-group">
      {data.map((city, index) => (
        <CityCard
          key={index}
          imageSource={city["image-link"]}
          cityName={city["city-name"]}
          link={city["website-link"]}
          visitButton={`Visit ${city["city-name"]}`}
        />
      ))}
    </div>
  );
};

export default TouristInfoCards;
