import React from "react";

import PeopleMakeGlasgow from "./Images/PeopleMakeGlasgow.avif";
import Manchester from "./Images/Manchester.avif";
import London from "./Images/London.avif";
import { nanoid } from "nanoid";

const glasgow = {
  image: PeopleMakeGlasgow,
  about: `Glasgow is a port city on the River Clyde in Scotland's western
          Lowlands. It's famed for its Victorian and art nouveau architecture, a
          rich legacy of the city's 18th–20th-century prosperity due to trade
          and shipbuilding. Today it's a national cultural hub, home to
          institutions including the Scottish Opera, Scottish Ballet and
          National Theatre of Scotland, as well as acclaimed museums and a
          thriving`,
  name: "Glasgow",
  website: "https://peoplemakeglasgow.com/",
};
const manchester = {
  image: Manchester,
  about: `Manchester is a major city in the northwest of England with a rich
          industrial heritage. The Castlefield conservation area’s 18th-century
          canal system recalls the city’s days as a textile powerhouse, and
          visitors can trace this history at the interactive Museum of Science
          and Industry. The revitalised Salford Quays dockyards now house the
          Daniel Libeskind-designed Imperial War Museum North`,
  name: "Manchester",
  website: "https://www.visitmanchester.com/",
};
const london = {
  image: London,
  about: `London, the capital of England and the United Kingdom, is a
          21st-century city with history stretching back to Roman times. At its
          centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’
          clock tower and Westminster Abbey, site of British monarch
          coronations. Across the Thames River, the London Eye observation wheel
          provides panoramic views of the South Bank cultural`,
  name: "London",
  website: "https://www.visitlondon.com/",
};
//
const arrayOfCityObject = [glasgow, manchester, london];
const touristInfoCards = arrayOfCityObject.map((city) => {
  return (
    <div key={nanoid()} className="card">
      <img
        src={city.image}
        className="card-img-top"
        width="350px"
        height="233px"
      />
      <div className="card-body">
        <h1>{city.name}</h1>
        <p>{city.about}</p>
        <a href={city.website} className="btn btn-primary" target="_blank">
          Go somewhere
        </a>
      </div>
    </div>
  );
});
const TouristInfoCards = () => {
  return <div className="cities-info"> {touristInfoCards}</div>;
};

export default TouristInfoCards;
