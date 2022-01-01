import React from "react";

// data
import touristInfoCardsData from "../../tourist-info.json";

import TouristInfoCard from "../TouristInfoCard/index";

// Style
import { Wrapper } from "./TouristInfoCards.styles";

const TouristInfoCards = () => {
  return (
    <Wrapper className="cities">
      {touristInfoCardsData.map(({ imageUrl, cityName, description, link }) => (
        <TouristInfoCard
          imageUrl={imageUrl}
          cityName={cityName}
          description={description}
          link={link}
        />
      ))}
    </Wrapper>
  );
};

export default TouristInfoCards;
