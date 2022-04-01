import React from "react";

function TouristInfoCard() {
  const cities = [
    {
      name: "Glasgow",
      link: "peoplemakeglasgow.com",
      source:
        "cdn.pixabay.com/photo/2017/03/25/12/38/glasgow-2173449_960_720.jpg",
      alt: "Glasgow",
      placeName: "Glasgow"
    },
    {
      name: "Manchester",
      link: "www.visitmanchester.com/",
      source:
        "cdn.pixabay.com/photo/2017/04/14/23/47/bridge-2231612_960_720.jpg",
      alt: "Manchester",
      placeName: "Manchester"
    },
    {
      name: "London",
      link: "www.visitlondon.com/",
      source:
        "cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_960_720.jpg",
      alt: "London",
      placeName: "London"
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
              <p>{placeObject.placeName}</p>
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
