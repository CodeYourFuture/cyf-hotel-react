import React from "react";
import "./style/TouristInfoCards.css";

function TouristInfoCard() {
  const cities = [
    {
      name: "Glasgow",
      link: "peoplemakeglasgow.com",
      source:
        "cdn.pixabay.com/photo/2017/03/25/12/38/glasgow-2173449_960_720.jpg",
      alt: "Glasgow",
      placeName: "Glasgow",
      placeSubheading: "City in Scotland",
      paragraph:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene. ― Google"
    },
    {
      name: "Manchester",
      link: "www.visitmanchester.com/",
      source:
        "cdn.pixabay.com/photo/2017/04/14/23/47/bridge-2231612_960_720.jpg",
      alt: "Manchester",
      placeName: "Manchester",
      placeSubheading: "City in England",
      paragraph:
        "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre. ― Google"
    },
    {
      name: "London",
      link: "www.visitlondon.com/",
      source:
        "cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_960_720.jpg",
      alt: "London",
      placeName: "London",
      placeSubheading: "Capital of England",
      paragraph:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. ― Google"
    }
  ];

  return (
    <div className="cardContainer">
      {cities.map(placeObject => {
        return (
          <div className="card">
            <img
              src={`https://${placeObject.source}`}
              className="card-img-top"
              alt={placeObject.alt}
            />
            <div className="card-body">
              <h2>{placeObject.placeName}</h2>
              <h3>{placeObject.placeSubheading}</h3>
              <p>{placeObject.paragraph}</p>
              <a
                href={`https://${placeObject.link}`}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCard;
