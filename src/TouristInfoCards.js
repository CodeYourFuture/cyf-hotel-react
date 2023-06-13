import React from "react";
import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <TouristInfoCard
        image="glasgow.jpg"
        name="Glasgow"
        description="Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding."
        link="https://peoplemakeglasgow.com"
      />
      <TouristInfoCard
        image="manchester.jpg"
        name="Manchester"
        description="Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry."
        link="visitmanchester.com"
      />
      <TouristInfoCard
        image="london.jpg"
        name="london"
        description="London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations."
        link="visitlondon.com"
      />
    </div>
  );
};

export default TouristInfoCards;
