import React from "react";

let InformationCards = [
  {
    city: "Glasgow",
    image:
      "https://www.royalcaribbean.com/content/dam/royal/ports-and-destinations/destinations/british-isles/glasgow-scotland-cityscape.jpg",
    url: "peoplemakeglasgow.com"
  },
  {
    city: "Manchestet",
    image:
      "https://www.roughguides.com/wp-content/uploads/2014/09/Edited-9.-Manchester-SIM-786571-1680x1050.jpg",
    url: "visitmanchester.com"
  },
  {
    city: "London",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/03/10/11/best-london-travel-guides.jpg ",
    url: "visitlondon.com"
  }
];
const TouristInfoCards = () => {
  return (
    <div className="informationcards">
      {InformationCards.map(card => {
        return (
          <div className="card">
            <h3>{card.city}</h3>
            <img src={card.image} className="card-img-top" />

            <div>
              <a href={card.url} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
