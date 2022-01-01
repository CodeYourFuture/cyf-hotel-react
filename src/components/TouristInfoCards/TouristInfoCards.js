import React from "react";

// data
import touristInfoCardsData from "../../tourist-info.json";

import TouristInfoCard from "../TouristInfoCard/index";

// Style
import { Wrapper } from "./TouristInfoCards.styles";

const TouristInfoCards = () => {
  return (
    <Wrapper className="cities">
      {touristInfoCardsData.map(
        ({ imageUrl, cityName, description, link }, index) => (
          <TouristInfoCard
            key={index}
            imageUrl={imageUrl}
            cityName={cityName}
            description={description}
            link={link}
            button={true}
          />
        )
      )}
    </Wrapper>
  );
};

export default TouristInfoCards;
