import React from "react";

const TouristInfoCards = () => {
  const cardDetails = [
    {
      name: "Glasgow",
      image: "https://i.ytimg.com/vi/S0pPxjsKrFU/maxresdefault.jpg",
      url: "http://peoplemakeglasgow.com",
      summary: "Glasgow is Wonderful"
    },
    {
      name: "Manchester",
      image:
        "https://embedwistia-a.akamaihd.net/deliveries/0a753553e6fe2ea637ece53f983cb8c1.webp?image_crop_resized=1280x750",
      url: "http://visitmanchester.com",
      summary: "Manchester is Wonderful"
    },
    {
      name: "London",
      image:
        "https://embed-fastly.wistia.com/deliveries/983119e00a9d2ddcc76b44f0ec6b10ca.webp?image_crop_resized=1280x750",
      url: "http://visitlondon.com",
      summary: "London is Wonderful"
    }
  ];
  return (
    <div className="cards-container">
      {cardDetails.map((city, index) => {
        return (
          <div className="card" key={index}>
            <h1>{city.name}</h1>
            <img src={city.image} className="card-img-top" />
            <div className="card-body">
              <p>{city.summary}</p>
              <a href={city.url} className="btn btn-primary">
                Explore
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
