import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="tourist-info-cards-container">
      <div className="tourist-info-card">
        <img src="../images/london.jpg" className="tourist-info-card-image" />
        <h2 className="tourist-info-card-title">London</h2>
        <p className="tourist-info-card-description">
          London, the capital of England and the United Kingdom, is a
          21st-century city with history stretching back to Roman times. At its
          centre stand the imposing Houses of Parliament, the iconic 'Big Ben'
          clock tower and Westminster Abbey, site of British monarch
          coronations. Across the Thames River, the London Eye observation wheel
          provides panoramic views of the South Bank cultural complex, and the
          entire city.
        </p>
        <a
          href="https://visitlondon.com"
          target="_blank"
          className="tourist-info-card-link"
        >
          More Information
        </a>
      </div>
      <div className="tourist-info-card">
        <img
          src="../images/manchester.jpg"
          className="tourist-info-card-image"
        />
        <h2 className="tourist-info-card-title">Manchester</h2>
        <p className="tourist-info-card-description">
          Manchester is a major city in the northwest of England with a rich
          industrial heritage. The Castlefield conservation area's 18th-century
          canal system recalls the city's days as a textile powerhouse, and
          visitors can trace this history at the interactive Museum of Science
          and Industry. The revitalised Salford Quays dockyards now house the
          Daniel Libeskind-designed Imperial War Museum North and the Lowry
          cultural centre.
        </p>
        <a
          href="https://visitmanchester.com"
          target="_blank"
          className="tourist-info-card-link"
        >
          More Information
        </a>
      </div>
      <div className="tourist-info-card">
        <img src="../images/glasgow.jpg" className="tourist-info-card-image" />
        <h2 className="tourist-info-card-title">Glasgow</h2>
        <p className="tourist-info-card-description">
          Glasgow is a port city on the River Clyde in Scotland's western
          Lowlands. It's famed for its Victorian and art nouveau architecture, a
          rich legacy of the city's 18th-20th-century prosperity due to trade
          and shipbuilding. Today it's a national cultural hub, home to
          institutions including the Scottish Opera, Scottish Ballet and
          National Theatre of Scotland, as well as acclaimed museums and a
          thriving music scene.
        </p>
        <a
          href="https://peoplemakeglasgow.com"
          target="_blank"
          className="tourist-info-card-link"
        >
          More Information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
